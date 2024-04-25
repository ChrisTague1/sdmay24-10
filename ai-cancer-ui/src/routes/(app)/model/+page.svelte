<script lang='ts'>
    import { enhance } from '$app/forms';

    export let form;
</script>

<main class="container mx-auto px-8 py-12">
    <div class="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 border border-gray-200">
        <h2 class="text-3xl font-bold text-blue-500 mb-6">Upload CSV</h2>
        <p class="text-gray-700 mb-8">Please upload your cancer data CSV file for cancer recurrence prediction.</p>

        <form method='POST' enctype="multipart/form-data" use:enhance>
            <div class="relative mb-8">
                <input type="file" class="absolute opacity-0 w-full h-full cursor-pointer" accept=".csv" name="cancerFile"/>
                <div class="bg-blue-100 border border-blue-300 rounded-md p-4 pr-12 w-full">
                    <span class="text-gray-500">Choose File</span>
                    <i class="fas fa-upload absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500"></i>
                </div>
            </div>
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 w-full">Upload</button>
        </form>

        {#if form}
            <h2 class="mt-8 text-2xl font-bold text-blue-500">Cancer will come back in {form.prediction} months</h2>
        {/if}
    </div>
</main>
