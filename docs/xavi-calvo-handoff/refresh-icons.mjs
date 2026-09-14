// Raster exports of the supplied vector symbol, for browsers and installed apps.
import sharp from 'sharp';
const source = 'src/assets/Logos/xavi-calvo-svg/xavi-calvo-simbol-color.svg';
for (const [name, size] of [
  ['favicon-16.png', 16],
  ['favicon-32.png', 32],
  ['apple-touch-icon.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
]) {
  const padding = Math.round(size * 0.12);
  await sharp(source)
    .resize(size - padding * 2, size - padding * 2, {
      fit: 'contain',
      background: '#08090B',
    })
    .extend({
      top: padding,
      bottom: padding,
      left: padding,
      right: padding,
      background: '#08090B',
    })
    .png()
    .toFile('public/' + name);
}
