export interface GeneratedLogo {
  id: string;
  url: string;
  prompt: string;
  timestamp: number;
  style: LogoStyle;
}

export enum LogoStyle {
  MINIMALIST = 'Minimalist',
  MODERN_3D = '3D Modern',
  LUXURY = 'Luxury Gold',
  TECH = 'High-Tech',
  VINTAGE = 'Vintage Retro',
  GEOMETRIC = 'Geometric',
  ABSTRACT = 'Abstract Art',
  MASCOT = 'Mascot/Cartoon'
}

export interface GenerationSettings {
  prompt: string;
  style: LogoStyle;
  aspectRatio: '1:1' | '16:9' | '9:16';
}