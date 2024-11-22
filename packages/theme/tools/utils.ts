export function convertToCamelCase(input: string) {
  return input.length === 0 ? '' : input.charAt(0).toLowerCase() + input.slice(1);
} 