<script>
  import { onMount } from "svelte";

  let isScribbleVisible = false;
  let isIconVisible = false;

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animations when the component is in view
            isScribbleVisible = true;
            isIconVisible = true;
            observer.unobserve(entry.target); // Optional: Stop observing after triggering animation
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe the component
    const target = document.querySelector(".animate-on-scroll3");
    if (target) observer.observe(target);
  });
</script>

<div class="bg-white_one px-4 sm:px-8 md:px-16 pt-16 pb-4 animate-on-scroll3">
  <div
    class="bg-yellow text-black my-20 p-8 sm:p-12 md:p-16 rounded-xl relative flex items-center justify-between max-w-6xl mx-auto"
  >
    <!-- Left Icon (Moved Higher) -->
    <img
      src="/human.svg"
      alt="Family Icon"
      class="hidden lg:block h-12 w-12 -translate-y-10 translate-x-16 fade-in-icons {isIconVisible
        ? 'visible'
        : ''}"
    />

    <!-- Text Content -->
    <div class="text-center flex-1 px-4 sm:px-8 md:px-8">
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold">
        The future of Assam is in your
        <span class="relative inline-block">
          <span class="relative z-10 px-2">words</span>
          <!-- Scribble Icon replacing Circle Icon -->
          <svg
            width="140"
            height="100"
            viewBox="0 0 297 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="-mt-16 hidden xl:block scribble {isScribbleVisible
              ? 'visible'
              : ''}"
          >
            <path
              d="M98.0004 154.206C154.614 153.187 216.288 154.106 267.133 114.031C280.552 103.454 301.525 84.5268 290.911 58.8826C284.211 42.6937 269.935 33.8444 258.343 27.2229C237.854 15.5188 215.827 9.34587 194.042 6.12275C149.433 -0.477206 98.1551 1.64277 55.9082 24.2429C40.1666 32.6639 -4.95994 55.4463 3.81698 91.7349C11.1818 122.185 35.7652 136.479 55.6403 143.243C93.553 156.144 133.972 155.921 172.584 156.772"
              stroke="#6C3903"
              stroke-width="5"
              stroke-linecap="round"
            />
          </svg>
        </span>
      </h1>
      <p class="text-sm sm:text-md md:text-md xl:-mt-4 mt-4 mb-10">
        You take care of the young minds, we will take care of your travel and
        stay.
      </p>

      <!-- Call-to-Action Button -->
      <button
        class="bg-black text-yellow font-bold py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-md hover:bg-[#323233]"
        on:click={() =>
          (window.location.href =
            "mailto:speak@xoruxobha.com?subject=I would love to speak&body=Hi. I would love to be a speaker for Xoru Xobha. Please get back to me as soon as possible.")}
      >
        Become a speaker
      </button>
    </div>

    <!-- Right Icon (Moved Lower) -->
    <img
      src="/desk.svg"
      alt="Speaker Icon"
      class="hidden lg:block h-12 w-12 translate-y-8 -translate-x-24 fade-in-icons {isIconVisible
        ? 'visible'
        : ''}"
    />
  </div>
</div>

<style>
  /* Additional styles can be added here if needed */
  .fade-in-icons {
    opacity: 0;
    transition: opacity 3s ease-out;
  }
  .fade-in-icons.visible {
    opacity: 1;
  }
  .scribble {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    transition: stroke-dashoffset 3s ease-in-out;
  }
  .scribble.visible {
    stroke-dashoffset: 0;
  }
</style>
