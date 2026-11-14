import type { TypeCode } from "../types";

export type Eyes = "dot" | "happy" | "wink" | "closed" | "sparkle" | "side";
export type Mouth = "smile" | "open" | "small" | "calm" | "grin" | "smirk";
export type Prop =
  | "whistle"
  | "wrench"
  | "tambourine"
  | "mug"
  | "balloon"
  | "letter"
  | "bulb"
  | "magnifier"
  | "clipboard"
  | "book"
  | "basket"
  | "wateringCan"
  | "megaphone"
  | "candle"
  | "flag"
  | "map"
  | "none";
export type DecoKind =
  | "sparkle"
  | "heart"
  | "note"
  | "star"
  | "motion"
  | "question"
  | "check"
  | "clock"
  | "bolt"
  | "sprout";

export interface Point {
  x: number;
  y: number;
}

export interface NunConfig {
  bg: string;
  accent: string;
  eyes: Eyes;
  mouth: Mouth;
  brows?: boolean;
  glasses?: boolean;
  left: Point;
  right: Point;
  prop: Prop;
  propAt: Point;
  propRotate?: number;
  deco: { kind: DecoKind; x: number; y: number; s?: number }[];
}

export const INK = "#2b2d42";
export const SKIN = "#ffe1cc";
export const CHEEK = "#ff9aa2";
export const VEIL = "#2f3a5f";
export const HABIT = "#aab3c5";
export const HABIT_DARK = "#919bb0";

const DOWN_L = { x: 66, y: 188 };
const DOWN_R = { x: 134, y: 188 };

