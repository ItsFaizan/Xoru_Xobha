<script>
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav class="bg-bg_black px-6 py-4 flex items-center justify-between lg:px-20">
  <!-- Logo -->
  <div class="flex items-center">
    <img src="/logo.svg" alt="Logo" class="h-8 sm:h-10" />
  </div>

  <!-- Navigation Links (Desktop) -->
  <ul class="hidden space-x-4 text-white_one ml-10 lg:flex lg:space-x-8 lg:ml-20">
    <li><a href="#" class="hover:text-[#FFEB7E]">Mission</a></li>
    <li><a href="#" class="hover:text-[#FFEB7E]">Story</a></li>
  </ul>

  <!-- Button (Desktop) -->
  <button class="hidden lg:flex bg-yellow text-yellow_two font-bold px-4 py-2 hover:bg-[#FFEB7E] ml-auto text-sm sm:text-base">
    Become a speaker
  </button>

  <!-- Mobile Menu Icon -->
  <div class="lg:hidden">
    <button class="text-white_one focus:outline-none" on:click={toggleMenu}>
      <!-- Mobile Menu Icon (Hamburger) -->
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div>
</nav>

<!-- Mobile Sidebar Menu -->
<div class="lg:hidden fixed top-0 left-0 h-full bg-bg_black text-white_one sm:w-52 w-40 transform transition-transform duration-300 ease-in-out z-20"
     class:translate-x-0={isMenuOpen}
     class:-translate-x-full={!isMenuOpen}>
  <div class="p-4">
    <!-- Close Button -->
    <button on:click={toggleMenu} class="text-white focus:outline-none">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  </div>

  <!-- Mobile Navigation Links -->
  <ul class="space-y-2 mt-4 px-4">
    <li><a href="#" class="hover:text-[#FFEB7E]">Mission</a></li>
    <li><a href="#" class="hover:text-[#FFEB7E]">Story</a></li>
  </ul>
  
  <!-- Mobile Button -->
  <button class="bg-yellow text-yellow_two font-bold sm:px-4 sm:py-2 px-3 py-2 hover:bg-[#FFEB7E] mt-6 mx-4 text-xs sm:text-base">
    Become a speaker
  </button>
</div>

<!-- Background Overlay -->
{#if isMenuOpen}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="lg:hidden fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10" on:click={toggleMenu}></div>
{/if}
