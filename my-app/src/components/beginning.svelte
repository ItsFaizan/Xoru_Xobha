<script lang="ts">
    let activeIndex = 0;
  
    const timelineItems = [
      { year: 2022, text: "Project Naharkatia was born. A charity initiative funding young talents within the region.", image: "/person.png" },
      { year: 2023, text: "3 young brains won Rs. 50K each for their ventures.", image: "/person.png" },
      { year: 2024, text: "Xoru Xobha was launched.", image: "/person.png" },
      { year: 2025, text: "Xoru Xobha started accepting its first batch of young founders.", image: "/person.png" }
    ];
  
    const selectItem = (index: number) => {
      activeIndex = index;
    };
  </script>
  
  <!-- Timeline container -->
  <div class="relative bg-yellow_three flex justify-center items-center overflow-hidden pb-20">
    <!-- Timeline items -->
    <div class="flex space-x-10 transition-transform duration-700 ease-in-out relative" style="transform: translateX({-activeIndex * 10}%)">
      
      <!-- Horizontal Line connecting dots, placed between the first and last dots -->
      <div class="absolute top-[173.5px] left-40 w-[calc(100%-24.5%)] h-0.5 bg-[#9D9D9D] mx-auto"></div>
  
      {#each timelineItems as item, index}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div on:click={() => selectItem(index)} class="relative flex flex-col items-center cursor-pointer">
          <div class="flex items-center justify-center mb-4">
            <!-- Dynamically load different images for each item -->
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src={item.image} alt="Profile Image" class="{activeIndex === index ? 'opacity-100 w-28 h-auto' : 'opacity-40 w-28 h-auto'} transition-opacity duration-300" />
          </div>
  
          <!-- Dotted line and connecting dots -->
          <div class="flex items-center my-8 relative">
            <!-- Dot -->
            <div class="bg-[#0E0E0F] rounded-full {activeIndex === index ? 'h-4 w-4' : 'h-3 w-3 mt-0.5'} transition-opacity duration-300"></div>
          </div>
  
          <p class="text-lg font-semibold {activeIndex === index ? 'opacity-100' : 'opacity-40'} transition-opacity duration-300 mt-4">{item.year}</p>
          <p class="text-center font-semibold text-[#0E0E0F] w-60 mt-2 {activeIndex === index ? 'opacity-100' : 'opacity-40'} transition-opacity duration-300">
            {item.text}
          </p>
        </div>
      {/each}
    </div>
  </div>
  