<script>
    import "../app.css";

    const randomHeroText = [
        "Bell, we've got a job to do.",
        "I built this with Svelte and Tailwind with a little to zero knowledge of either.",
        "I don't like frontend development.",
        "I don't like sand. It's coarse and rough and irritating and it gets everywhere.",
        "Enter Enter Mission!",
        "Riot please remove Breeze from the map pool forever.",
        "I'm a software engineer who was forced to fix computers, do IT works, graphic design, and now frontend development.",
        "Lycoris Recoil is the GOAT",
        "Spiral V3.5 Flash Hider, FSS Sharkfin 90, Otrezat Stock, True-Tac Grip",
        "undefined",
        "She was a React girl, he was a Svelte boy.",
        "Apparently you have to jump Pin 16 and 17 on the ATX 24 pin connector to turn on the PSU.",
        "Arduino is the best thing since sliced bread.",
        "Roomba with gun on it, call it a Wheelson. Maybe attach a speaker that plays Girls Und Panzer music.",
        "UAV Online.",
        "Jesse we need to cook.",
        "Don't pass the AUX cord to wzstats.gg. They'll just say that the new meta is whatever's new.",
        "ambasing",
        "Tailwind UI is a paid service????",
        "isn't Svelte just a compiler? So, I can just use pure HTML for this project?",
        "Ditch Git. Use Mercurial.",
        "Bring me 115.",
        "Fetch me their souls.",
        "There is no hope.",
        "Can you imagine an imaginary menagerie manager imagining managing an imaginary menagerie?",
        "Screw it, Cold War 2 coming soon.",
        (2025 - new Date().getFullYear()) != 0 ? (2025 - new Date().getFullYear()) + " years until we reach the Black Ops 2 timeline." : "Where's Raul Menendez?",
        "Isn't JSonata just JavaScript?",
        "I don't know everything, I just know what I know.",
        "se no demo sonnan ja dame",
        "Metal Gear?",
        "A dud?",
        "I'm not a hero. Never was. Never will be.",
        "Hey, this text random algorithm is not that random. It's tied to uniform distribution.",
        "TACTICAL NUKE INCOMING!",
        "So, as a joke, I went to my friend's house wearing Tsubasa Hanekawa's wig and clothes."]

    const randomHeroTextIndex = Math.floor(Math.random() * randomHeroText.length);
    const randomHeroTextValue = randomHeroText[randomHeroTextIndex];

    let count = 0;

    function refreshPage() {
        count++;
    }

    let theme = 'Light';
</script>

<div class ="hero min-h-screen" style="background-image: url(https://media.tenor.com/kR7OOCL-nroAAAAC/ryo-yamada-thumbs-up.gif);">
    <div class="hero-overlay bg-opacity-70"></div>
    <!-- stick to the left -->
    <div class="hero-content text-neutral-content text-center">
        <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">{randomHeroTextValue}</h1>
            <button on:click={() => window.location.reload()} class="btn glass btn-primary">What?</button>
        </div>
    </div>
</div>