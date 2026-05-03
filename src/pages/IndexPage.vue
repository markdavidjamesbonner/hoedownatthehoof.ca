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

      <!-- <div class="divider-star text-white">&#9733;</div> -->

      <!-- src="../assets/flyer/poster_hoedown_2026_01_cropped.jpg" -->
      <img
        src="../assets/flyer/poster_hoedown_2026_04_cropped.gif"
        alt="Hoedown at The Hoof 2026 poster"
        class="landing__logo"
        width="35%"
        height="auto"
        style="margin: 10px auto; display: block;"
      >

      <p class="landing__entry">$20 entry to the &ldquo;non-test&rdquo;</p>

      <p class="landing__time">Registration starts 11am</p>

      <div class="divider-star text-white">&#9733;</div>

      <p class="landing__categories-label">Categories</p>

      <div class="landing__chips-wrap">
        <div class="landing__chips">
          <q-chip
            v-for="(cat, i) in categories"
            :key="cat"
            dark
            text-color="white"
            class="landing__chip"
            :style="{ backgroundColor: chipColors[i] }"
          >
            {{ cat }}
          </q-chip>
        </div>
      </div>

      <div class="divider-star text-white">&#9733;</div>

      <p class="landing__people">
        <span>
          DJ: &nbsp;
          <a
            href="https://instagram.com/josh_reid_randell"
            target="_blank"
            rel="noopener"
            :style="{ color: rainbowColors[0] }"
            >@josh_reid_randell</a
          >
        </span>
        <br />
        <span>
          MCs: &nbsp;
          <a
            href="https://instagram.com/built4gnar"
            target="_blank"
            rel="noopener"
            :style="{ color: rainbowColors[1] }"
            >@built4gnar</a
          >
          &nbsp;&bull;&nbsp;
          <a
            href="https://instagram.com/word_zine"
            target="_blank"
            rel="noopener"
            :style="{ color: rainbowColors[2] }"
            >@word_zine</a
          >
        </span>
        <br />
        <span>
          Judges: &nbsp;
          <a
            href="https://instagram.com/rogerblinoff"
            target="_blank"
            rel="noopener"
            :style="{ color: rainbowColors[3] }"
            >@rogerblinoff</a
          >
          &nbsp;&bull;&nbsp;
          <a
            href="https://instagram.com/warm_salad"
            target="_blank"
            rel="noopener"
            :style="{ color: rainbowColors[4] }"
            >@warm_salad</a
          >
          &nbsp;&bull;&nbsp;
          <a
            href="https://instagram.com/crayoburn_factory"
            target="_blank"
            rel="noopener"
            :style="{ color: rainbowColors[5] }"
            >@crayoburn_factory</a
          >
        </span>
      </p>

      <div class="divider-star text-white">&#9733;</div>

      <p class="landing__section-title">Updates — stay tuned</p>

      <div class="landing__updates">
        <a
          href="https://www.instagram.com/reel/DXWzM9vkRzY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          target="_blank"
          rel="noopener"
          class="update-card"
        >
          <div class="update-card__badge" :style="{ backgroundColor: rainbowColors[3] }">
            CONFIRMED
          </div>
          <div class="update-card__body">
            <span class="update-card__name">Liam Pace</span>
            <span class="update-card__detail">Pro Rider &bull; Madness Skateboards</span>
            <span class="update-card__cta">
              Watch on Instagram &rarr;
            </span>
          </div>
        </a>
      </div>

      <div class="landing__socials">
        <a
          href="https://www.instagram.com/hoedownatthehoof/"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            fill="currentColor"
            width="24"
            height="24"
          >
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.9 224.1 370.9 339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1S4.8 127.5 3 163.4c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
            />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100068867430309"
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            width="24"
            height="24"
          >
            <path
              d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256c0 120 82.7 220.8 194.2 248.5V334.2h-56.6v-78.2h56.6v-61.3c0-56.4 33.5-87.3 84.6-87.3 24.5 0 50.2 4.4 50.2 4.4v55.4h-28.3c-27.8 0-36.5 17.3-36.5 35v42h62.3l-10 78.2h-52.3v170.3C429.3 476.8 512 376 512 256z"
            />
          </svg>
        </a>
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
        <a
          href="https://wetsandwich.com"
          target="_blank"
          rel="noopener"
          class="credit__link"
          >mark</a
        >
      </span>
    </div>

    <Teleport to="body">
      <Transition name="egg-fade">
        <div v-if="showVideo" class="egg-backdrop" @click.self="closeVideo">
          <div class="egg-player">
            <button class="egg-player__close" @click="closeVideo">
              &times;
            </button>
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
import { ref, onMounted, onUnmounted } from "vue";
import bg1 from "../assets/background1.jpg";
import bg2 from "../assets/background2.jpg";
import bg3 from "../assets/background3.jpg";
import bg4 from "../assets/background4.jpg";
import markHead from "../assets/mark_head.png";
import partyVideo from "../assets/party_all_the_time.mp4";
import poster from "../assets/flyer/poster_hoedown_2026_01_cropped.jpg";
import posterGif from "../assets/flyer/poster_hoedown_2026_04_cropped.gif";

const ROTATION_MS = 4000;
const FADE_MS = 1000;

const images = [bg1, bg2, bg3, bg4];

