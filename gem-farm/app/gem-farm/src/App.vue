<template>
  <div class="relative h-full min-h-screen">
    <TheNavBar />
    <div class="pt-10 px-10 flex justify-center align-middle">
      <!-- <img :width="300" :height="50" src="./assets/technomads.png" /> -->
      <h1 class="text-8xl text-white leading-[96px]">Upgrade Your Sovereign</h1>
    </div>
    <div class="italic mt-5 text-center text-white text-5xl">by Technomads</div>

    <div class="p-10">
      <router-view />
    </div>

    <div class="pt-10"></div>
  </div>
</template>

<script>
document.getElementById('app')?.classList.add('bg-black');

import TheNavBar from '@/components/TheNavBar';
import TheFooter from '@/components/gem-farm/TheFooter';
import TheCat from '@/components/gem-farm/TheCat';
export default {
  components: { TheCat, TheFooter, TheNavBar },
};
</script>

<style>
* {
  font-family: 'Conv_steiner-premium-regular';
  /* font-family: 'Press Start 2P', monospace; */
}
input[type='radio']:checked + span {
  @apply text-black;
}
</style>
