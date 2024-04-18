<script lang="ts">
import { goto } from "$app/navigation";
import { authHandlers, authStore } from '../../stores/authStore';
import { derived } from 'svelte/store';

let register = false;
let email = '';
let password = '';
let confirmPassword = '';
let errorMessage = '';

const isLoggedIn = derived(authStore, $authStore => !!$authStore);

async function handleSubmit() {
    if (!email || !password || (register && !confirmPassword)) {
        return;
    }

    if (register && password === confirmPassword) {
        try {
            await authHandlers.signup(email, password);
            register = false;
            errorMessage = '';
        } catch (err) {
            console.log(err);
            if (err instanceof Error) {
                if (err.message === "Firebase: Error (auth/email-already-in-use).") {
                    errorMessage = "Email already in use";
                } else if (err.message === "Firebase: Error (auth/invalid-email).") {
                    errorMessage = "Invalid email";
                } else if (err.message === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
                    errorMessage = "Password must be at least 6 characters";
                }
            }
        }
    } else if (register && password !== confirmPassword) {
        errorMessage = "Passwords do not match";
    } else {
        try {
            await authHandlers.login(email, password);
            goto('/model1');
        } catch (err) {
            console.log(err);
            errorMessage = "Incorrect Email or Password";
        }
    }
}
</script>

<div class="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
    <h1 class="text-2xl font-bold mb-4">{register ? 'Register' : 'Log in'}</h1>
    <form on:submit|preventDefault={handleSubmit}>
        <label class="text-gray-600 mb-4">
            <input bind:value={email} type="email" placeholder="Email" required />
        </label>
        <div></div>
        <label class="text-gray-600 mb-4">
            <input bind:value={password} type="password" placeholder="Password" required />
        </label>
        <div></div>
        {#if register}
            <label class="text-gray-600 mb-4">
                <input bind:value={confirmPassword} type="password" placeholder="Confirm Password" required />
            </label>
        {/if}
        {#if errorMessage}
            <div class="text-red-500 text-sm mb-4">{errorMessage}</div>
        {/if}
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
    </form>
    {#if register}
        <div 
            class="mt-4 cursor-pointer text-blue-500"
            on:click={() => {
                register = false;
                errorMessage = '';
            }}
        >
            Already have an account? Log in
        </div>
    {:else}
        <div
            class="mt-4 cursor-pointer text-blue-500"
            on:click={() => {
                register = true;
                errorMessage = '';
            }}
        >
            Don't have an account? Sign Up
        </div>
    {/if}
</div>
