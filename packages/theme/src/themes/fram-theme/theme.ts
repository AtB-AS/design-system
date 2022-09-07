import {ContrastColor, TextColorType, Themes} from '../../theme';
import {borderRadius, borderWidth, iconSizes, spacings} from '../../sizes';

export const textColors = {
  light: '#FFFFFF',
  dark: '#000000',
};

const contrastColor = (
  background: string,
  textColorType: TextColorType = 'dark',
): ContrastColor => {
  return {
    background,
    text: textColors[textColorType],
  };
};

export const baseColors = {
  // gray
  gray_0: contrastColor('#FFFFFF', 'dark'),
  gray_50: contrastColor('#F1F2F2', 'dark'),
  gray_100: contrastColor('#E3E5E6', 'dark'),
  gray_150: contrastColor('#D5D7D9', 'dark'),
  gray_300: contrastColor('#A9AEB1', 'dark'),
  gray_600: contrastColor('#555E65', 'light'),
  gray_700: contrastColor('#37424A', 'light'),
  gray_800: contrastColor('#2B343A', 'light'),
  gray_850: contrastColor('#242B30', 'light'),
  gray_1000: contrastColor('#000000', 'light'),

  // green
  green_100: contrastColor('#82B962', 'dark'),

  // blue
  blue_200: contrastColor('#A6D1D9', 'dark'),
  blue_300: contrastColor('#007FBA', 'light'),
  blue_400: contrastColor('#005685', 'light'),

  // cyan
  cyan_100: contrastColor('#CDE9E3', 'dark'),
  cyan_200: contrastColor('#0D6569', 'light'),
  cyan_300: contrastColor('#0b585c', 'light'),

  // burgundy
  burgundy_100: contrastColor('#551125', 'light'),

  // orange
  orange_100: contrastColor('#F15629', 'light'),

  // yellow
  yellow_100: contrastColor('#F0E991', 'dark'),
  yellow_200: contrastColor('#FBDC00', 'dark'),
};

export const colors = {
  white: baseColors.gray_0.background,
  black: baseColors.gray_1000.background,
  text: {
    light: baseColors.gray_0.background,
    dark: baseColors.gray_1000.background,
  },
};

export const backgrounds = {
  light: {
    level0: baseColors.gray_0,
    level1: baseColors.gray_50,
    level2: baseColors.gray_100,
    level3: baseColors.gray_150,
  },
  dark: {
    level0: baseColors.gray_1000,
    level1: baseColors.gray_850,
    level2: baseColors.gray_700,
    level3: baseColors.gray_600,
  },
};

