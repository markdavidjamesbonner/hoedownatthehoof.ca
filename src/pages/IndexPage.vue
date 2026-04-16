<template>
  <q-page class="landing">
    <div class="hero-bg" />
    <div class="hero-overlay" />

    <div class="landing__content">
      <p class="landing__date">Saturday June 20th, 2026</p>

      <h1 class="landing__title font-accent">
        The 15th Annual<br />
        Hoedown at The Hoof
      </h1>

      <div class="divider-star text-white">&#9733;</div>

      <p class="landing__entry">
        $20 entry to the &ldquo;non test&rdquo;
      </p>

      <p class="landing__time">Registration starts 11 am</p>

      <div class="divider-star text-white">&#9733;</div>

      <p class="landing__categories-label">Categories</p>

      <div style="width: 75%; margin: 0 auto;">
          <div class="landing__chips">
            <q-chip
              v-for="(cat, i) in categories"
              :key="cat"
              dark
              outline
              text-color="white"
              class="landing__chip"
              :style="{ borderColor: rainbowColors[i], color: rainbowColors[i] }"
            >
              {{ cat }}
            </q-chip>
          </div>
      </div>

    </div>
  </q-page>
</template>

<script setup>
const rainbowColors = ['#FF4444', '#FF8C00', '#FFD700', '#4CAF50', '#42A5F5', '#AB47BC']

const categories = [
  'Groms (under 16)',
  'Women\'s',
  'Masters (over 40)',
  'Legends (over 50)',
  'Open',
  'Best Trick',
]
</script>

<style lang="scss" scoped>
.landing {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #fff;
  text-align: center;
  padding: 40px 20px;
}

.landing__content {
  position: relative;
  z-index: 1;
  max-width: 680px;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 20px;
  padding: 48px 40px;
}

.landing__date {
  font-size: 1rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin: 0 0 16px;
  opacity: 0.85;
}

.landing__title {
  font-size: clamp(2rem, 6vw, 3.6rem);
  font-weight: 900;
  line-height: 1.1;
  margin: 0 0 8px;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.4);
}

.landing__entry {
  font-size: 1.25rem;
  margin: 0 0 4px;
  font-weight: 500;
}

.landing__time {
  font-size: 1.1rem;
  margin: 0;
  opacity: 0.85;
}

.landing__categories-label {
  font-size: 0.85rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin: 0 0 12px;
  opacity: 0.7;
}

.landing__chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.landing__chip {
  font-size: 0.85rem;
  letter-spacing: 0.04em;
}
</style>
