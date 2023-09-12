<script>
    import "../app.css"; //lmao cope harder react users
    export let pfp = "https://www.anisearch.com/images/character/cover/full/0/408.webp"
    export let q = "Why is the MP5 always the best gun in every FPS game?"
    export let a = "Because the developers don't know guns, because they were paid off by HK, or because the fact that the Iranian Embassy Siege has become the ad for the MP5."
</script>

<div>
    <div class="chat chat-start p-5">
        <div class="chat-image avatar">
            <div class="w-10 mb-10 rounded-full">
                <img src="{pfp}"/>
            </div>
        </div> 
        <div class="chat-bubble mb-10">
            <span class="spoiler">{q}</span>
        </div>
    </div>
    <div class="chat chat-end p-5">
        <div class="chat-bubble mb-10">
            <span class="spoiler">{a}</span>
        </div>
    </div>
</div>