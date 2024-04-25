<script lang="ts">
    import { goto } from "$app/navigation";
    import type { PageData } from "./$types";

    export let data: PageData;

    let { supabase } = data;
    $: ({ supabase } = data);
</script>
Dashboard page
<button
    on:click={async () => {
        await supabase.auth.signOut();
        goto('/auth')
    }}
>
    Sign out
</button>
