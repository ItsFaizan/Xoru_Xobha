<script lang="ts">
    import { onMount } from "svelte";

  let activeIndex = 0;
  let startX = 0; // Store the starting position of a swipe
  let endX = 0;   // Store the ending position of a swipe
  const swipeThreshold = 50; // Minimum swipe distance to trigger next/previous item

  const timelineItems = [
    { year: 2022, text: "Project Naharkatia was born. A charity initiative funding young talents within the region.", image: "/person.png" },
    { year: 2023, text: "3 young brains won Rs. 50K each for their ventures.", image: "/person.png" },
    { year: 2024, text: "Xoru Xobha was launched.", image: "/person.png" },
    { year: 2025, text: "Xoru Xobha started accepting its first batch of young founders.", image: "/person.png" }
  ];

  const selectItem = (index: number) => {
    activeIndex = index;
  };

  const nextItem = () => {
    if (activeIndex < timelineItems.length - 1) {
      activeIndex += 1;
    }
  };

  const prevItem = () => {
    if (activeIndex > 0) {
      activeIndex -= 1;
    }
  };

  // Handle the swipe
  const handleTouchStart = (event: TouchEvent) => {
    startX = event.touches[0].clientX;
  };

  const handleTouchMove = (event: TouchEvent) => {
    endX = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = endX - startX;

    // If swipe distance exceeds the threshold, trigger the next/previous item
    if (distance > swipeThreshold) {
      prevItem();
    } else if (distance < -swipeThreshold) {
      nextItem();
    }

    // Reset the start and end positions
    startX = 0;
    endX = 0;
  };

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
  const target = document.querySelector(".animate-on-scroll2");
  if (target) observer.observe(target);
});
</script>

<div id="story" class="bg-yellow_three py-4 animate-on-scroll2">
  <p class="text-2xl md:text-4xl font-bold pt-8 mb-4 text-center fade-in-icons {isIconVisible
        ? 'visible'
        : ''}">The tale of a fresh beginning</p>
  <p class="text-sm md:text-md text-[#5E5E5E] w-[90%] max-w-xl md:w-[50%] leading-8 mx-auto text-center fade-in-icons {isIconVisible
        ? 'visible'
        : ''}">
    After working online for years and serving U.S. markets, I craved a much-needed change. Assam’s young talents often leave for opportunities elsewhere and never return. I wanted to create a vibrant community of brilliant minds, proving that building in Assam and thriving is not only possible but the real challenge worth taking on.
  </p>
  <p class="text-center text-[#BBB597] py-6 text-xs md:text-base fade-in-icons {isIconVisible
        ? 'visible'
        : ''}">Pingal Pratyush, Founder of Xoru Xobha</p>
</div>

<!-- Timeline container -->
<div
  class="relative bg-yellow_three flex justify-center items-center overflow-hidden pb-20 animate-on-scroll"
  on:touchstart={handleTouchStart}
  on:touchmove={handleTouchMove}
  on:touchend={handleTouchEnd}
>
  
  <!-- Timeline items -->
  <div class="flex space-x-10 ml-[800px] transition-transform duration-700 ease-in-out relative" style="transform: translateX({-activeIndex * 25}%)">
    <!-- Horizontal Line connecting dots, placed between the first and last dots -->
    <div class="absolute top-[173.5px] left-40 w-[calc(100%-24.5%)] h-0.5 bg-[#9D9D9D] mx-auto"></div>

    {#each timelineItems as item, index}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div on:click={() => selectItem(index)} class="relative flex flex-col items-center cursor-pointer">
        <div class="flex items-center justify-center mb-4">
          <!-- Dynamically load different images for each item -->
          <!-- svelte-ignore a11y-img-redundant-alt -->
          <img src={item.image} alt="Profile Image" class="{activeIndex === index ? 'opacity-100 w-32 h-auto' : 'opacity-40 w-28 h-auto'} transition-opacity duration-300" />
        </div>

        <!-- Dotted line and connecting dots -->
        <div class="flex items-center my-8 relative">
          <!-- Dot -->
          <div class="bg-[#0E0E0F] rounded-full {activeIndex === index ? 'h-4 w-4 -mt-4' : 'h-3 w-3 mt-0.5'} transition-opacity duration-300"></div>
        </div>

        <p class="text-lg font-semibold {activeIndex === index ? 'opacity-100' : 'opacity-40'} transition-opacity duration-300 mt-4">{item.year}</p>
        <p class="text-center font-semibold text-[#0E0E0F] w-60 mt-2 {activeIndex === index ? 'opacity-100' : 'opacity-40'} transition-opacity duration-300">
          {item.text}
        </p>
      </div>
    {/each}
  </div>

</div>

<style>
  /* Additional styles can be added here if needed */
  .fade-in-icons {
    opacity: 0;
    transition: opacity 1s ease-out;
  }
  .fade-in-icons.visible {
    opacity: 1;
  }
</style>