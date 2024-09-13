<script>
// @ts-nocheck

    let activeTab = 'explore';
  
    function setTab(tab) {
      activeTab = tab;
    }
  </script>
  
  <div class="bg-white_one p-8 min-h-screen">
    <!-- Tabs -->
    <div class="flex justify-between max-w-xl mx-auto mb-6 bg-yellow_three">
      <button 
        class="text-lg font-medium p-2 border-b-2 border-transparent hover:border-yellow-500 transition-all duration-300" 
        class:border-yellow-600={activeTab === 'explore'}
        on:click={() => setTab('explore')}
      >
        Explore Naharkatia
      </button>
      <button 
        class="text-lg font-medium p-2 border-b-2 border-transparent hover:border-yellow-500 transition-all duration-300" 
        class:border-yellow-600={activeTab === 'inspire'}
        on:click={() => setTab('inspire')}
      >
        Inspire Young Minds
      </button>
      <button 
        class="text-lg font-medium p-2 border-b-2 border-transparent hover:border-yellow-500 transition-all duration-300" 
        class:border-yellow-600={activeTab === 'create'}
        on:click={() => setTab('create')}
      >
        Create Regional Impact
      </button>
    </div>
  
    <!-- Tab content -->
    {#if activeTab === 'explore'}
      <div class="flex">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src="/progress.svg" alt="Explore Image" class="w-1/2 rounded-lg shadow-lg" />
        <div class="ml-6">
          <h2 class="text-2xl font-bold">Find inspiration in the serenity and calmness of Naharkatia</h2>
          <p class="mt-4 text-gray-700">
            Xoru Xobha is based in Naharkatia for its peaceful environment...
          </p>
          <p class="mt-2 text-gray-500">
            Additional text about Naharkatia, its culture, and impact on the region...
          </p>
        </div>
      </div>
    {/if}
  
    {#if activeTab === 'inspire'}
      <div class="flex">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src="/progress.svg" alt="Inspire Image" class="w-1/2 rounded-lg shadow-lg" />
        <div class="ml-6">
          <h2 class="text-2xl font-bold">Inspiring Young Minds</h2>
          <p class="mt-4 text-gray-700">
            Naharkatia offers young minds a space to dream big and turn their ideas into impactful solutions...
          </p>
          <p class="mt-2 text-gray-500">
            Additional text about inspiring young minds and their creative potential...
          </p>
        </div>
      </div>
    {/if}
  
    {#if activeTab === 'create'}
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <div class="flex">
        <img src="/progress.svg" alt="Impact Image" class="w-1/2 rounded-lg shadow-lg" />
        <div class="ml-6">
          <h2 class="text-2xl font-bold">Creating Regional Impact</h2>
          <p class="mt-4 text-gray-700">
            Through various initiatives, Naharkatia drives regional development and innovation...
          </p>
          <p class="mt-2 text-gray-500">
            Additional text about creating regional impact and sustainability efforts...
          </p>
        </div>
      </div>
    {/if}
  </div>
  