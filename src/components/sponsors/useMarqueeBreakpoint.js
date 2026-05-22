import { computed, onMounted, onUnmounted, ref } from "vue";
import { sponsorMarqueeConfig } from "../../config/sponsors";

export function useMarqueeBreakpoint() {
  const viewportWidth = ref(
    typeof window !== "undefined" ? window.innerWidth : sponsorMarqueeConfig.breakpointPx
  );

  function updateViewport() {
    viewportWidth.value = window.innerWidth;
  }

  onMounted(() => {
    updateViewport();
    window.addEventListener("resize", updateViewport, { passive: true });
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateViewport);
  });

  const isWideViewport = computed(
    () => viewportWidth.value >= sponsorMarqueeConfig.breakpointPx
  );

  const isNarrowViewport = computed(() => !isWideViewport.value);

  return {
    isWideViewport,
    isNarrowViewport,
  };
}
