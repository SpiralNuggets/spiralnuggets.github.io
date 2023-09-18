<script>
    import "../app.css"; //lmao cope harder react users
    export let pfp = "https://www.anisearch.com/images/character/cover/full/0/408.webp"
    export let q = "This is a placeholder question for the FAQ component."
    export let a = "Hmm yes, and this is a placeholder answer for the FAQ component."
</script>

<div>
    <div class="chat chat-start px-5">
        <div class="chat-image avatar">
            <div class="w-10 rounded-full">
                <img src="{pfp}"/>
            </div>
        </div> 
        <div class="chat-bubble">
            <span class="spoiler">{q}</span>
        </div>
    </div>
    <div class="chat chat-end px-5 mb-10">
        <div class="chat-bubble">
            <span class="spoiler">{a}</span>
        </div>
    </div>
</div>