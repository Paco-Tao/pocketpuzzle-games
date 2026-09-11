export const ads = {
  socialBarSrc: 'https://pl31283894.profitableratecpmnetwork.com/2c/6a/b8/2c6ab896e045511e66e63157bbed7710.js',
  banners: {
    '728x90': { key: 'a186c7f71bea09655d117ab80641bf6d', width: 728, height: 90 },
    '320x50': { key: 'd118e006f06bb52b35927c593d1864d7', width: 320, height: 50 },
    '300x250': { key: 'dc869814f0ff306e6d65250a78ad718c', width: 300, height: 250 },
  },
  native: {
    src: 'https://pl31283893.profitableratecpmnetwork.com/b6dda964f9362622647aca8b176962d1/invoke.js',
    containerId: 'container-b6dda964f9362622647aca8b176962d1',
  },
} as const;

export type AdUnit = keyof typeof ads.banners | 'native';
