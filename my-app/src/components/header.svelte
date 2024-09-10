<script lang="ts">
   let signupModalIsOpen = false;

function openSignupModal() {
  signupModalIsOpen = true;
}
</script>


<header class="md:bg-white_three py-6 px-4 md:px-10 lg:px-20 pb-10 ">
  <div class="max-w-screen-xl mx-auto bg-bg_black p-3 md:p-6 lg:p-6 items-center justify-between flex rounded-[20px] shadow-2xl">
    <div class="flex-shrink-0 h-9 flex-col justify-start items-center gap-2.5 inline-flex">
      <div class="w-28 h-7 relative my-auto">
        <!-- <img src='/logo.svg' alt="logo"> -->
      </div>
    </div>

    <!-- Hamburger Icon for Small Screens -->
    <div class="md:hidden">
      <button id="mobile-menu-toggle" class="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>

    <!-- Navigation Links -->
    <div class="hidden md:flex button-group">
      <div class="w-96 h-12 pr-4 md:pr-10 lg:pr-10 justify-center items-center gap-4 inline-flex">
        <div class="w-14 self-stretch px-2 py-3 justify-start items-center gap-2 flex">
          <div class="text-white text-base font-medium font-['DicSans'] leading-normal tracking-wide">About</div>
        </div>
        <div class="w-28 self-stretch px-2 py-3 justify-start items-center gap-2 flex">
          <div class="text-white text-base font-medium font-['DicSans'] leading-normal tracking-wide">How it works</div>
        </div>
        <div class="w-11 self-stretch px-2 py-3 justify-start items-center gap-2 flex">
          <div class="text-white text-base font-medium font-['DicSans'] leading-normal tracking-wide">FAQ</div>
        </div>
      </div>
    </div>
    
    <div class="button hidden md:inline-block">
      <div class="w-32 h-12 p-3 bg-green rounded-lg justify-center items-center inline-flex">
        <div class="px-4 justify-center items-center flex">
          <button class="text-white text-base font-medium font-['Roboto'] leading-normal tracking-wide" on:click={openSignupModal} on:click={openSignupModal} >Join Now</button>
        </div>
      </div>
    </div>
  </div>
</header>

