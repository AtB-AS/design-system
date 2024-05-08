import {ContrastColor, TextColorType, Themes} from '../../theme';
import {borderRadius, borderWidth, iconSizes, spacings} from '../../sizes';

export const textColors = {
  light: '#FFFFFF',
  dark: '#000000',
  // secondary: '#00000060',
  // disabled: '#00000020',
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
  gray_100: contrastColor('#E9EBEC', 'dark'),
  gray_150: contrastColor('#D5D7D9', 'dark'),
  gray_200: contrastColor('#D2D5D7', 'dark'),
  gray_300: contrastColor('#6E777D', 'dark'),
  gray_400: contrastColor('#636B71', 'dark'),
  gray_500: contrastColor('#585F64', 'dark'),
  gray_600: contrastColor('#53595E', 'light'),
  gray_700: contrastColor('#42474B', 'light'),
  gray_800: contrastColor('#313638', 'light'),
  gray_850: contrastColor('#272A2C', 'light'),
  gray_900: contrastColor('#242B30', 'light'),
  gray_950: contrastColor('#101315', 'light'),
  gray_1000: contrastColor('#000000', 'light'),

  // green
  green_100: contrastColor('#F3FFEE', 'dark'),
  green_200: contrastColor('#E7FFDD', 'dark'),
  green_300: contrastColor('#B2FF90', 'dark'),
  green_400: contrastColor('#A0E682', 'dark'),
  green_500: contrastColor('#8ECC73', 'dark'),
  green_600: contrastColor('#86BF6C', 'light'),
  green_700: contrastColor('#6B9956', 'light'),
  green_800: contrastColor('#507341', 'light'),
  green_900: contrastColor('#3E5932', 'light'),

  // blue
  blue_50: contrastColor('#E6E9F9', 'dark'),
  blue_100: contrastColor('#b0baec', 'dark'),
  blue_200: contrastColor('#8a98e3', 'dark'),
  blue_300: contrastColor('#546ad6', 'dark'),
  blue_400: contrastColor('#334dce', 'dark'),
  blue_500: contrastColor('#0020c2', 'light'),
  blue_600: contrastColor('#001db1', 'light'),
  blue_700: contrastColor('#00178a', 'light'),
  blue_800: contrastColor('#00126b', 'light'),
  blue_900: contrastColor('#000d51', 'light'),

  // cyan
  cyan_100: contrastColor('#BFEDF1', 'dark'),
  cyan_200: contrastColor('#71D6E0', 'dark'),
  cyan_300: contrastColor('#62BAC3', 'dark'),
  cyan_400: contrastColor('#539CA4', 'dark'),
  cyan_500: contrastColor('#448086', 'dark'),
  cyan_600: contrastColor('#356569', 'light'),
  cyan_700: contrastColor('#294D51', 'light'),
  cyan_800: contrastColor('#1D383A', 'light'),
  cyan_900: contrastColor('#122224', 'light'),

  // burgundy
  burgundy_50: contrastColor('#fdecf6', 'dark'),
  burgundy_100: contrastColor('#fce3f2', 'dark'),
  burgundy_200: contrastColor('#f9c5e3', 'dark'),
  burgundy_300: contrastColor('#ec43a6', 'dark'),
  burgundy_400: contrastColor('#d43c95', 'dark'),
  burgundy_500: contrastColor('#bd3685', 'dark'),
  burgundy_600: contrastColor('#b1327d', 'light'),
  burgundy_700: contrastColor('#8e2864', 'light'),
  burgundy_800: contrastColor('#6a1e4b', 'light'),
  burgundy_900: contrastColor('#53173a', 'light'),

  // orange
  orange_50: contrastColor('#fdeee7', 'dark'),
  orange_100: contrastColor('#f8ccb5', 'dark'),
  orange_200: contrastColor('#f4b392', 'dark'),
  orange_300: contrastColor('#f09060', 'dark'),
  orange_400: contrastColor('#E85912', 'dark'),
  orange_500: contrastColor('#d24600', 'dark'),
  orange_600: contrastColor('#bf4000', 'light'),
  orange_700: contrastColor('#953200', 'light'),
  orange_800: contrastColor('#742700', 'light'),
  orange_900: contrastColor('#4F1E06', 'light'),

  // yellow
  yellow_50: contrastColor('#fffde9', 'dark'),
  yellow_100: contrastColor('#fffcde', 'dark'),
  yellow_200: contrastColor('#fff8bb', 'dark'),
  yellow_300: contrastColor('#ffe924', 'dark'),
  yellow_400: contrastColor('#e6d220', 'dark'),
  yellow_500: contrastColor('#ccba1d', 'dark'),
  yellow_600: contrastColor('#bfaf1b', 'light'),
  yellow_700: contrastColor('#998c16', 'light'),
  yellow_800: contrastColor('#736910', 'light'),
  yellow_900: contrastColor('#59520d', 'light'),

  // red
  red_50: contrastColor('#fae8e8', 'dark'),
  red_100: contrastColor('#eeb7b7', 'dark'),
  red_200: contrastColor('#e69495', 'dark'),
  red_300: contrastColor('#db6364', 'dark'),
  red_400: contrastColor('#d44546', 'dark'),
  red_500: contrastColor('#c91618', 'dark'),
  red_600: contrastColor('#b71416', 'light'),
  red_700: contrastColor('#8f1011', 'light'),
  red_800: contrastColor('#6f0c0d', 'light'),
  red_900: contrastColor('#54090a', 'light'),
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
        default: baseColors.blue_500,
        hover: baseColors.blue_600,
        active: baseColors.blue_200,
        disabled: baseColors.blue_100,
        outline: baseColors.cyan_200,
        destructive: baseColors.red_600,
      },
      interactive_1: {
        default: baseColors.gray_600,
        hover: baseColors.gray_500,
        active: baseColors.gray_900,
        disabled: baseColors.gray_200,
        outline: baseColors.blue_500,
        destructive: baseColors.red_600,
      },
      interactive_2: {
        default: baseColors.gray_0,
        hover: baseColors.blue_100,
        active: baseColors.blue_200,
        disabled: baseColors.gray_0,
        outline: baseColors.blue_500,
        destructive: baseColors.red_600,
      },
      interactive_3: {
        default: baseColors.blue_100,
        hover: baseColors.blue_200,
        active: baseColors.blue_200,
        disabled: baseColors.gray_100,
        outline: baseColors.blue_700,
        destructive: baseColors.red_600,
      },
      interactive_destructive: {
        default: baseColors.red_600,
        hover: baseColors.red_500,
        active: baseColors.red_900,
        disabled: baseColors.red_100,
        outline: baseColors.blue_500,
        destructive: baseColors.red_600,
      },
    },
    transport: {
      transport_city: {
        primary: baseColors.green_300,
        secondary: baseColors.green_400,
      },
      transport_region: {
        primary: baseColors.blue_500,
        secondary: baseColors.blue_600,
      },
      transport_airport_express: {
        primary: baseColors.red_600,
        secondary: baseColors.red_700,
      },
      transport_boat: {
        primary: baseColors.cyan_200,
        secondary: baseColors.cyan_400,
      },
      transport_train: {
        primary: baseColors.burgundy_800,
        secondary: baseColors.burgundy_900,
      },
      transport_airport: {
        primary: baseColors.orange_500,
        secondary: baseColors.orange_600,
      },
      transport_plane: {
        primary: baseColors.gray_800,
        secondary: baseColors.gray_900,
      },
      transport_flexible: {
        primary: baseColors.orange_500,
        secondary: baseColors.orange_600,
      },
      transport_bike: {
        primary: baseColors.red_700,
        secondary: baseColors.red_800,
      },
      transport_scooter: {
        primary: baseColors.green_700,
        secondary: baseColors.green_800,
      },
      transport_car: {
        primary: baseColors.burgundy_700,
        secondary: baseColors.burgundy_800,
      },
      transport_other: {
        primary: baseColors.gray_600,
        secondary: baseColors.gray_800,
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
        background_accent_2: baseColors.blue_100,
        background_accent_3: baseColors.blue_500,
        background_accent_4: baseColors.green_100,
        background_accent_5: baseColors.blue_200,
      },
      status: {
        valid: baseColors.green_300,
        info: baseColors.cyan_200,
        warning: baseColors.yellow_200,
        error: baseColors.red_600,
      },
      zone_selection: {
        from: baseColors.green_300,
        to: baseColors.cyan_200,
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
      primary: baseColors.gray_50.background,
      secondary: colors.text.dark,
      focus: baseColors.blue_500.background,
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
        default: baseColors.blue_500,
        hover: baseColors.blue_600,
        active: baseColors.blue_200,
        disabled: baseColors.blue_100,
        outline: baseColors.cyan_200,
        destructive: baseColors.red_300,
      },
      interactive_1: {
        default: baseColors.gray_600,
        hover: baseColors.gray_500,
        active: baseColors.gray_900,
        disabled: baseColors.gray_200,
        outline: baseColors.blue_500,
        destructive: baseColors.red_300,
      },
      interactive_2: {
        default: baseColors.gray_1000,
        hover: baseColors.blue_900,
        active: baseColors.blue_700,
        disabled: baseColors.gray_1000,
        outline: baseColors.blue_500,
        destructive: baseColors.red_300,
      },
      interactive_3: {
        default: baseColors.blue_700,
        hover: baseColors.blue_800,
        active: baseColors.blue_800,
        disabled: baseColors.gray_600,
        outline: baseColors.blue_100,
        destructive: baseColors.red_600,
      },
      interactive_destructive: {
        default: baseColors.red_600,
        hover: baseColors.red_500,
        active: baseColors.red_900,
        disabled: baseColors.red_100,
        outline: baseColors.blue_500,
        destructive: baseColors.red_300,
      },
    },
    transport: {
      transport_city: {
        primary: baseColors.green_300,
        secondary: baseColors.green_400,
      },
      transport_region: {
        primary: baseColors.blue_500,
        secondary: baseColors.blue_600,
      },
      transport_airport_express: {
        primary: baseColors.red_600,
        secondary: baseColors.red_700,
      },
      transport_boat: {
        primary: baseColors.cyan_200,
        secondary: baseColors.cyan_400,
      },
      transport_train: {
        primary: baseColors.burgundy_800,
        secondary: baseColors.burgundy_900,
      },
      transport_airport: {
        primary: baseColors.orange_500,
        secondary: baseColors.orange_600,
      },
      transport_plane: {
        primary: baseColors.gray_800,
        secondary: baseColors.gray_900,
      },
      transport_flexible: {
        primary: baseColors.orange_500,
        secondary: baseColors.orange_600,
      },
      transport_bike: {
        primary: baseColors.red_600,
        secondary: baseColors.red_800,
      },
      transport_scooter: {
        primary: baseColors.green_600,
        secondary: baseColors.green_800,
      },
      transport_car: {
        primary: baseColors.burgundy_600,
        secondary: baseColors.burgundy_800,
      },
      transport_other: {
        primary: baseColors.gray_200,
        secondary: baseColors.gray_400,
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
        background_accent_2: baseColors.blue_100,
        background_accent_3: baseColors.blue_500,
        background_accent_4: baseColors.green_100,
        background_accent_5: baseColors.gray_800,
      },

      status: {
        valid: baseColors.green_300,
        info: baseColors.cyan_200,
        warning: baseColors.yellow_200,
        error: baseColors.red_600,
      },
      zone_selection: {
        from: baseColors.green_300,
        to: baseColors.cyan_200,
      },
    },
    text: {
      colors: {
        primary: baseColors.gray_0.background,
        secondary: baseColors.gray_100.background,
        disabled: baseColors.gray_300.background,
      },
    },
    border: {
      primary: baseColors.gray_850.background,
      secondary: baseColors.gray_0.background,
      focus: baseColors.cyan_500.background,
      radius: borderRadius,
      width: borderWidth,
    },
    icon: {
      size: iconSizes,
    },
  },
};

export default themes;
