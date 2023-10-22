<script>
    export let pic = "https://media.tenor.com/5ADmfF_2iUIAAAAC/ryo-yamada-bocchi-the-rock.gif"
    export let name = "An unnamed project"
    export let desc = "video game"
    export let link = "https://youtu.be/77IkfBl6eww?t=294";
</script>

<div class="card card-compact w-96 bg-slate-200 shadow-xl">
    <figure><img src="{pic}" class="max-h-sm"></figure>
    <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{desc}</p>
            <div class="card-actions justify-end">
                <a href="{link}"><button class="btn btn-primary">More Info</button></a>
        </div>
    </div>
</div>