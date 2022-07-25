<template>
  <div class="flex flex-row">
    <div class="nes-container with-title flex-1 mr-5">
      <p class="title">Start/manage a farm</p>
      <p class="mb-5">
        Choose this if you have your own NFT collection you'd like to offer
        staking for.
      </p>
      <router-link to="manager">
        <button class="nes-btn is-primary">Start a farm</button>
      </router-link>
    </div>
    <div class="nes-container with-title flex-1 ml-5">
      <p class="title">Stake your NFTs</p>
      <p class="mb-5">
        Choose this if you'd like to stake your NFTs at one of the existing
        farms.
      </p>
      <router-link to="farmer">
        <button class="nes-btn is-primary">Stake NFTs</button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { GEM_FARM_PROG_ID } from '@gemworks/gem-farm-ts';
export default defineComponent({
  setup() {
    return {
      GEM_FARM_PROG_ID,
    };
  },
});
</script>
<style scoped></style>
