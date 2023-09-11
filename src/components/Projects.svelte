<script>
    import MonthlyCards from "./cards/MonthlyCards.svelte";
    import MonthlyOST from "./cards/MonthlyOST.svelte";
</script>

<section>
    <div class="carousel">
        <div class="carousel-item p-5">
            <MonthlyCards />
        </div>
        <div class="carousel-item p-5">
            <MonthlyOST />
        </div>
    </div>
</section>