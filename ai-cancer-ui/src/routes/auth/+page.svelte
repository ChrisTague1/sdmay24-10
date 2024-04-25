<script lang='ts'>
    import type { PageData } from './$types';
    import { goto } from '$app/navigation';

    export let data: PageData;

    let { supabase } = data;
    $: ({ supabase } = data);

    let email: string;
    let password: string;
    let checkEmailMessage = false;

    const handleSignUp = async () => {
        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`,
            },
        });

        email = '';
        password = '';

        if (error !== null) {
            console.log(error);
            return;
        }

        checkEmailMessage = true;
    };

    const handleSignIn = async () => {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error !== null) {
            console.log(error);
            alert(error);
            return;
        }

        goto('/model1');
    };
</script>

<div class="min-h-screen p-4 flex items-center justify-center">
    <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        {#if checkEmailMessage}
            <p class="text-center text-lg mb-4">Please check your email to finish creating your account</p>
        {:else}
            <input
                type="email"
                name="email"
                bind:value={email}
                placeholder="Email"
                class="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="password"
                name="password"
                bind:value={password}
                placeholder="Password"
                class="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div class="flex justify-between">
                <button
                    type="submit"
                    on:click={handleSignUp}
                    class="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Register
                </button>
                <button
                    on:click={handleSignIn}
                    class="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                >
                    Login
                </button>
            </div>
        {/if}
    </div>
</div>
