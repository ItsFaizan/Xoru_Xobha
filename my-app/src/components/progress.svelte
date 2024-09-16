<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  
  let isIconVisible = false;
  let activeTab = 'explore';
  let transitioning = false;
  
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isIconVisible = true;
            observer.unobserve(entry.target); // Stop observing after animation triggers
          }
        });
      },
      { threshold: 0.1 }
    );
  
    const target = document.querySelector(".animate-on-scroll");
    if (target) observer.observe(target);
  });
  
  function setTab(tab) {
    if (tab === activeTab || transitioning) return;
    
    transitioning = true;
    setTimeout(() => {
      activeTab = tab;
      transitioning = false;
    }, 300); // 300ms matches the fade-out time
  }
  </script>
  
  <div class="bg-white_one p-8 animate-on-scroll">
    <!-- Tabs -->
    <div class="flex flex-row justify-center w-full md:w-[92%] xl:w-[66%] max-w-5xl mx-auto mb-6 bg-yellow_three rounded-lg md:space-x-10 lg:space-x-20 fade-in-icons {isIconVisible ? 'visible' : ''}">
      <button 
        class="text-xs md:text-lg font-bold p-4 border-b-2 border-transparent transition-all duration-300"
        class:border-yellow={activeTab === 'explore'}
        on:click={() => setTab('explore')}
      >
        Explore Naharkatia
      </button>
      <button 
        class="text-xs md:text-lg font-bold p-4 border-b-2 border-transparent transition-all duration-300"
        class:border-yellow={activeTab === 'inspire'}
        on:click={() => setTab('inspire')}
      >
        Inspire Young Minds
      </button>
      <button 
        class="text-xs md:text-lg font-bold p-4 border-b-2 border-transparent transition-all duration-300"
        class:border-yellow={activeTab === 'create'}
        on:click={() => setTab('create')}
      >
        Create Regional Impact
      </button>
    </div>
  
    <!-- Tab content with fade effect -->
    <div>
      {#if activeTab === 'explore'}
        <div class="flex flex-col lg:flex-row w-full md:w-[92%] xl:w-[66%] max-w-5xl mx-auto">
          <img src="/progress.svg" alt="Explore Image" class="w-full lg:w-1/2 rounded-lg shadow-lg" />
          <div class="lg:ml-8 mt-6 lg:mt-0">
            <h2 class="text-2xl md:text-3xl font-bold mt-4">Find inspiration in the serenity and calmness of Naharkatia</h2>
            <p class="mt-8 text-sm md:text-base text-[#5E5E5E] !leading-8">
              Xoru Xobha is based in Naharkatia for its peaceful environment, nestled in the green corners of Assam. Close to nature, it’s the perfect place for fostering creativity and expanding the scope of imagination. 
            </p>
            <p class="mt-8 text-sm md:text-base text-[#5E5E5E] !leading-8">
              Away from the bustle of cities like Guwahati, Naharkatia offers the calm and focus essential for nurturing new ideas and building truly impactful things.
            </p>
          </div>
        </div>
      {/if}
  
      {#if activeTab === 'inspire'}
        <div class="flex flex-col lg:flex-row w-full md:w-[92%] xl:w-[66%] max-w-5xl mx-auto">
          <img src="/progress.svg" alt="Inspire Image" class="w-full lg:w-1/2 rounded-lg shadow-lg" />
          <div class="lg:ml-8 mt-6 lg:mt-0">
            <h2 class="text-2xl md:text-3xl font-bold mt-4">Inspire the innovators of tomorrow</h2>
            <p class="mt-8 text-sm md:text-base text-[#5E5E5E] !leading-8">
              Your experience holds the key to unlocking the potential of Assam’s brightest young minds. By sharing your journey, you’ll help them learn from real-world insights and guide them toward building impactful solutions.
            </p>
            <p class="mt-8 text-sm md:text-base text-[#5E5E5E] !leading-8">
              Together with Xoru Xobha, we can flourish a perfect environment for deep learning, collaboration, and focused growth, empowering the next generation of innovators.
            </p>
          </div>
        </div>
      {/if}
  
      {#if activeTab === 'create'}
        <div class="flex flex-col lg:flex-row w-full md:w-[92%] xl:w-[66%] max-w-5xl mx-auto">
          <img src="/progress.svg" alt="Impact Image" class="w-full lg:w-1/2 rounded-lg shadow-lg" />
          <div class="lg:ml-8 mt-6 lg:mt-0">
            <h2 class="text-2xl md:text-3xl font-bold mt-4">Build a legacy of regional impact</h2>
            <p class="mt-8 text-sm md:text-base text-[#5E5E5E] !leading-8">
              By supporting local startups through Xoru Xobha, you’re not just helping individual founders—you’re driving real change in Assam’s economy and community. Your involvement accelerates innovation, creates jobs, and positions the region as a hub for entrepreneurial success.
            </p>
            <p class="mt-8 text-sm md:text-base text-[#5E5E5E] !leading-8">
              The impact you create will leave a lasting legacy, with the people of Naharkatia remembering your contribution as a key turning point in their journey toward progress and prosperity.
            </p>
          </div>
        </div>
      {/if}
    </div>
  </div>
  
  <style>
    .fade-in-icons {
      opacity: 0;
      transition: opacity 1s ease-out;
    }
    .fade-in-icons.visible {
      opacity: 1;
    }
  
  </style>
  