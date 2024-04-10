<script lang='ts'>
    import {enhance} from '$app/forms';

    export let form;
</script>
<div class="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl">
    <h2 class="text-2xl font-bold mb-4">Upload Bloodwork CSV</h2>
    <p class="text-gray-600 mb-4">Please upload your bloodwork CSV file for cancer recurrence prediction.</p>
    <form method='POST' enctype="multipart/form-data" use:enhance>
        <input type="file" class="border rounded-md p-2 w-full mb-4" accept=".csv" name="cancerFile"/>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Upload</button>
    </form>
    {#if form}
        <h2 class="mt-4 text-2xl font-bold">{`Cancer will come back in ${form.prediction} months`}</h2>
    {/if}
</div>
