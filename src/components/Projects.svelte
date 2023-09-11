<script>
    import MonthlyCards from "./cards/MonthlyCards.svelte";
    import MonthlyOST from "./cards/MonthlyOST.svelte";
    import Kanbaru from "./cards/Kanbaru.svelte";
</script>

<section>
    <div class="carousel">
        <div class="carousel-item p-5">
            <MonthlyCards />
        </div>
        <div class="carousel-item p-5">
            <MonthlyOST />
        </div>
        <div class="carousel-item p-5">
            <Kanbaru />
        </div>
    </div>
</section>