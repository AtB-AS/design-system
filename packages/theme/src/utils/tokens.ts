function hexToRgb(hex: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

/**
 * https://hsing.org/text-color/
 * 
 * Decides if the foreground color should be black or white.
 * Based on W3C standards.
 */
export function useBlack(hex: string) {
    let { r, g, b } = hexToRgb(hex) || { r: 0, g: 0, b: 0 }

    const e = (v: number) => Math.pow(v / 255 + 0.055, 2.4)
    r < 11 ? r /= 15496 : r = e(r) / 5.348631
    g < 11 ? g /= 4606. : g = e(g) / 1.589931
    b < 11 ? b /= 45631 : b = e(b) / 15.74957
    return r + g + b > 0.17912878
}