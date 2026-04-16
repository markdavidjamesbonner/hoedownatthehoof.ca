<template>
  <q-page class="landing">
    <div
      class="hero-bg"
      :class="{ 'hero-bg--active': activeLayer === 'a' }"
      :style="{ backgroundImage: `url(${layerA})` }"
    />
    <div
      class="hero-bg"
      :class="{ 'hero-bg--active': activeLayer === 'b' }"
      :style="{ backgroundImage: `url(${layerB})` }"
    />
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

      <p class="landing__time">Registration starts 11am</p>

      <div class="divider-star text-white">&#9733;</div>

      <p class="landing__categories-label">Categories</p>

      <div class="landing__chips-wrap">
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

    <div class="credit">
      <img
        :src="markHead"
        alt=""
        class="credit__avatar"
        @click="showVideo = true"
      />
      <span class="credit__text">
        made with love by
        <a href="https://wetsandwich.com" target="_blank" rel="noopener" class="credit__link">mark</a>
      </span>
    </div>

    <Teleport to="body">
      <Transition name="egg-fade">
        <div v-if="showVideo" class="egg-backdrop" @click.self="closeVideo">
          <div class="egg-player">
            <button class="egg-player__close" @click="closeVideo">&times;</button>
            <video
              ref="videoEl"
              class="egg-player__video"
              :src="partyVideo"
              autoplay
              loop
              playsinline
            />
          </div>
        </div>
      </Transition>
    </Teleport>
  </q-page>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import bg1 from '../assets/background1.jpg'
import bg2 from '../assets/background2.jpg'
import bg3 from '../assets/background3.jpg'
import bg4 from '../assets/background4.jpg'
import markHead from '../assets/mark_head.png'
import partyVideo from '../assets/party_all_the_time.mp4'

const ROTATION_MS = 4000
const FADE_MS = 1000

const images = [bg1, bg2, bg3, bg4]

const activeLayer = ref('a')
const layerA = ref(images[0] ?? '')
const layerB = ref(images[1] ?? images[0] ?? '')
let currentIndex = 0
let intervalId = null

function advance () {
  if (images.length <= 1) return

  currentIndex = (currentIndex + 1) % images.length

  if (activeLayer.value === 'a') {
    layerB.value = images[currentIndex]
    activeLayer.value = 'b'
    setTimeout(() => {
      layerA.value = images[(currentIndex + 1) % images.length]
    }, FADE_MS)
  } else {
    layerA.value = images[currentIndex]
    activeLayer.value = 'a'
    setTimeout(() => {
      layerB.value = images[(currentIndex + 1) % images.length]
    }, FADE_MS)
  }
}

onMounted(() => {
  images.forEach(src => { new Image().src = src })
  if (images.length > 1) {
    intervalId = setInterval(advance, ROTATION_MS)
  }
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})

const showVideo = ref(false)
const videoEl = ref(null)

function closeVideo () {
  showVideo.value = false
  if (videoEl.value) {
    videoEl.value.pause()
    videoEl.value.currentTime = 0
  }
}

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
  padding: 16px 10px;
}

.landing__content {
  position: relative;
  z-index: 1;
  max-width: 680px;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 14px;
  padding: 24px 16px;
}

.landing__date {
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin: 0 0 8px;
  opacity: 0.85;
}

.landing__title {
  font-size: clamp(2rem, 6vw, 3.6rem);
  font-weight: 900;
  line-height: 1.1;
  margin: 0 0 4px;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.4);
}

.landing__entry {
  font-size: 1.1rem;
  margin: 0 0 2px;
  font-weight: 500;
}

.landing__time {
  font-size: 0.95rem;
  margin: 0;
  opacity: 0.85;
}

.landing__categories-label {
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin: 0 0 8px;
  opacity: 0.7;
}

.landing__chips-wrap {
  width: 95%;
  margin: 0 auto;
}

.landing__chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.landing__chip {
  font-size: 0.75rem;
  letter-spacing: 0.04em;
}

.credit {
  position: fixed;
  bottom: 12px;
  left: 12px;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 6px;
}

.credit__avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.15s ease;
  animation: wiggle 5s ease-in-out infinite;

  &:hover {
    transform: scale(0.85);
    animation: none;
  }
}

@keyframes wiggle {
  0%, 8%, 100% { transform: rotate(0deg); }
  1% { transform: rotate(-12deg); }
  2.5% { transform: rotate(10deg); }
  4% { transform: rotate(-8deg); }
  5.5% { transform: rotate(6deg); }
  7% { transform: rotate(-3deg); }
}

.credit__text {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.6);
}

.credit__link {
  color: #f5c842;
  text-decoration: underline;
  text-underline-offset: 2px;

  &:hover {
    color: #ffd95c;
  }
}

.egg-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
}

.egg-player {
  position: relative;
  width: 90%;
  max-width: 480px;
  border-radius: 10px;
  overflow: hidden;
  background: #000;
}

.egg-player__video {
  display: block;
  width: 100%;
}

.egg-player__close {
  position: absolute;
  top: 6px;
  right: 8px;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: #fff;
  font-size: 1.4rem;
  line-height: 1;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
}

.egg-fade-enter-active,
.egg-fade-leave-active {
  transition: opacity 0.25s ease;
}

.egg-fade-enter-from,
.egg-fade-leave-to {
  opacity: 0;
}

@media (min-width: 768px) {
  .landing {
    padding: 40px 20px;
  }

  .landing__content {
    border-radius: 20px;
    padding: 48px 40px;
  }

  .landing__date {
    font-size: 1rem;
    margin: 0 0 16px;
  }

  .landing__title {
    margin: 0 0 8px;
  }

  .landing__entry {
    font-size: 1.25rem;
    margin: 0 0 4px;
  }

  .landing__time {
    font-size: 1.1rem;
  }

  .landing__categories-label {
    font-size: 0.85rem;
    margin: 0 0 12px;
  }

  .landing__chips-wrap {
    width: 75%;
  }

  .landing__chip {
    font-size: 0.85rem;
  }
}
</style>
