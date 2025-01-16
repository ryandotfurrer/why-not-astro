<script>
    import MinusIconSvelte from './MinusIconSvelte.svelte';
    import PlusIconSvelte from './PlusIconSvelte.svelte';
    
    let count = 0;

    function increment() {
        count += 1;
    }

    function decrement() {
        count -= 1;
    }
</script>

<div>
    <p class="text-lg text-cyan-50">Counter: {count}</p>
    <div class="flex gap-2">
        <button on:click={increment} class="bg-success text-success-foreground px-4 py-2 rounded-sm">
            <PlusIconSvelte>
                <span class="sr-only">Increase count</span>
            </PlusIconSvelte>
        </button>
        <button on:click={decrement} class="bg-destructive text-destructive-foreground px-4 py-2 rounded-sm">
            <MinusIconSvelte>
                <span class="sr-only">Decrease count</span>
            </MinusIconSvelte>
        </button>
    </div>
</div>
