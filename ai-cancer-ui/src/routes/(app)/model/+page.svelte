<script lang='ts'>
    import { enhance } from '$app/forms';
    import type { ChangeEventHandler } from 'svelte/elements';
    import type {PageData} from './$types';

    export let form;
    export let data: PageData;

    let { supabase, session } = data;
    $: ({ supabase, session } = data);

    let fileName = '';
    let email = '';

    const handleFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const file = (event.target as unknown as { files: File[] }).files[0];
        fileName = file.name;
    }

    const handleSendEmail = async () => {
        const {data, error} = await supabase.rpc('get_user_id_by_email', { email });

        if (error !== null) {
            console.log(error);
        } else {
            const {id: patientId} = (data as NonNullable<typeof data>)[0];

            const value = Number(form?.prediction);

            if (!isNaN(value)) {
                const {error} = await supabase
                    .from('history')
                    .insert([{
                        created_by: session?.user.id,
                        created_for: patientId,
                        value
                    }]);

                if (error !== null) {
                    console.log(error);
                }
            }
        }

        form = null;
        fileName = '';
        email = '';
    }
</script>

<main class="container mx-auto px-8 py-12">
    <div class="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 border border-gray-200">
        <h2 class="text-3xl font-bold text-blue-500 mb-6">Upload CSV</h2>
        <p class="text-gray-700 mb-8">Please upload your cancer data CSV file for cancer recurrence prediction.</p>

        <form method='POST' enctype="multipart/form-data" use:enhance>
            <div class="relative mb-8">
                <input
                    type="file"
                    class="absolute opacity-0 w-full h-full cursor-pointer"
                    accept=".csv"
                    name="cancerFile"
                    on:change={handleFileChange}
                />
                <div class="bg-blue-100 border border-blue-300 rounded-md p-4 pr-12 w-full">
                    {#if fileName}
                        <span class="text-gray-700">{fileName}</span>
                    {:else}
                        <span class="text-gray-500">Choose File</span>
                    {/if}
                    <i class="fas fa-upload absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500"></i>
                </div>
            </div>

            <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 w-full">Upload</button>
        </form>

        {#if form}
            <h2 class="mt-8 text-2xl font-bold text-blue-500">Cancer will come back in {form.prediction} months</h2>

            <div class="mt-8">
                <label for="email" class="block text-gray-700 mb-2">Enter Patient Email</label>
                <input
                    type="email"
                    id="email"
                    bind:value={email}
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                    placeholder="Your email"
                    required
                />
                <button
                    on:click={handleSendEmail}
                    class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 w-full"
                >
                    Send Results
                </button>
            </div>
        {/if}
    </div>
</main>
