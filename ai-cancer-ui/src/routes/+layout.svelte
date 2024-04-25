<script lang='ts'>
import '../app.css';
import { invalidate } from '$app/navigation';
import { onMount } from 'svelte';
import type { LayoutData } from './$types';

export let data: LayoutData;

let { supabase, session } = data;
$: ({ supabase, session } = data);

onMount(() => {
    const {
        data: { subscription },
    } = supabase.auth.onAuthStateChange((_, _session) => {
        if (_session?.expires_at !== session?.expires_at) {
            invalidate('supabase:auth')
        }
    })

    return () => subscription.unsubscribe()
});
</script>
<slot />
<style lang='postcss'>
    :global(body) {
        background-image: url('/static/light-grey-texture-background-image.webp');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
</style>
