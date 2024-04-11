
<script>
    import { goto } from "$app/navigation";
	import { authHandlers, authStore } from '../../stores/authStore';

	let register = false;
	let email = '';
	let password = '';
	let confirmPassword = '';

	async function handleSubmit() {
		if (!email || !password || (register && !confirmPassword)) {
			return;
		}
		if (register && password === confirmPassword) {
			try {
				await authHandlers.signup(email, password);
                // @ts-ignore
                document.getElementById("back").click()
			} catch (err) {
				console.log(err);
                // @ts-ignore
                console.log(err.message);
                // @ts-ignore
                if(err.message=="Firebase: Error (auth/email-already-in-use).")
                {
                    // @ts-ignore
                    document.getElementById("ErrMsg").innerHTML = "Email already in use"
                }
                // @ts-ignore
                if(err.message=="Firebase: Error (auth/invalid-email).")
                {
                    // @ts-ignore
                    document.getElementById("ErrMsg").innerHTML = "Invalid email"
                }
                // @ts-ignore
                if(err.message=="Firebase: Password should be at least 6 characters (auth/weak-password).")
                {
                    // @ts-ignore
                    document.getElementById("ErrMsg").innerHTML = "Password must be at least 6 characters"
                }
			}
		} 
        else if(register && password != confirmPassword)
        {
            // @ts-ignore
            document.getElementById("ErrMsg").innerHTML = "Passwords do not match"
        }
        else
        {
			try {
				await authHandlers.login(email, password);
                goto('/model1');
			} catch (err) {
				console.log(err);
                // @ts-ignore
                document.getElementById("ErrMsg").innerHTML = "Incorrect Email or Password"
			}
		}
	}
</script>

<div class="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
	<h1 class="text-2xl font-bold mb-4">{register ? 'Register' : 'Log in'}</h1>
	<form>
		<label class="text-gray-600 mb-4">
			<input bind:value={email} type="email" placeholder="Email" />
		</label>
        <div></div>
		<label class="text-gray-600 mb-4">
			<input bind:value={password} type="password" placeholder="Password" />
		</label>
        <div></div>
		{#if register}
			<label class="text-gray-600 mb-4">
				<input bind:value={confirmPassword} type="password" placeholder="Confirm Password" />
			</label>
		{/if}
        <div style="color: red;font-size: medium;" id="ErrMsg"></div>
		<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={handleSubmit}>Submit</button>
	</form>
	{#if register}
		<div
			id="back"
			on:click={() => {
                // @ts-ignore
                document.getElementById("ErrMsg").innerHTML = ""
				register = false;
			}}
			on:keydown={() => {}}
		>
			Already have an account?
			<p style="color: blue;font-size: medium;">Log in</p>
		</div>
	{:else}
		<div
			on:click={() => {
                // @ts-ignore
                document.getElementById("ErrMsg").innerHTML = ""
				register = true;
			}}
			on:keydown={() => {}}
		>
			Don't have an account? <p style="color: blue;font-size: medium;">Sign Up</p>
		</div>
	{/if}
</div>