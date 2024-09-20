import { dirname } from "path";
import { fileURLToPath } from "url";

export function indentLine(list: string) {
  return Array.from({length: 3}).join(' ') + list;
}

export function indentJoin(list: string[]) {
  return list.map(indentLine).join('\n');
}

export function maybeConvertToRem(val: any, name?: string) {
  if (typeof val !== 'number' || name === 'opacity') {
    return val;
  }

  // Using 16 as base size
  return `${val / 16}rem`;
}

export const __dirname = dirname(fileURLToPath(import.meta.url))

export function convertToCamelCase(input: string) {
  return input.length === 0 ? '' : input.charAt(0).toLowerCase() + input.slice(1);
} 

export function convertToSnakeCase(input: string) {
  return input.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
} 