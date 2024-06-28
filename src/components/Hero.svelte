<script>
    import "../app.css";
    import {onMount} from "svelte";

    export const prerender = false;

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
        "So, as a joke, I went to my friend's house wearing Tsubasa Hanekawa's wig and clothes.",
        "Reznov's dead, Mason. You hear me? He's dead.",
        "The best Battlefield game is Battlefield 2.",
        "The best Battlefield game is Bad Company 2.",
        "read sayonara zetsubou sensei",
        "If you like cute shows, consider watching Puella Magi Madoka Magica.*",
        "Darth Vader is Luke's father. Sorry for spoiling it.",
        "vtwi;t",
        "Unit 731",
        '"Sanban, soutenshu, Akiyama Yukari!"',
        "If he has a Yukari Akiyama profile pic, run.",
        "Step 1: Secure the keys.",
        "You name is Alex Mason, You were born in Fairbanks, Alaska. In 1961, you served in a CIA assassination team known as Operation 40. Is this correct?",
        "On your feet, soldier. We are leaving.",
        "Brutal Garcon Huff-Huffs a Half Blood Boy",
        "Chances are, you did not play Idol by Yoasobi on a knife round in CS:GO.",
        "Node.js is a mistake.",
        "Remember, no Russian.",
        "God of War leaving your daughter quick time event",
        "にゃにゃめにゃにゃじゅうにゃにゃどのにゃらびでにゃくにゃくいにゃにゃくにゃにゃはんにゃにゃだいにゃんにゃくにゃらべてにゃがにゃがめ",
        "My name is Jugemu-Jugemu Goko-no surikire Kaijarisuigyo-no Suigyomatsu Unraimatsu Furaimatsu Ku Neru Tokoro-ni Sumu Tokoro Yabura Koji-no Bura Koji Paipo-paipo Paipo-no-shuringan Shuringan-no Gurindai Gurindai-no Ponpokopi-no Ponpokona-no Chokyumei-no Chosuke.",
        "Sakana 🐟",
        "Teacher, I want to talk about my life. What should I do from now on? Are you just going to tell me 'no one knows that' or something?",
        "Oarai Town actually exists? Damn. On your feet soldier, we are leaving.",
        "chiraq",
        "The world, for 2 pounds? Yessir!",
        "girls und panzer fan search history",
        "THAT is Viktor Novikov, head of Sanguine and ringleader of IAGO. Quite the resume.",
        "I'm in despair! [any new javascript fullstack framework] has left me in despair!",
        "Bocchi the outdated and obsoleted AngularJS app",
        "pnpm > npm > yarn",
        "Ready or Not? Of course not, it's still in Early Access.",
        "<davidmason>",
        "You must have Juggernog drank in order to use this website, because this website may be too spicy for you.",
        "i hate django (the framework). i like django (the character) btw.",
        "Marked One is actually Strelok.",
        "ATTENTION STALKERS: An emission is approaching. I repeat, an emission is approaching. Seek cover immediately.",
        "Hey there, would you like to sign my petition?",
        "I think my mom would like Sasaki To Miyano",
        "u see i need my payday, 2",
        "I like the part where he said 'It's morbin time!' and morbed all over the place",
        "Se no, INTERNETO YAMERO",
        "Heat Action: Essence of Bad Web Design",
        "Heat Action: Essence of TailwindCSS",
        "JavaScript be making a new framework every week",
        "No one uses Prolog anymore",
        "I hate Scythian Horse Archers",
        ""]

    let heroText = "GitHub hates fun.";

    let staticpage = true; // should be true if built for github pages

    if (!staticpage){
        heroText = randomHeroText[Math.floor(Math.random() * randomHeroText.length)];
    }
</script>

<header>
<div class ="hero min-h-screen" style="background-image: url(https://media.tenor.com/qZatoBrJlZ0AAAAC/sons-of-the-forest-the-forest.gif);">
    <div class="hero-overlay bg-opacity-70"></div>
    <!-- stick to the left -->
    <div class="hero-content text-neutral-content text-center">
        <div class="max-w-md">
            {#if staticpage}
            <h1 class="mb-5 text-5xl font-bold">GitHub hates fun.</h1>
            <p class="mb-5">I'm sorry if there are no intended funny random quotes.</p>
            {:else}
            <h1 id=herotextdom class="mb-5 text-5xl font-bold">{heroText}</h1>
            {/if}
            <a href="#bio"><button class="btn btn-outline btn-primary btn-wide">What?</button></a>
        </div>
    </div>
</div>
</header>