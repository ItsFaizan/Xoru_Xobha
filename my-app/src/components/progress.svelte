<script>
  // @ts-nocheck
  let activeTab = 'explore';

  function setTab(tab) {
    activeTab = tab;
  }
</script>

<div class="bg-white_one p-8 ">
  <!-- Tabs -->
  <div class="flex flex-row justify-center w-full md:w-[92%] xl:w-[66%] max-w-5xl mx-auto mb-6 bg-yellow_three rounded-lg md:space-x-10 lg:space-x-20">
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

  <!-- Tab content -->
  {#if activeTab === 'explore'}
    <div class="flex flex-col lg:flex-row w-full md:w-[92%] xl:w-[66%] max-w-5xl mx-auto">
      <img src="/progress.svg" alt="Explore Image" class="w-full lg:w-1/2 rounded-lg shadow-lg" />
      <div class="lg:ml-8 mt-6 lg:mt-0">
        <h2 class="text-2xl md:text-3xl font-bold mt-4">Find inspiration in the serenity and calmness of Naharkatia</h2>
        <p class="mt-8 text-sm md:text-base text-[#5E5E5E]">
          Xoru Xobha is based in Naharkatia for its peaceful environment, nestled in the green corners of Assam. Close to nature, it’s the perfect place for fostering creativity and expanding the scope of imagination. 
        </p>
        <p class="mt-8 text-sm md:text-base text-[#5E5E5E]">
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
        <p class="mt-8 text-sm md:text-base text-[#5E5E5E]">
          Your experience holds the key to unlocking the potential of Assam’s brightest young minds. By sharing your journey, you’ll help them learn from real-world insights and guide them toward building impactful solutions. 
        </p>
        <p class="mt-8 text-sm md:text-base text-[#5E5E5E]">
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
        <p class="mt-8 text-sm md:text-base text-[#5E5E5E]">
          By supporting local startups through Xoru Xobha, you’re not just helping individual founders—you’re driving real change in Assam’s economy and community. Your involvement accelerates innovation, creates jobs, and positions the region as a hub for entrepreneurial success. 
        </p>
        <p class="mt-8 text-sm md:text-base text-[#5E5E5E]">
          The impact you create will leave a lasting legacy, with the people of Naharkatia remembering your contribution as a key turning point in their journey toward progress and prosperity.
        </p>
      </div>
    </div>
  {/if}
</div>

<div class="bg-yellow_three py-4">
  <p class="text-2xl md:text-4xl font-bold pt-8 mb-4 text-center">The tale of a fresh beginning</p>
  <p class="text-sm md:text-md text-[#5E5E5E] w-[90%] md:w-[50%] mx-auto text-center">
    After working online for years and serving U.S. markets, I craved a much-needed change. Assam’s young talents often leave for opportunities elsewhere and never return. I wanted to create a vibrant community of brilliant minds, proving that building in Assam and thriving is not only possible but the real challenge worth taking on.
  </p>
  <p class="text-center text-[#BBB597] py-6 text-xs md:text-base">Pingal Pratyush, Founder of Xoru Xobha</p>
</div>
