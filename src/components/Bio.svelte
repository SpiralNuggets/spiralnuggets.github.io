<script>
    import "../app.css"; //lmao cope harder react users
    import rcxd from '$lib/assets/RC-XD_Scorestreak_BOCW.png'
    import viewport from '$lib/viewport.js'
    import { fly } from "svelte/transition";

</script>

<style>
    .spoiler{
        color: hsl(var(--n));
        background-color: hsl(var(--n));
    }

    .spoiler:hover{
        color: hsl(var(--n));
        background-color: transparent;
    }

    .redacted{
        color: hsl(var(--n));
        background-color: hsl(var(--n));
    }

</style>


<section>
<div>
    <h1 id="bio" class="text-4xl font-bold p-5 justify-center" >I should put this section out first, right?</h1>
    <p class="pl-5">People on the internet that is not recruiters call me SpiralNuggets. I'm a Software Engineering Undergrad from KMITL. I actually have no specialties and have no problem using whatever's being thrown at me to make something worthwile and usable. This includes reinventing the wheel for a simple Arduino project, committing myself to make stupid gameplay compilation videos every single month, running a meme group full of niche memes, literally compiling Tailwind components into a website which looks like a single step from WWW-era sites, making <a class="link link-primary" href="https://github.com/dulapahv/Kanbaru">an actual software</a> and more.</p>
    <img src={rcxd} alt="An RC-XD, RC Car bomb from Black Ops."class="pt-5 pl-5 h-64">
    <p class="text-sm text-opacity-50 pl-5 pb-5">Figure 1: If you give me a task, documentation and motivation <br> to make an RC-XD, I can make one.</p>
    <p class="p-5"> Officially, and acknowledged by my collegues and the institution that I study in, I have done works on plethora of projects, both in programming and in other field. <i>cough</i> arts <i>cough</i>. This ranges from a simple graphics design with Photoshop, working on a commercial project for free as the client turns out to be my dad's friend/godmother, on Photoshop, a simple Python code to reformat a Bot name list from one game's format to the other, then one for shuffling it <s>(which ends up shuffling the <b>script file</b> itself)</s>, a Java program with an actual GUI that is actually useful for once, hosting the Git server for everyone to use, albeit no one uses it so we kinda just host a Minecraft server on it. </p>
    <p class="p-5"> Oh, did I mention that I also do TA sessions for various subjects in the university? Rust, C++, JavaScript and Computer Organization (Which stands for RasPi and Assembly). </p>
    <p class="p-5"> I also don't use AI to generate a majority of my work. It's only used for generating test cases <s>by typing in "Hitagi" and it will return the whole cast of the show</s>, funny stuffs like <a class="link link-primary" href="https://chat.openai.com/share/64e267da-f8f2-481b-bd32-f2e423b1a1f5">forcing an AI to change the style of FaZe Jev's rage moment</a> and boilerplates so don't worry, I'm a real one.</p>
    <p class="p-5"> Thanks to years of constantly being alone, I can work solo well, or in a team, albeit with subpar performance due to interpersonal conflicts. I still reach out for advices though, and it works both ways. I am a fountain of ideas, like Asakusa. If you stumbled upon me, chanced are, I'm thinking about something, such as my next project, a lightbulb after I finally thought of an idea to fix some code, or <a class="link link-primary" href="https://bakemonogatari.fandom.com/wiki/Tsubasa_Hanekawa">Tsubasa Hanekawa.</a></p>
    <p class="p-5"> <span class="spoiler">For recruiters, I'm Anucha Cheewachanon. My Linkedin profile is at /in/alphacharlie/</span></p>

    <h1 id="bio" class="text-3xl font-bold p-5 tb-20 mb-30">So, why is he unique?</h1>
    <div class="chat chat-start pl-5">
        <div class="chat-image avatar">
            <div class="w-10 mb-10 rounded-full">
                <img src="https://www.sideshow.com/storage/product-images/400060/t-800-endoskeleton_terminator_square.jpg"/>
            </div>
        </div>
        <div class="chat-bubble mb-10">
            Based on the autobiography, the person’s personality seems to be:
            <ul style="list-style-type:disc;" class="pl-5">
                <li>Creative and adventurous: They have no problem using whatever’s being thrown at them to make something worthwhile and usable. They also have a fountain of ideas and are constantly thinking about their next project.</li>
                <li>Versatile and skilled: They have done works on a plethora of projects, both in programming and in other fields. They also do TA sessions for various subjects in the university.</li>
                <li>Humble and honest: They admit that they have no specialties and that they use AI to generate some of their work. They also acknowledge their subpar performance in teams due to interpersonal conflicts.</li>
                <li>Humorous and quirky: They use a lot of informal language, sarcasm, and references to pop culture in their autobiography. They also mention some of their unusual hobbies and interests, such as running a meme group, making stupid gameplay compilation videos, and thinking about Tsubasa Hanekawa.</li>
            </ul>
        </div>
    </div>
</div>
</section>

