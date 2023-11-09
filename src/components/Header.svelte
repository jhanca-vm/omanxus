<script>
  const map = new Map([
    ['/#acerca', 'Acerca'],
    ['/#aplicaciones', 'Aplicaciones'],
    ['/#contacto', 'Contacto'],
    ['/blog', 'Blog']
  ])

  let isOpen = false
</script>

<header class="navbar mx-auto mb-1.5 max-w-6xl justify-between p-4">
  <a class="pl-1 md:pl-6" href="/">
    <slot />
  </a>
  <nav class="relative font-semibold uppercase tracking-wider md:font-black">
    <ul
      class="menu rounded-box absolute right-0 top-full mt-1 min-w-[11rem]
        bg-accent md:menu-horizontal md:static md:bg-transparent md:text-primary"
      class:hidden={!isOpen}
    >
      {#each map as [href, label]}
        <li>
          <a class="md:text-base" {href} on:click={() => (isOpen = false)}>
            {label}
          </a>
        </li>
      {/each}
    </ul>
    <button class="md:hidden" on:click={() => (isOpen = !isOpen)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-7 fill-none stroke-current stroke-2"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
        />
      </svg>
    </button>
  </nav>
</header>
