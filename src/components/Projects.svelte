<script>
    import MonthlyCards from "./cards/MonthlyCards.svelte";
    import MonthlyOST from "./cards/MonthlyOST.svelte";
    import Kanbaru from "./cards/Kanbaru.svelte";
    import ProjectCard from "./cards/ProjectCard.svelte";
</script>

<section>

    <h1 id="projects" class="text-4xl font-bold p-5 justify-center vw">Projects</h1>

    <div class="carousel p-5">
        <div class="carousel-item p-5">
            <MonthlyCards />
        </div>
        <div class="carousel-item p-5">
            <MonthlyOST />
        </div>
        <div class="carousel-item p-5">
            <Kanbaru />
        </div>
        <div class="carousel-item p-5">
            <ProjectCard 
                pic="https://media.tenor.com/5ADmfF_2iUIAAAAC/ryo-yamada-bocchi-the-rock.gif"
                name="An unnamed project"
                desc="video game"
                link="https://youtu.be/77IkfBl6eww?t=294"
            />
        </div> 
    </div>
</section>