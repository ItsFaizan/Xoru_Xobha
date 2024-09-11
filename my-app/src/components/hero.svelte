<script>
  let isPlaying = false;
  const videoId = "AUw7laSlcbo"; // YouTube video ID
  const videoThumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  // Function to handle play and maximize
  function playVideo() {
    isPlaying = true;
    
    // Wait for the iframe to be in the DOM before requesting full-screen
    setTimeout(() => {
      const iframe = document.querySelector('iframe');
      if (iframe && iframe.requestFullscreen) {
        iframe.requestFullscreen(); // Use the modern fullscreen method
      }
    }, 0); // Small delay to ensure the iframe is in the DOM
  }
</script>

<div class="bg-bg_black text-white_one text-center py-60 relative">
  <!-- Icons -->
  <img src="/brush.svg" alt="Brush Icon" class="absolute left-[440px] top-14 h-10 w-10" />
  <img src="/star.svg" alt="Star Icon" class="absolute right-[500px] top-8 h-10 w-10" />
  <img src="/bill.svg" alt="Bill Icon" class="absolute right-[460px] bottom-96 h-16 w-16" />
  <img src="/star2.svg" alt="Star Left" class="absolute left-[440px] bottom-96 h-10 w-10" />

  <!-- Main Content -->
  <div class="flex flex-col items-center">
    <!-- Text Section -->
    <h1 class="text-5xl font-bold leading-snug max-w-xl -mt-32">
      Share your expertise,<br />fuel Assam’s future
    </h1>

    <!-- Squiggly Line -->
    <img src="/line.svg" alt="Squiggly Line" class="mt-0 mb-8 w-[30%]" />

    <!-- Button -->
    <button class="bg-yellow text-yellow_two font-extrabold px-6 py-3 my-8 hover:bg-[#FFEB7E]">
      Become a speaker
    </button>
  </div>
</div>

<!-- Video Section -->
 <div class="bg-white_one">
<div class="relative w-full max-w-5xl mx-auto my-12 -mt-52">
  {#if !isPlaying}
    <!-- Display Thumbnail -->
    <div class="relative w-auto h-[600px] bg-cover bg-center rounded-lg border-t-[1px] border-b-[4px] border-t-[#FFD700] border-b-white" style="background-image: url({videoThumbnailUrl});">
      <!-- Play Button in the Center -->
      <button on:click={playVideo} class="absolute inset-0 flex justify-center items-center">
        <div class="bg-yellow rounded-full p-6 hover:bg-[#FFEB7E]">
          <img src="/play.svg" alt="Play Button" class="h-8 w-8 ml-1" />
        </div>
      </button>
    </div>
  {/if}

  {#if isPlaying}
    <!-- YouTube Embed After Clicking Play -->
    <iframe class="w-full h-[700px] rounded-lg" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
    </iframe>
  {/if}
</div>

<div class="text-center">
  <p class="text-4xl font-bold mb-4">Your expertise can change the future</p>
  <p class="text-md text-[#5E5E5E]">At Xoru Xobha, our mission is to empower Assam’s young minds to build a better future.<br/> Your expertise and experience can help us achieve just that.</p>
</div>
</div>