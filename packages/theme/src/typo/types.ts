export const textNames = [
  'body__primary',
  'body__primary--bold',
  'body__primary--underline',
  'body__primary--jumbo',
  'body__secondary',
  'body__secondary--bold',
  'body__tertiary',
  'body__tertiary--strike',
  'heading__title',
  'heading__component',
  'heading__paragraph',
] as const;

export type FontData = {
  [fontName: string]: {
    url?: string;
    fontFamily: string;
  };
};

export type TextNames = typeof textNames[number];

export type TextStyle = {
  fontSize: number;
  letterSpacing: number;
  lineHeight: number;
  textDecorationLine?:
    | 'none'
    | 'underline'
    | 'line-through'
    | 'underline line-through';
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
};

export type TextTypeStyles = {[key in TextNames]: TextStyle};