const activeLayer = ref("a");
const layerA = ref(images[0] ?? "");
const layerB = ref(images[1] ?? images[0] ?? "");
let currentIndex = 0;
let intervalId = null;

function advance() {
  if (images.length <= 1) return;

  currentIndex = (currentIndex + 1) % images.length;

  if (activeLayer.value === "a") {
    layerB.value = images[currentIndex];
    activeLayer.value = "b";
    setTimeout(() => {
      layerA.value = images[(currentIndex + 1) % images.length];
    }, FADE_MS);
  } else {
    layerA.value = images[currentIndex];
    activeLayer.value = "a";
    setTimeout(() => {
      layerB.value = images[(currentIndex + 1) % images.length];
    }, FADE_MS);
  }
}

onMounted(() => {
  images.forEach((src) => {
    new Image().src = src;
  });
  if (images.length > 1) {
    intervalId = setInterval(advance, ROTATION_MS);
  }
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});

const showVideo = ref(false);
const videoEl = ref(null);

function closeVideo() {
  showVideo.value = false;
  if (videoEl.value) {
    videoEl.value.pause();
    videoEl.value.currentTime = 0;
  }
}

const rainbowColors = [
  "#FF4444",
  "#FF8C00",
  "#FFD700",
  "#4CAF50",
  "#42A5F5",
  "#AB47BC",
];

const chipColors = [
  "#FF4444",
  "#FF8C00",
  "#FFD700",
  "#42A5F5",
  "#AB47BC",
  "#FF6B9D",
];

const categories = [
  "Groms (under 16)",
  "Women's",
  "Masters (over 40)",
  "Legends (over 50)",
  "Open",
  "Best Trick",
];
</script>

<style lang="scss" scoped>
// ─── MOBILE-FIRST (phones, < 600px) ─────────────────────────

// Box
.landing {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  color: #fff;
  //   text-align: center;
  padding: 10px;
}

.landing__content {
  position: relative;
  z-index: 1;
  width: 100%;
  background: rgba(0, 0, 0, 0.75);
  border-radius: 14px;
  padding: 28px 16px;
}

// Text
.landing__date {
  font-size: 2.8vw;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin: 0 0 10px;
  opacity: 0.85;
}

.landing__title {
  font-size: 9.5vw;
  font-weight: 900;
  line-height: 1.05;
  margin: 0 0 4px;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.4);
}

.landing__entry {
  font-size: 4.4vw;
  margin: 0 0 4px;
  font-weight: 500;
}

.landing__time {
  font-size: 3.8vw;
  margin: 0;
  opacity: 0.85;
}

.landing__categories-label {
  font-size: 3.2vw;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin: 0 0 10px;
  opacity: 0.7;
}

.landing__chips-wrap {
  width: 100%;
  margin: 0 auto;
}

.landing__chips {
  display: flex;
  flex-wrap: wrap;
  //   justify-content: center;
  //   gap: 8px;
}

.landing__chip {
  font-size: 3vw;
  letter-spacing: 0.04em;
}

.landing__people {
  font-size: 0.85rem;
  font-weight: 700;
}

.landing__section-title {
  font-size: 3.2vw;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin: 0 0 10px;
  opacity: 0.7;
}

.landing__updates {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.update-card {
  display: flex;
  align-items: stretch;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  color: #fff;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    border-color: rgba(255, 255, 255, 0.3);
  }
}

.update-card__badge {
  display: flex;
  align-items: center;
  justify-content: center;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
  padding: 8px 6px;
  font-size: 0.55rem;
  font-weight: 900;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  flex-shrink: 0;
}

.update-card__body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px 14px;
  gap: 2px;
}

.update-card__name {
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.02em;
}

.update-card__detail {
  font-size: 0.75rem;
  opacity: 0.7;
}

.update-card__cta {
  font-size: 0.7rem;
  margin-top: 4px;
  opacity: 0.5;
}

.landing__socials {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 25px;

  a {
    color: white;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.7;
    }
  }
}

// ─── Credit / easter-egg (not size-dependent) ───────────────

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
  0%,
  8%,
  100% {
    transform: rotate(0deg);
  }

  1% {
    transform: rotate(-12deg);
  }

  2.5% {
    transform: rotate(10deg);
  }

  4% {
    transform: rotate(-8deg);
  }

  5.5% {
    transform: rotate(6deg);
  }

  7% {
    transform: rotate(-3deg);
  }
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

// ─── DESKTOP (≥ 600px) ──────────────────────────────────────

@media (min-width: 600px) {
  // Box
  .landing {
    padding: 40px 20px;
  }

  .landing__content {
    max-width: 680px;
    width: auto;
    border-radius: 20px;
    padding: 48px 40px;
  }

  // Text — lock to rem so they stop scaling with viewport
  .landing__date {
    font-size: 1rem;
    letter-spacing: 0.2em;
    margin: 0 0 16px;
  }

  .landing__title {
    font-size: clamp(2.8rem, 5vw, 3.6rem);
    line-height: 1.1;
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

  .landing__chip {
    font-size: 0.85rem;
  }

  .landing__section-title {
    font-size: 0.85rem;
    margin: 0 0 12px;
  }

  .update-card__badge {
    font-size: 0.6rem;
    padding: 10px 8px;
  }

  .update-card__name {
    font-size: 1.05rem;
  }
}
</style>