export const nunConfigs: Record<TypeCode | "WELCOME", NunConfig> = {
  ESTP: {
    bg: "#ffd6a5",
    accent: "#ff8c42",
    eyes: "sparkle",
    mouth: "grin",
    brows: true,
    left: { x: 40, y: 118 },
    right: { x: 154, y: 122 },
    prop: "whistle",
    propAt: { x: 158, y: 116 },
    deco: [
      { kind: "bolt", x: 40, y: 64, s: 1.1 },
      { kind: "motion", x: 168, y: 160 },
      { kind: "sparkle", x: 160, y: 56, s: 0.8 },
    ],
  },
  ISTP: {
    bg: "#cde7f0",
    accent: "#3a86ff",
    eyes: "dot",
    mouth: "calm",
    left: DOWN_L,
    right: { x: 146, y: 156 },
    prop: "wrench",
    propAt: { x: 148, y: 150 },
    propRotate: 25,
    deco: [
      { kind: "sparkle", x: 42, y: 66, s: 0.9 },
      { kind: "check", x: 158, y: 60 },
    ],
  },
  ESFP: {
    bg: "#ffd1dc",
    accent: "#ff5d8f",
    eyes: "happy",
    mouth: "grin",
    left: { x: 42, y: 110 },
    right: { x: 154, y: 108 },
    prop: "tambourine",
    propAt: { x: 160, y: 98 },
    deco: [
      { kind: "note", x: 40, y: 64 },
      { kind: "note", x: 150, y: 46, s: 0.8 },
      { kind: "sparkle", x: 30, y: 150, s: 0.7 },
    ],
  },
  ISFP: {
    bg: "#ffe8b6",
    accent: "#f4a261",
    eyes: "closed",
    mouth: "smile",
    left: { x: 88, y: 158 },
    right: { x: 112, y: 158 },
    prop: "mug",
    propAt: { x: 100, y: 156 },
    deco: [
      { kind: "heart", x: 42, y: 64, s: 0.9 },
      { kind: "heart", x: 160, y: 58, s: 0.7 },
      { kind: "sparkle", x: 162, y: 130, s: 0.6 },
    ],
  },
  ENFP: {
    bg: "#e0d4ff",
    accent: "#9b5de5",
    eyes: "sparkle",
    mouth: "open",
    left: { x: 42, y: 112 },
    right: { x: 152, y: 128 },
    prop: "balloon",
    propAt: { x: 152, y: 126 },
    deco: [
      { kind: "star", x: 40, y: 62 },
      { kind: "star", x: 30, y: 150, s: 0.6 },
      { kind: "sparkle", x: 120, y: 34, s: 0.7 },
    ],
  },
  INFP: {
    bg: "#ffd9e8",
    accent: "#f15bb5",
    eyes: "happy",
    mouth: "small",
    left: { x: 86, y: 156 },
    right: { x: 114, y: 156 },
    prop: "letter",
    propAt: { x: 100, y: 154 },
    deco: [
      { kind: "heart", x: 40, y: 66 },
      { kind: "heart", x: 158, y: 56, s: 0.8 },
      { kind: "heart", x: 166, y: 120, s: 0.55 },
    ],
  },
  ENTP: {
    bg: "#fff3b0",
    accent: "#ffb703",
    eyes: "sparkle",
    mouth: "smirk",
    brows: true,
    left: DOWN_L,
    right: { x: 154, y: 112 },
    prop: "bulb",
    propAt: { x: 158, y: 104 },
    deco: [
      { kind: "sparkle", x: 40, y: 62 },
      { kind: "sparkle", x: 30, y: 120, s: 0.6 },
      { kind: "star", x: 120, y: 34, s: 0.6 },
    ],
  },
  INTP: {
    bg: "#d3f8e2",
    accent: "#2ec4b6",
    eyes: "side",
    mouth: "small",
    glasses: true,
    left: DOWN_L,
    right: { x: 148, y: 140 },
    prop: "magnifier",
    propAt: { x: 150, y: 138 },
    propRotate: -15,
    deco: [
      { kind: "question", x: 42, y: 70 },
      { kind: "question", x: 164, y: 58, s: 0.7 },
    ],
  },
  ESTJ: {
    bg: "#c9e4ff",
    accent: "#1d7fd9",
    eyes: "dot",
    mouth: "smile",
    brows: true,
    left: { x: 80, y: 170 },
    right: { x: 148, y: 126 },
    prop: "clipboard",
    propAt: { x: 76, y: 162 },
    deco: [
      { kind: "check", x: 158, y: 60 },
      { kind: "sparkle", x: 42, y: 64, s: 0.8 },
    ],
  },
  ISTJ: {
    bg: "#e3e8f0",
    accent: "#5c6b8a",
    eyes: "dot",
    mouth: "calm",
    glasses: true,
    left: { x: 86, y: 158 },
    right: { x: 114, y: 158 },
    prop: "book",
    propAt: { x: 100, y: 156 },
    deco: [
      { kind: "clock", x: 158, y: 60 },
      { kind: "sparkle", x: 40, y: 66, s: 0.7 },
    ],
  },
  ESFJ: {
    bg: "#ffe3c7",
    accent: "#fb8500",
    eyes: "happy",
    mouth: "open",
    left: { x: 70, y: 160 },
    right: { x: 156, y: 110 },
    prop: "basket",
    propAt: { x: 66, y: 160 },
    deco: [
      { kind: "heart", x: 42, y: 66 },
      { kind: "heart", x: 160, y: 60, s: 0.7 },
    ],
  },
  ISFJ: {
    bg: "#dff5d8",
    accent: "#57cc99",
    eyes: "closed",
    mouth: "smile",
    left: DOWN_L,
    right: { x: 140, y: 160 },
    prop: "wateringCan",
    propAt: { x: 146, y: 158 },
    deco: [
      { kind: "sprout", x: 172, y: 190 },
      { kind: "sparkle", x: 42, y: 64, s: 0.8 },
      { kind: "heart", x: 160, y: 60, s: 0.6 },
    ],
  },
  ENFJ: {
    bg: "#ffd8cc",
    accent: "#ff6b6b",
    eyes: "happy",
    mouth: "grin",
    brows: true,
    left: { x: 42, y: 108 },
    right: { x: 150, y: 126 },
    prop: "megaphone",
    propAt: { x: 152, y: 120 },
    deco: [
      { kind: "star", x: 40, y: 60, s: 0.9 },
      { kind: "star", x: 164, y: 70, s: 0.7 },
      { kind: "sparkle", x: 140, y: 40, s: 0.6 },
    ],
  },
  INFJ: {
    bg: "#e6e0f8",
    accent: "#7b6cf6",
    eyes: "closed",
    mouth: "calm",
    left: { x: 88, y: 160 },
    right: { x: 112, y: 160 },
    prop: "candle",
    propAt: { x: 100, y: 158 },
    deco: [
      { kind: "sparkle", x: 42, y: 64 },
      { kind: "sparkle", x: 158, y: 58, s: 0.8 },
      { kind: "star", x: 34, y: 130, s: 0.55 },
    ],
  },
  ENTJ: {
    bg: "#ffe0e0",
    accent: "#e63946",
    eyes: "dot",
    mouth: "smile",
    brows: true,
    left: DOWN_L,
    right: { x: 152, y: 120 },
    prop: "flag",
    propAt: { x: 154, y: 122 },
    deco: [
      { kind: "sparkle", x: 40, y: 62 },
      { kind: "star", x: 34, y: 128, s: 0.6 },
    ],
  },
  INTJ: {
    bg: "#d6eaf8",
    accent: "#2b59c3",
    eyes: "side",
    mouth: "smirk",
    left: { x: 84, y: 158 },
    right: { x: 116, y: 158 },
    prop: "map",
    propAt: { x: 100, y: 156 },
    deco: [
      { kind: "star", x: 42, y: 62 },
      { kind: "star", x: 160, y: 56, s: 0.7 },
      { kind: "sparkle", x: 166, y: 118, s: 0.6 },
    ],
  },
  WELCOME: {
    bg: "#fff1c1",
    accent: "#ff6b8b",
    eyes: "happy",
    mouth: "open",
    left: { x: 42, y: 108 },
    right: DOWN_R,
    prop: "none",
    propAt: { x: 0, y: 0 },
    deco: [],
  },
};
