<script>
    import "../app.css";

    import Bio from "./Bio.svelte";
    import Hero from "./Hero.svelte";
</script>

<div class="drawer lg:drawer-open">
    <input id="sidebar-drawer" type="checkbox" class="drawer-toggle"/>
    <div class="drawer-content flex flex-col items-center justify-center">

        <Hero />
        <Bio />

        <label for="sidebar-drawer" class="btn btn-primary drawer-button lg:hidden">Page Content</label>
    </div>

    <div class="drawer-side">
        <label for="sidebar-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 w-40 h-full bg-base-200 text-base-content">
            <li><a>Header</a></li>
            <li><a href="#bio">Bio</a></li>
            <li><a>Origin</a></li>
            <li><a>Project</a></li>
            <li><a>FAQ</a></li>
        </ul>
    </div>
</div>