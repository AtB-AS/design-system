export function indentLine(list: string) {
  return Array.from({length: 3}).join(' ') + list;
}

export function isHex(maybeHex: string) {
  return maybeHex.match(/\b[a-fA-F0-9]+\b/);
}

export function maybeConvertToRem(val: any, name?: string) {
  if (typeof val !== 'number' || name === 'opacity') {
    return isHex(val) ? (val as string).toUpperCase() : val
  }

  // Using 16 as base size
  return `${val / 16}rem`;
}

/**
 * Converts a token name to camelCase, treating spaces, dashes and
 * underscores as word separators.
 *
 * "AirportExpress" -> "airportExpress"
 * "Strong Highlight", "strong--highlight", "strong_highlight" -> "strongHighlight"
 */
export function convertToCamelCase(input: string) {
  const [first = '', ...rest] = input.split(/[\s_-]+/).filter(Boolean);
  return (
    first.charAt(0).toLowerCase() + first.slice(1)
    + rest.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('')
  );
} 