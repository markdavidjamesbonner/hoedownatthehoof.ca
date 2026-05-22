<template>
  <div
    v-if="showMarquee"
    class="sponsor-marquee-row"
    :style="{ '--marquee-duration': `${config.durationSeconds}s` }"
    aria-label="Event sponsors"
  >
    <div class="sponsor-marquee-row__track">
      <ul class="sponsor-marquee-row__list">
        <li
          v-for="sponsor in sponsors"
          :key="`${sponsor.id}-primary`"
          class="sponsor-marquee-row__item"
        >
          <img
            class="sponsor-marquee-row__logo"
            :src="sponsor.logo"
            :alt="sponsor.name"
            loading="lazy"
            decoding="async"
          />
        </li>
      </ul>
      <ul class="sponsor-marquee-row__list" aria-hidden="true">
        <li
          v-for="sponsor in sponsors"
          :key="`${sponsor.id}-clone`"
          class="sponsor-marquee-row__item"
        >
          <img
            class="sponsor-marquee-row__logo"
            :src="sponsor.logo"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { sponsorMarqueeConfig, sponsors } from "../../config/sponsors";
import { useMarqueeBreakpoint } from "./useMarqueeBreakpoint.js";

const config = sponsorMarqueeConfig.horizontal;
const { isNarrowViewport } = useMarqueeBreakpoint();

const showMarquee = computed(() => config.enabled && isNarrowViewport.value);
</script>

<style lang="scss" scoped>
.sponsor-marquee-row {
  --marquee-logo-max-height: 44px;
  --marquee-gap: 1.25rem;

  width: 100%;
  overflow: hidden;
  margin-top: 0.75rem;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    #000 8%,
    #000 92%,
    transparent 100%
  );
}

.sponsor-marquee-row__track {
  display: flex;
  width: max-content;
  animation: sponsor-marquee-left var(--marquee-duration, 40s) linear infinite;
  will-change: transform;
}

.sponsor-marquee-row__list {
  display: flex;
  align-items: center;
  gap: var(--marquee-gap);
  margin: 0;
  padding: 0.35rem 0;
  list-style: none;
}

.sponsor-marquee-row__item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-width: 72px;
  height: calc(var(--marquee-logo-max-height) + 0.75rem);
  padding: 0.35rem 0.65rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.06);
}

.sponsor-marquee-row__logo {
  display: block;
  width: auto;
  max-width: 120px;
  max-height: var(--marquee-logo-max-height);
  object-fit: contain;
  filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.35));
}

@keyframes sponsor-marquee-left {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(-50%, 0, 0);
  }
}

@media (min-width: 600px) {
  .sponsor-marquee-row {
    --marquee-logo-max-height: 52px;
    --marquee-gap: 1.5rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .sponsor-marquee-row__track {
    animation: none;
  }
}
</style>
