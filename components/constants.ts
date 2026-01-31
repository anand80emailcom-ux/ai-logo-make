import { LogoStyle } from './types';

export const APP_NAME = "AI Logo";
export const DOMAIN_URL = "ailogo.com";

export const STYLE_MODIFIERS: Record<LogoStyle, string> = {
  [LogoStyle.MINIMALIST]: "ultra-minimalist, clean lines, professional vector, white background, high contrast, centered",
  [LogoStyle.MODERN_3D]: "3D isometric logo, soft shadows, premium render, modern aesthetic, centered",
  [LogoStyle.LUXURY]: "luxury brand logo, gold foil texture, elegant serif, premium black background style, royal feel",
  [LogoStyle.TECH]: "tech startup logo, futuristic, glowing lines, circuitry elements, sleek design",
  [LogoStyle.VINTAGE]: "vintage heritage badge, classic typography, retro texture, organic feel, stamp style",
  [LogoStyle.GEOMETRIC]: "perfect geometric shapes, golden ratio, symmetrical, vector art, mathematical precision",
  [LogoStyle.ABSTRACT]: "creative abstract mark, symbolic, artistic, modern conceptual design",
  [LogoStyle.MASCOT]: "friendly character mascot logo, vibrant colors, clean cel-shaded style, bold outlines"
};