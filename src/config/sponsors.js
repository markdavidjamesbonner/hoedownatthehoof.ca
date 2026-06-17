/**
 * Sponsor marquee configuration — edit this file each year.
 *
 * 1. Drop PNG/SVG logos into `src/assets/sponsors/`
 * 2. Add or remove entries below (keep `id` unique)
 * 3. Optional: set `url` for clickable logos later
 * 4. Optional: set `logoOnDark` — the light/white logo variant for dark backgrounds
 * 5. Optional: set `marqueeLogo` — controls which asset + pill style is used in marquees:
 *      'onDark'  → shows `logoOnDark` on a dark pill  (for white/light logos)
 *      'default' → shows `logo` on a light pill        (for dark logos — the default)
 */

import auntySkates from "../assets/sponsors/AuntySkates.png";
import baitshop from "../assets/sponsors/Baitshop.png";
import cjsSkatepark from "../assets/sponsors/CJsSKATEPARK.png";
import cjsSkateparkWhite from "../assets/sponsors/CJsSKATEPARK_white.png";
import cityOfToronto from "../assets/sponsors/City_of_Toronto.png";
import clarksideShopdogs from "../assets/sponsors/Clarkside_Shopdogs.png";
import comacanSkateboards from "../assets/sponsors/Comacan_Skateboards.png";
import drivewaySkateshop from "../assets/sponsors/Driveway_Skateshop.png";
import drivewaySkateshopWhite from "../assets/sponsors/Driveway_Skateshop_white.png";
import gnarOptics from "../assets/sponsors/GNAR_OPTICS.png";
import hammerSkateboard from "../assets/sponsors/Hammer_Skateboard.png";
import heartbeatHotsauce from "../assets/sponsors/Heartbeat_Hotsauce.png";
import interiorcare from "../assets/sponsors/Interiorcare.png";
import madnessSkateboards from "../assets/sponsors/Madness_Skateboards.png";
import onTheSpotCleaners from "../assets/sponsors/On_the_Spot_Cleaners.png";
import ontarioSkateboarding from "../assets/sponsors/Ontario_Skateboarding.png";
import sbcMedia from "../assets/sponsors/SBC_Media.png";
import streetArtToronto from "../assets/sponsors/Street_Art_Toronto_banner.png";
import streetArtTorontoWhite from "../assets/sponsors/Street_Art_Toronto_banner.png";
import witzelDyce from "../assets/sponsors/Witzel_Dyce_Engineering.png";
import wordZine from "../assets/sponsors/Word_Zine.png";
import wordZineWhite from "../assets/sponsors/Word_Zine_white.png";
import ehTeam from "../assets/sponsors/ehteam.png";
import aceTrucks from "../assets/sponsors/ace-trucks.png";
import rideSkateShop from "../assets/sponsors/ride_skate_shop.png";
import canadaSkateboard from "../assets/sponsors/Canada_Skateboard_horizontal_alpha_edite.png";
import canadaSkateboardWhite from "../assets/sponsors/Canada_Skateboard_horizontal_alpha_edite_white.png";

import jackass1 from "../assets/jackass/1x1_Jackass_Best_and_Last_0.jpg";
import jackass2 from "../assets/jackass/Jackass_BestAndLast_Digital_4x5_1080x1350.jpg";

import bowlChamps from "../assets/sponsors/BowlChampsFINAL.png";


/** Toggle marquees without touching layout code. */
export const sponsorMarqueeConfig = {
  /** Viewport width where layout switches: side columns (wide) vs horizontal strip (narrow) */
  breakpointPx: 960,
  vertical: {
    enabled: true,
    leftDurationSeconds: 22,
    rightDurationSeconds: 22,
  },
  horizontal: {
    enabled: true,
    durationSeconds: 22,
  },
};

/**
 * All sponsors for the current event.
 * Split across left/right columns automatically in SponsorMarquees.vue.
 */
export const sponsors = [
  { id: "aunty-skates", name: "Aunty Skates", logo: auntySkates },
  { id: "baitshop", name: "Baitshop", logo: baitshop, marqueeLogo: "onDark", },
  {
    id: "cjs-skatepark",
    name: "CJ's Skatepark",
    logo: cjsSkatepark,
    logoOnDark: cjsSkateparkWhite,
    marqueeLogo: "onDark",
  },
  { id: "city-of-toronto", name: "City of Toronto", logo: cityOfToronto },
  { id: "clarkside-shopdogs", name: "Clarkside Shopdogs", logo: clarksideShopdogs },
  { id: "comacan", name: "Comacan Skateboards", logo: comacanSkateboards },
  {
    id: "driveway",
    name: "Driveway Skateshop",
    logo: drivewaySkateshop,
    // logoOnDark: drivewaySkateshopWhite,
    // marqueeLogo: "onDark",
  },
  {
    id: "gnar-optics",
    name: "Gnar Optics",
    logo: gnarOptics,
    marqueeLogo: "onDark",
  },
  {
    id: "hammer",
    name: "Hammer Skateboard",
    logo: hammerSkateboard,
    marqueeLogo: "onDark",
  },
  { id: "heartbeat-hotsauce", name: "Heartbeat Hotsauce", logo: heartbeatHotsauce },
  { id: "interiorcare", name: "Interiorcare", logo: interiorcare },
  { id: "madness", name: "Madness Skateboards", logo: madnessSkateboards },
  { id: "on-the-spot", name: "On The Spot Cleaners", logo: onTheSpotCleaners, marqueeLogo: "onDark", },
  { id: "ontario-skateboarding", name: "Ontario Skateboarding", logo: ontarioSkateboarding },
  { id: "sbc-media", name: "SBC Media", logo: sbcMedia, marqueeLogo: "onDark", },
  {
    id: "street-art-toronto",
    name: "Street Art Toronto",
    logo: streetArtToronto,
    logoOnDark: streetArtTorontoWhite,
    marqueeLogo: "onDark",
  },
  { id: "witzel-dyce", name: "Witzel Dyce Engineering", logo: witzelDyce },
  {
    id: "word-zine",
    name: "Word Zine",
    logo: wordZine,
    logoOnDark: wordZineWhite,
    marqueeLogo: "onDark",
  },
  { id: "eh-team", name: "eh team", logo: ehTeam },
  { id: "ace-trucks", name: "Ace Trucks", logo: aceTrucks },
  { id: "ride-skate-shop", name: "Ride Skate Shop", logo: rideSkateShop },
  {
    id: "canada-skateboard",
    name: "Canada Skateboard",
    logo: canadaSkateboard,
    logoOnDark: canadaSkateboardWhite,
    marqueeLogo: "onDark",
  },

  { id: "jackass-1", name: "Jackass: Best and Last", logo: jackass1, marqueeLogo: "onDark", },
  { id: "jackass-2", name: "Jackass: Best and Last", logo: jackass2, marqueeLogo: "onDark", },

  { id: "bowl-champs", name: "Bowl-Champs, Summit Series", logo: bowlChamps },

];

/** Returns the correct logo asset based on the sponsor's `marqueeLogo` flag. */
export function resolveMarqueeLogo(sponsor) {
  if (sponsor.marqueeLogo === "onDark") {
    return sponsor.logoOnDark ?? sponsor.logo;
  }
  return sponsor.logo;
}

/** Returns 'dark' or 'light' — drives pill background in marquee components. */
export function resolveMarqueeTheme(sponsor) {
  return sponsor.marqueeLogo === "onDark" ? "dark" : "light";
}
