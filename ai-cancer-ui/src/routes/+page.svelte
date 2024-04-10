<script>
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyCRArYuRx4hOIEntpd6sOj7PnwOzMG29A0",
        authDomain: "sdmay24-10.firebaseapp.com",
        projectId: "sdmay24-10",
        storageBucket: "sdmay24-10.appspot.com",
        messagingSenderId: "159889844134",
        appId: "1:159889844134:web:f5f20aa862754ba2b29167",
        measurementId: "G-E2BZSNX333"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);






    import { goto } from "$app/navigation";
    $: submit = async () =>
    {
        // @ts-ignore
        if(document.getElementById("username").value==="admin"&&document.getElementById("password").value==="admin")
        {
            goto('/app')
        }
        else
        {

        }
    }
    function create()
    {
        console.log("HELLO")
        goto('/create')
    }
</script>

<main class="form-signin">
    <form on:submit|preventDefault={submit}>
        <div class="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
            <h1 class="text-2xl font-bold mb-4">Please Sign In</h1>
            <div class="form-floating">
                <label class="text-gray-600 mb-4">Username</label>
                <input id="username" class="form-control" placeholder="username">
            </div>
            <div class="form-floating">
                <label class="text-gray-600 mb-4">Password</label>
                <input type="password" id="password" class="form-control" placeholder="password">
            </div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
            <p id="CreateAccount" class="text-blue-600 mb-4" on:click={create}>Create Account</p>
        </div>
    </form>
</main>