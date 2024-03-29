import {FontBook, TextStyle, TextTypeStyles} from './types';

const primaryBase: TextStyle = {
  fontSize: 16,
  lineHeight: 20,
  letterSpacing: -0.31,
};
const secondaryBase: TextStyle = {
  fontSize: 14,
  lineHeight: 20,
  letterSpacing: -0.15,
};
const tertiaryBase: TextStyle = {
  fontSize: 12,
  lineHeight: 16,
  letterSpacing: 0,
};
const labelBase: TextStyle = {
  fontSize: 10,
  lineHeight: 16,
  letterSpacing: 0,
};

export const iosFontData: FontBook = {
  main: {
    fontFamily: `'SF Pro Text', -apple-system, BlinkMacSystemFont`,
  },
};

export const iosTextTypeStyles: TextTypeStyles = {
  body__primary: primaryBase,
  'body__primary--bold': {
    ...primaryBase,
    fontWeight: '600',
  },
  'body__primary--strike': {
    ...primaryBase,
    textDecorationLine: 'line-through',
  },
  'body__primary--underline': {
    ...primaryBase,
    textDecorationLine: 'underline',
  },
  'body__primary--big': {
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: 0.41,
  },
  'body__primary--big--bold': {
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: 0.41,
    fontWeight: 'bold',
  },
  'body__primary--jumbo': {
    fontSize: 36,
    lineHeight: 40,
    letterSpacing: 0.41,
  },
  'body__primary--jumbo--bold': {
    fontSize: 36,
    lineHeight: 40,
    letterSpacing: 0.41,
    fontWeight: 'bold',
  },
  body__secondary: secondaryBase,
  'body__secondary--bold': {
    ...secondaryBase,
    fontWeight: '600',
  },
  body__tertiary: tertiaryBase,
  'body__tertiary--bold': {
    ...tertiaryBase,
    fontWeight: '600',
  },
  'body__tertiary--strike': {
    ...tertiaryBase,
    textDecorationLine: 'line-through',
  },
  'body__tertiary--uppercase': {
    ...primaryBase,
    textTransform: 'uppercase',
  },
  heading__title: {
    ...primaryBase,
    fontWeight: 'bold',
  },
  heading__component: {
    ...primaryBase,
    fontWeight: '600',
  },
  heading__paragraph: {
    ...primaryBase,
    fontWeight: '600',
  },
  'heading--medium': {
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: -0.31,
    fontWeight: '700',
  },
  'heading--big': {
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: -0.31,
    fontWeight: '600',
  },
  'heading--jumbo': {
    fontSize: 32,
    lineHeight: 38,
    letterSpacing: -0.31,
    fontWeight: 'bold',
  },
  label__uppercase: {
    ...labelBase,
    textTransform: 'uppercase',
  },
};
