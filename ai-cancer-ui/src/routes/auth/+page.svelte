<script lang='ts'>
    import { goto } from '$app/navigation';
</script>

<div class="min-h-screen p-4 flex items-center justify-center">
    <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div class="max-w-md mx-auto">
            <button 
                on:click={() => {
                    goto('/auth/doctor')
                }}
                class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 mb-4"
            >
                Doctor Sign In
            </button>
            <button
                on:click={() => {
                    goto('/auth/patient')
                }}
                class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300"
            >
                Patient Sign In
            </button>
        </div>
    </div>
</div>
