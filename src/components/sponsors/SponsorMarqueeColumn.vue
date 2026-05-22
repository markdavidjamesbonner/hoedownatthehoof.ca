<template>
  <div
    class="sponsor-marquee-column"
    :class="[`sponsor-marquee-column--${side}`]"
    :style="{ '--marquee-duration': `${durationSeconds}s` }"
    aria-hidden="true"
  >
    <div class="sponsor-marquee-column__track">
      <ul class="sponsor-marquee-column__list">
        <li
          v-for="sponsor in sponsors"
          :key="`${sponsor.id}-primary`"
          class="sponsor-marquee-column__item"
        >
          <img
            class="sponsor-marquee-column__logo"
            :src="resolveMarqueeLogo(sponsor)"
            :alt="sponsor.name"
            loading="lazy"
            decoding="async"
          />
        </li>
      </ul>
      <ul class="sponsor-marquee-column__list">
        <li
          v-for="sponsor in sponsors"
          :key="`${sponsor.id}-clone`"
          class="sponsor-marquee-column__item"
        >
          <img
            class="sponsor-marquee-column__logo"
            :src="resolveMarqueeLogo(sponsor)"
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
import { resolveMarqueeLogo } from "../../config/sponsors";

defineProps({
  sponsors: {
    type: Array,
    required: true,
  },
  side: {
    type: String,
    default: "left",
    validator: (value) => ["left", "right"].includes(value),
  },
  durationSeconds: {
    type: Number,
    default: 50,
  },
});
</script>

<style lang="scss" scoped>
.sponsor-marquee-column {
  --marquee-logo-max-height: 72px;
  --marquee-gap: 2rem;
  --content-max-width: 680px;
  --marquee-gutter: 1.5rem;

  position: fixed;
  top: 0;
  z-index: 0;
  width: clamp(96px, calc((100vw - var(--content-max-width)) / 2 - var(--marquee-gutter)), 160px);
  height: 100vh;
  overflow: hidden;
  pointer-events: none;
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    #000 10%,
    #000 90%,
    transparent 100%
  );

  &--left {
    left: max(var(--marquee-gutter), calc((100vw - var(--content-max-width)) / 2 - 180px));
  }

  &--right {
    right: max(var(--marquee-gutter), calc((100vw - var(--content-max-width)) / 2 - 180px));
  }
}

.sponsor-marquee-column__track {
  display: flex;
  flex-direction: column;
  animation: sponsor-marquee-up var(--marquee-duration, 50s) linear infinite;
  will-change: transform;
}

.sponsor-marquee-column__list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--marquee-gap);
  margin: 0;
  padding: calc(var(--marquee-gap) / 2) 0;
  list-style: none;
}

.sponsor-marquee-column__item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(var(--marquee-logo-max-height) + 1rem);
  padding: 0.35rem 0.5rem;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(2px);
}

.sponsor-marquee-column__logo {
  display: block;
  width: auto;
  max-width: 100%;
  max-height: var(--marquee-logo-max-height);
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.45));
}

@keyframes sponsor-marquee-up {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(0, -50%, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .sponsor-marquee-column__track {
    animation: none;
  }
}
</style>