const themes: Themes = {
  light: {
    spacings: spacings,
    interactive: {
      interactive_0: {
        default: baseColors.cyan_200,
        hover: baseColors.cyan_300,
        active: baseColors.cyan_300,
        disabled: baseColors.gray_100,
        outline: baseColors.cyan_300,
      },
      interactive_1: {
        default: baseColors.gray_0,
        hover: baseColors.blue_200,
        active: baseColors.blue_200,
        disabled: baseColors.gray_0,
        outline: baseColors.blue_300,
      },
      interactive_2: {
        default: baseColors.gray_0,
        hover: baseColors.blue_200,
        active: baseColors.blue_200,
        disabled: baseColors.gray_0,
        outline: baseColors.blue_300,
      },
      interactive_3: {
        default: contrastColor('#FFFFFF', 'dark'),
        hover: contrastColor('#FFFFFF', 'dark'),
        active: contrastColor('#FFFFFF', 'dark'),
        disabled: contrastColor('#FFFFFF', 'dark'),
        outline: contrastColor('#FFFFFF', 'dark'),
      },
      interactive_destructive: {
        default: contrastColor('#FFFFFF', 'dark'),
        hover: contrastColor('#FFFFFF', 'dark'),
        active: contrastColor('#FFFFFF', 'dark'),
        disabled: contrastColor('#FFFFFF', 'dark'),
        outline: contrastColor('#FFFFFF', 'dark'),
      },
    },
    static: {
      background: {
        background_0: baseColors.gray_0,
        background_1: baseColors.gray_50,
        background_2: baseColors.gray_100,
        background_3: baseColors.gray_150,
        background_accent_0: baseColors.gray_700,
        background_accent_1: baseColors.gray_600,
        background_accent_2: baseColors.cyan_100,
        background_accent_3: baseColors.cyan_200,
        background_accent_4: baseColors.yellow_100,
        background_accent_5: baseColors.blue_200,
      },
      transport: {
        transport_city: baseColors.green_100,
        transport_region: baseColors.blue_400,
        transport_boat: baseColors.blue_300,
        transport_train: baseColors.burgundy_100,
        transport_airport: baseColors.orange_100,
        transport_plane: baseColors.orange_100,
        transport_other: baseColors.gray_600,
      },
      status: {
        valid: baseColors.green_100,
        info: baseColors.blue_400,
        warning: baseColors.yellow_200,
        error: baseColors.orange_100,
      },
    },

    text: {
      colors: {
        primary: baseColors.gray_1000.background,
        secondary: baseColors.gray_600.background,
        disabled: baseColors.gray_300.background,
      },
    },
    border: {
      primary: baseColors.gray_50.background, // Not defined in color scheme
      secondary: colors.text.dark, // Not defined in color scheme
      focus: baseColors.blue_400.background, // Not defined in color scheme
      radius: borderRadius,
      width: borderWidth,
    },
    icon: {
      size: iconSizes,
    },
  },
  dark: {
    spacings: spacings,
    interactive: {
      interactive_0: {
        default: baseColors.cyan_200,
        hover: baseColors.cyan_300,
        active: baseColors.cyan_300,
        disabled: baseColors.gray_100,
        outline: baseColors.cyan_300,
      },
      interactive_1: {
        default: baseColors.gray_1000,
        hover: baseColors.gray_800,
        active: baseColors.blue_400,
        disabled: baseColors.gray_1000,
        outline: baseColors.blue_400,
      },
      interactive_2: {
        default: baseColors.gray_1000,
        hover: baseColors.gray_800,
        active: baseColors.blue_400,
        disabled: baseColors.gray_1000,
        outline: baseColors.blue_400,
      },
      interactive_3: {
        default: contrastColor('#FFFFFF', 'dark'),
        hover: contrastColor('#FFFFFF', 'dark'),
        active: contrastColor('#FFFFFF', 'dark'),
        disabled: contrastColor('#FFFFFF', 'dark'),
        outline: contrastColor('#FFFFFF', 'dark'),
      },
      interactive_destructive: {
        default: contrastColor('#FFFFFF', 'dark'),
        hover: contrastColor('#FFFFFF', 'dark'),
        active: contrastColor('#FFFFFF', 'dark'),
        disabled: contrastColor('#FFFFFF', 'dark'),
        outline: contrastColor('#FFFFFF', 'dark'),
      },
    },
    static: {
      background: {
        background_0: baseColors.gray_1000,
        background_1: baseColors.gray_850,
        background_2: baseColors.gray_700,
        background_3: baseColors.gray_600,
        background_accent_0: baseColors.gray_700,
        background_accent_1: baseColors.gray_600,
        background_accent_2: baseColors.cyan_100,
        background_accent_3: baseColors.cyan_200,
        background_accent_4: baseColors.yellow_100,
        background_accent_5: baseColors.gray_800,
      },

      transport: {
        transport_city: baseColors.green_100,
        transport_region: baseColors.blue_400,
        transport_boat: baseColors.blue_300,
        transport_train: baseColors.burgundy_100,
        transport_airport: baseColors.orange_100,
        transport_plane: baseColors.orange_100,
        transport_other: baseColors.gray_600,
      },
      status: {
        valid: baseColors.green_100,
        info: baseColors.blue_400,
        warning: baseColors.yellow_200,
        error: baseColors.orange_100,
      },
    },
    text: {
      colors: {
        primary: baseColors.gray_0.background,
        secondary: baseColors.gray_50.background,
        disabled: baseColors.gray_300.background,
      },
    },
    border: {
      primary: baseColors.gray_850.background,
      secondary: baseColors.gray_0.background,
      focus: baseColors.cyan_100.background, // Not defined in color scheme
      radius: borderRadius,
      width: borderWidth,
    },
    icon: {
      size: iconSizes,
    },
  },
};

export default themes;
