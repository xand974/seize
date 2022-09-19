import { SectionsType } from "types";

export enum APP_SECTIONS {
  TopInterpretations = "topInterpretations",
  TopLyrics = "topLyrics",
}

export enum PROFILE_SECTIONS_DISPLAYED {
  Lyrics = "lyrics",
  Interpretations = "interpretations",
}

export const FEED_SECTIONS = [
  {
    title: "Top Lyrics",
    contentDisplayed: "topLyrics",
    isActive: true,
  },
  {
    title: "Top Interpretations",
    contentDisplayed: "topInterpretations",
    isActive: false,
  },
];

export const PROFILE_SECTIONS = [
  {
    title: "Lyrics",
    contentDisplayed: "lyrics",
    isActive: true,
  },
  {
    title: "Interpretations",
    contentDisplayed: "interpretations",
    isActive: false,
  },
] as SectionsType[];
