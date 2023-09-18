<script>
    import "../app.css"; //lmao cope harder react users
    import FaqProp from "./FAQProp.svelte";
</script>

<section>
        <h1 id="faq" class="text-4xl font-bold p-5 justify-center lg:max-w-lg sm:max-w-sm" >Frequently Asked Questions</h1>
        <FaqProp />
        <FaqProp pfp={"https://pbs.twimg.com/tweet_video_thumb/D1gIoczXgAA_Ajt.jpg"}
                q={"Why does the website looks so bad?"}
                a={"Because I'm a programmer, not a designer. I can't make a website that looks good. I mostly work on planning out things and on the backend."}/>
        <FaqProp pfp={"https://1734811051.rsc.cdn77.org/data/images/full/397890/elon-musk-meet-chinese-doppelg-nger-elon-musk-yilong-ma.png"}
                q={"Do you have a Twitter?"}
                a={"Yes, but I use it for following Japanese artists. Please go figure out my Twitter handle yourself."}/>
        <FaqProp pfp={"https://i.redd.it/4ekymoknhvh41.jpg"}
                q={"What is your tech stack?"}
                a={"This? Used SvelteKit for the whole thing. I hate the idea of status quo so I decided to use SvelteKit instead of React. I also used TailwindCSS for styling. Just shoved the whole thing to GitHub and make it run a CI/CD everytime I push thing to it."}/>
        <FaqProp pfp={"https://static.wikia.nocookie.net/callofduty/images/3/3b/Wheelson_model_CoDMobile.png"}
                q={"Nah, screw it. Do you have a link in bio?"}
                a={"Yes, I do. I use Linktree for it. Go figure out the link yourself."}/>
        <FaqProp pfp={"https://user-images.githubusercontent.com/6966515/64044144-cc8acb80-cb6e-11e9-908b-2a282be98cb4.gif"}
                q={"This site looks atrocious. Why do you think it's production-ready?"}
                a={"The fact that Cloudflare redirected my domain to this site means that it's production-ready. I don't care about the design, I care about the functionality."}/>
        <FaqProp pfp={"https://static.wikia.nocookie.net/breakingbad/images/1/1f/BCS_S4_Gustavo_Fring.jpg"}
                q={"But the LinkedIn recruiters could see this site!"}
                a={"I think they know where my GitHub profile is. So they could go look for things there instead."}/>
        <FaqProp pfp={"https://i.redd.it/4ekymoknhvh41.jpg"}
                q={"Which team are you on?"}
                a={"#TeamChitoge #TeamRuka #TeamHanekawa #NVIDIA #TeamYotsuba   "} />
        </section>