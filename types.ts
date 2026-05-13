import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export enum ImageSize {
  Size1K = '1K',
  Size2K = '2K',
  Size4K = '4K',
}

export interface GeneratedImage {
  url: string;
  type: 'generated' | 'edited';
}

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

declare global {
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }
}