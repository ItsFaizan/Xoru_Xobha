<script>
  import { onMount } from "svelte";
  let isPlaying = false;
  const videoId = "AUw7laSlcbo"; // YouTube video ID
  const videoThumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  // Function to handle play and maximize
  function playVideo() {
    isPlaying = true;

    // Wait for the iframe to be in the DOM before requesting full-screen
    setTimeout(() => {
      const iframe = document.querySelector("iframe");
      if (iframe && iframe.requestFullscreen) {
        iframe.requestFullscreen(); // Use the modern fullscreen method
      }
    }, 0); // Small delay to ensure the iframe is in the DOM
  }

  
let isIconVisible = false;


onMount(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isIconVisible = true;
          observer.unobserve(entry.target); // Optional: Stop observing after triggering animation
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe the component
  const target = document.querySelector(".animate-on-scrollfirst");
  if (target) observer.observe(target);
});
</script>

<!-- Main Section -->
<div class="bg-bg_black text-white_one text-center py-32 lg:py-60 relative">
  <!-- Icons (Only visible on large screens) -->
  <!-- Icons (Only visible on large screens) -->
  <img
    src="/brush.svg"
    alt="Brush Icon"
    class="hidden xl:block absolute left-[28%] top-10 h-10 w-10 fade-in-icons"
  />
  <img
    src="/star.svg"
    alt="Star Icon"
    class="hidden xl:block absolute right-[28%] top-6 h-10 w-10 fade-in-icons"
  />
  <img
    src="/bill.svg"
    alt="Bill Icon"
    class="hidden xl:block absolute right-[28%] bottom-84 h-16 w-16 fade-in-icons"
  />
  <img
    src="/star2.svg"
    alt="Star Left"
    class="hidden xl:block absolute left-[28%] bottom-84 h-10 w-10 fade-in-icons"
  />

  <!-- Main Content -->
  <div class="flex flex-col items-center">
    <!-- Text Section -->
    <h1
      class="text-3xl md:text-4xl lg:text-5xl font-bold max-w-lg lg:max-w-xl -mt-8 lg:-mt-40 fade-in"
    >
      Share your expertise,<br />fuel Assam’s future
    </h1>

    <!-- Squiggly Line -->
    <img
      src="/line.svg"
      alt="Squiggly Line"
      class="mt-4 mb-6 w-1/2 md:w-[30%]"
    />

    <!-- Button -->

    <button
      class="bg-yellow text-yellow_two font-extrabold px-6 py-2 md:py-3 my-4 md:my-8 hover:bg-[#FFEB7E]"
      on:click={() =>
        (window.location.href =
          "mailto:speak@xoruxobha.com?subject=I would love to speak&body=Hi. I would love to be a speaker for Xoru Xobha. Please get back to me as soon as possible.")}
    >
      Become a speaker
    </button>
  </div>
</div>

<!-- Video Section -->
<div class="bg-white_one">
  <div
    class="relative w-[80%] max-w-5xl mx-auto my-8 lg:my-16 -mt-24 lg:-mt-52"
  >
    {#if !isPlaying}
      <!-- Display Thumbnail -->
      <div
        class="relative w-auto h-60 md:h-80 lg:h-[600px] bg-cover bg-center rounded-lg border-t-[1px] border-b-[4px] border-t-[#FFD700] border-b-white"
        style="background-image: url({videoThumbnailUrl});"
      >
        <!-- Play Button in the Center -->
        <button
          on:click={playVideo}
          class="absolute inset-0 flex justify-center items-center"
        >
          <div class="bg-yellow rounded-full p-4 md:p-6 hover:bg-[#FFEB7E]">
            <img
              src="/play.svg"
              alt="Play Button"
              class="h-6 w-6 md:h-8 md:w-8 ml-1"
            />
          </div>
        </button>
      </div>
    {/if}

    {#if isPlaying}
      <!-- YouTube Embed After Clicking Play -->
      <iframe
        class="w-full h-64 md:h-96 lg:h-[700px] rounded-lg"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
    {/if}
  </div>

  <!-- Text Section Below Video -->
  <div id="mission" class="text-center px-4 lg:px-0 animate-on-scrollfirst">
    <p class="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 fade-in-icons1 {isIconVisible
        ? 'visible1'
        : ''}">
      Your expertise can change the future
    </p>
    <p class="text-sm md:text-base lg:text-lg text-[#5E5E5E] fade-in-icons1 {isIconVisible
        ? 'visible1'
        : ''}">
      At Xoru Xobha, our mission is to empower Assam’s young minds to build a
      better future.<br />
      Your expertise and experience can help us achieve just that.
    </p>
  </div>
</div>

<style>
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Fade-in for the text */
  .fade-in {
    animation: fadeIn 1s ease-out forwards;
  }

  /* Fade-in with 1-second delay */
  .fade-in-icons {
    animation: fadeIn 1s ease-out forwards;
    animation-delay: 0.5s; /* 1s for text + 1s delay = 2s total */
    opacity: 0; /* Start hidden until the animation runs */
  }

  .fade-in-icons1 {
    opacity: 0;
    transition: opacity 1s ease-out;
  }
  .fade-in-icons1.visible1 {
    opacity: 1;
  }
</style>
