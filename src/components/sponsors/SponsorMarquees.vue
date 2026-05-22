<template>
  <div v-if="showMarquees" class="sponsor-marquees">
    <SponsorMarqueeColumn
      side="left"
      :sponsors="leftSponsors"
      :duration-seconds="config.leftDurationSeconds"
    />
    <SponsorMarqueeColumn
      side="right"
      :sponsors="rightSponsors"
      :duration-seconds="config.rightDurationSeconds"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { sponsorMarqueeConfig, sponsors } from "../../config/sponsors";
import SponsorMarqueeColumn from "./SponsorMarqueeColumn.vue";
import { useMarqueeBreakpoint } from "./useMarqueeBreakpoint.js";

const config = sponsorMarqueeConfig.vertical;
const { isWideViewport } = useMarqueeBreakpoint();

const showMarquees = computed(() => config.enabled && isWideViewport.value);

/** Alternate sponsors across columns for visual balance. */
const leftSponsors = computed(() =>
  sponsors.filter((_, index) => index % 2 === 0)
);

const rightSponsors = computed(() =>
  sponsors.filter((_, index) => index % 2 === 1)
);
</script>
