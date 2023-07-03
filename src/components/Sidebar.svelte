<script>
    import "../app.css";

    import Bio from "./Bio.svelte";
    import Hero from "./Hero.svelte";
    import Origin from "./Origin.svelte";


</script>

<div class="drawer lg:drawer-open">
    <input id="sidebar-drawer" type="checkbox" class="drawer-toggle"/>
    <div class="drawer-content flex flex-col items-left justify-left">
        <div class="flex-none">
            <label for="sidebar-drawer" class="btn btn-primary btn-ghost drawer-button lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
        </div>
        <div class="flex-none hidden lg:block"></div>
        <Hero /> 
        <Bio />
        <Origin />
    </div>

    <div class="drawer-side">
        <label for="sidebar-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 w-40 h-full bg-base-200 text-base-content">
            <li><a>Header</a></li>
            <li><a href="#bio">Bio</a></li>
            <li><a href="#origin">Origin</a></li>
            <li><a>Skills</a></li>
            <li><a>Project</a></li>
            <li><a>FAQ</a></li>
        </ul>
    </div>
</div>