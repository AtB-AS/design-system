export function indentLine(list: string) {
  return Array.from({length: 3}).join(' ') + list;
}

export function indentJoin(list: string[]) {
  return list.map(indentLine).join('\n');
}

export function maybeConvertToRem(val: any) {
  if (typeof val !== 'number') {
    return val;
  }

  // Using 16 as base size
  return `${val / 16}rem`;
}
