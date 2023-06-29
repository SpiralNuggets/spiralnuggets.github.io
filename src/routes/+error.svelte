<script>
    import { page } from '$app/stores';

    const texts = ["You may have mistyped the address or the page may have moved.",
                    "I don't know everything, including the existence of this webpage.",
                    "The lost snail may have brought you here.",
                    "Back up! Back up!",
                    "Not what you expected, huh?",
                    "Wrong address, bro.",
                    "There's a subfaction in Girls' Frontline called Squad 404. So just treat this site like UMP45.",
                    "I'm not a 404 page, I'm a 404 page not found.",
                    "Throw your Satnav into the rubbish bin. It's its fault it brought you here.",
                    "Every journey begins with a single step. But you took the wrong step.",
                    "You have found the Tsukihime anime!",
                    "You have found the proof that the Earth is flat!",
                    "You have found a Ground War server in Call of Duty: Modern Warfare!",
                    "You have found the reason why Bootstrap is better than Tailwind!",
                    "You have found the reason why React is better than Vue!",
                    "You have found the reason why Python should be used in an industrial environment!",
                    "You have found the source that supports Senator Armstrong's claim that nanomachines are the future!",
                    "We have SQL injected ourselves. jk.",
                    "404: Not Found",
                    "You have found the cow level!",
                    "You have found the person that asked!",
                    ];

    // pick one text randomly
    let text = texts[Math.floor(Math.random() * texts.length)];

    const texts500 = [
        "Oopsie!",
        "Uhhh guys... I think we have a problem.",
        "I'm here because this happened on my watch. I need to know how.",
        "It's Github's, my ISP's, my server provider's or my fault.",
        "Internal Server Error",
        "Hey. don't blame me! I work on backend stuff.",
        "Good ol 0.5k.",
        "I said bring me 115, not 500!",
        "Not your fault.",
        "Get out of here, Weaver. Tell them I failed.",
        "At least it didn't fail hard as Redfall."]

    let text500 = texts500[Math.floor(Math.random() * texts500.length)];

    let staticpage = true; // should be true if built for github pages

    if(staticpage){
        text = "404 Not Found. No joke because GitHub Pages disallows dynamic pages."
        text500 = "500 Internal Server Error. No joke because GitHub Pages disallows dynamic pages."
    }

</script>

<div class="hero min-h-screen">
    <div class="hero-content text-center">
        <div class="max-w-md">
            {#if $page.status === 404}
                <h1 class="text-5xl font-bold">{text}</h1>
                <p class="py-6">{$page.status}: {$page.error.message}</p>
            {:else if $page.status === 500}
                <h1 class="text-5xl font-bold">{text500}</h1>
                <p class="py-6">{$page.status}: {$page.error.message}</p>
            {:else}
                <h1 class="text-5xl font-bold">Error {$page.status}</h1>
                <p class="py-6">: {$page.error.message}</p>
            {/if}
        </div>
    </div>
</div>