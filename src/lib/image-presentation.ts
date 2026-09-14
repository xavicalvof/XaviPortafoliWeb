import type { ImageMetadata } from 'astro';
// The assets are already cropped; the viewer uses their actual dimensions.
export function imagePresentation(image: ImageMetadata) {
  return {
    ratio: image.width / image.height,
    position: '50%',
  };
}
