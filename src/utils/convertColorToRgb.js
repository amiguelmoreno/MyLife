export function convertColorToRgb(color) {
  // Function to convert hex to RGB
  function hexToRgb(hex) {
    hex = hex.replace(/^#/, "");
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
  }

  // Function to convert rgba to RGB
  function rgbaToRgb(rgba) {
    const [r, g, b] = rgba.slice(0, 3);
    return [r, g, b];
  }

  // Function to convert hsl to RGB
  function hslToRgb(hsl) {
    const [h, s, l] = hsl;
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
    let r, g, b;

    if (h >= 0 && h < 60) {
      [r, g, b] = [c, x, 0];
    } else if (h >= 60 && h < 120) {
      [r, g, b] = [x, c, 0];
    } else if (h >= 120 && h < 180) {
      [r, g, b] = [0, c, x];
    } else if (h >= 180 && h < 240) {
      [r, g, b] = [0, x, c];
    } else if (h >= 240 && h < 300) {
      [r, g, b] = [x, 0, c];
    } else {
      [r, g, b] = [c, 0, x];
    }

    return [(r + m) * 255, (g + m) * 255, (b + m) * 255];
  }

  // Determine the color format and convert to RGB
  if (color.startsWith("#")) {
    return hexToRgb(color);
  } else if (color.startsWith("rgba")) {
    const rgbaValues = color.match(/[\d.]+/g).map(Number);
    return rgbaToRgb(rgbaValues);
  } else if (color.startsWith("hsl")) {
    const hslValues = color.match(/[\d.]+/g).map(Number);
    return hslToRgb(hslValues);
  } else {
    // Unsupported color format
    console.error("Unsupported color format");
    return null;
  }
}
