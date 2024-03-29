import {ContrastColor, TextColorType, Themes} from '../../theme';
import {borderRadius, borderWidth, iconSizes, spacings} from '../../sizes';

const textColors = {
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

const themes: Themes = {
  light: {
    spacings: spacings,
    interactive: {
      interactive_0: {
        default: contrastColor('#005685', 'light'),
        hover: contrastColor('#007FBA', 'light'),
        active: contrastColor('#CDE9E3', 'dark'),
        disabled: contrastColor('#D6D7DB', 'dark'),
        outline: contrastColor('#0D6569', 'light'),
        destructive: contrastColor('#A40F21', 'light'),
      },
      interactive_1: {
        default: contrastColor('#012C44', 'light'),
        hover: contrastColor('#00395A', 'light'),
        active: contrastColor('#001622', 'light'),
        disabled: contrastColor('#D6D7DB', 'dark'),
        outline: contrastColor('#005685', 'light'),
        destructive: contrastColor('#A40F21', 'light'),
      },
      interactive_2: {
        default: contrastColor('#FFFFFF', 'dark'),
        hover: contrastColor('#E5F3F4', 'dark'),
        active: contrastColor('#CDE9E3', 'dark'),
        disabled: contrastColor('#D6D7DB', 'dark'),
        outline: contrastColor('#005685', 'light'),
        destructive: contrastColor('#A40F21', 'light'),
      },
      interactive_3: {
        default: contrastColor('#82B962', 'dark'),
        hover: contrastColor('#B8D4A8', 'dark'),
        active: contrastColor('#284320', 'light'),
        disabled: contrastColor('#D4E5D2', 'dark'),
        outline: contrastColor('#005685', 'light'),
        destructive: contrastColor('#A40F21', 'light'),
      },
      interactive_destructive: {
        default: contrastColor('#F18176', 'dark'),
        hover: contrastColor('#EFB8B2', 'dark'),
        active: contrastColor('#551125', 'light'),
        disabled: contrastColor('#F4D8D5', 'dark'),
        outline: contrastColor('#005685', 'light'),
        destructive: contrastColor('#A40F21', 'light'),
      },
    },
    transport: {
      transport_city: {
        primary: contrastColor('#82B962', 'dark'),
        secondary: contrastColor('#82B962', 'dark'),
      },
      transport_region: {
        primary: contrastColor('#005685', 'light'),
        secondary: contrastColor('#005685', 'light'),
      },
      transport_airport_express: {
        primary: contrastColor('#005685', 'light'),
        secondary: contrastColor('#005685', 'light'),
      },
      transport_boat: {
        primary: contrastColor('#007FBA', 'light'),
        secondary: contrastColor('#007FBA', 'light'),
      },
      transport_train: {
        primary: contrastColor('#551125', 'light'),
        secondary: contrastColor('#551125', 'light'),
      },
      transport_airport: {
        primary: contrastColor('#F15629', 'light'),
        secondary: contrastColor('#F15629', 'light'),
      },
      transport_plane: {
        primary: contrastColor('#F15659', 'light'),
        secondary: contrastColor('#F15659', 'light'),
      },
      transport_flexible: {
        primary: contrastColor('#F15659', 'light'),
        secondary: contrastColor('#F15659', 'light'),
      },
      transport_bike: {
        primary: contrastColor('#7D0D31', 'light'),
        secondary: contrastColor('#7D0D31', 'light'),
      },
      transport_scooter: {
        primary: contrastColor('#464A00', 'light'),
        secondary: contrastColor('#464A00', 'light'),
      },
      transport_car: {
        primary: contrastColor('#6F5468', 'light'),
        secondary: contrastColor('#6F5468', 'light'),
      },
      transport_other: {
        primary: contrastColor('#555E65', 'light'),
        secondary: contrastColor('#555E65', 'light'),
      },
    },
    static: {
      background: {
        background_0: contrastColor('#FFFFFF', 'dark'),
        background_1: contrastColor('#EFF5F8', 'dark'),
        background_2: contrastColor('#DFE4E7', 'dark'),
        background_3: contrastColor('#E4E4E4', 'dark'),
        background_accent_0: contrastColor('#007AB5', 'light'),
        background_accent_1: contrastColor('#005685', 'light'),
        background_accent_2: contrastColor('#CDE9E3', 'dark'),
        background_accent_3: contrastColor('#0D6569', 'light'),
        background_accent_4: contrastColor('#ECE58D', 'dark'),
        background_accent_5: contrastColor('#007AB5', 'light'),
      },
      status: {
        valid: contrastColor('#82B962', 'dark'),
        info: contrastColor('#8DD4CD', 'dark'),
        warning: contrastColor('#F8DA00', 'dark'),
        error: contrastColor('#F15629', 'light'),
      },
      zone_selection: {
        from: contrastColor('#82B962', 'dark'),
        to: contrastColor('#005685', 'light'),
      },
    },

    text: {
      colors: {
        primary: textColors.dark,
        secondary: '#555E65',
        disabled: '#A9AEB1',
      },
    },
    border: {
      primary: '#E7E8E9',
      secondary: '#000000',
      focus: '#005685',
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
        default: contrastColor('#007FBA', 'light'),
        hover: contrastColor('#005685', 'light'),
        active: contrastColor('#CDE9E3', 'dark'),
        disabled: contrastColor('#D6D7DB', 'dark'),
        outline: contrastColor('#0D6569', 'light'),
        destructive: contrastColor('#EF7684', 'dark'),
      },
      interactive_1: {
        default: contrastColor('#012C44', 'light'),
        hover: contrastColor('#00395A', 'light'),
        active: contrastColor('#001622', 'light'),
        disabled: contrastColor('#D6D7DB', 'dark'),
        outline: contrastColor('#005685', 'light'),
        destructive: contrastColor('#EF7684', 'dark'),
      },
      interactive_2: {
        default: contrastColor('#001622', 'light'),
        hover: contrastColor('#0D6569', 'light'),
        active: contrastColor('#015959', 'light'),
        disabled: contrastColor('#D6D7DB', 'dark'),
        outline: contrastColor('#CDE9E3', 'dark'),
        destructive: contrastColor('#EF7684', 'dark'),
      },
      interactive_3: {
        default: contrastColor('#82B962', 'dark'),
        hover: contrastColor('#B8D4A8', 'dark'),
        active: contrastColor('#284320', 'light'),
        disabled: contrastColor('#D4E5D2', 'dark'),
        outline: contrastColor('#005685', 'light'),
        destructive: contrastColor('#EF7684', 'dark'),
      },
      interactive_destructive: {
        default: contrastColor('#F18176', 'dark'),
        hover: contrastColor('#EFB8B2', 'dark'),
        active: contrastColor('#551125', 'light'),
        disabled: contrastColor('#F4D8D5', 'dark'),
        outline: contrastColor('#005685', 'light'),
        destructive: contrastColor('#EF7684', 'dark'),
      },
    },
    transport: {
      transport_city: {
        primary: contrastColor('#82B962', 'dark'),
        secondary: contrastColor('#82B962', 'dark'),
      },
      transport_region: {
        primary: contrastColor('#005685', 'light'),
        secondary: contrastColor('#005685', 'light'),
      },
      transport_airport_express: {
        primary: contrastColor('#005685', 'light'),
        secondary: contrastColor('#005685', 'light'),
      },
      transport_boat: {
        primary: contrastColor('#007FBA', 'light'),
        secondary: contrastColor('#007FBA', 'light'),
      },
      transport_train: {
        primary: contrastColor('#551125', 'light'),
        secondary: contrastColor('#551125', 'light'),
      },
      transport_airport: {
        primary: contrastColor('#F15659', 'light'),
        secondary: contrastColor('#F15659', 'light'),
      },
      transport_plane: {
        primary: contrastColor('#F15659', 'light'),
        secondary: contrastColor('#F15659', 'light'),
      },
      transport_flexible: {
        primary: contrastColor('#F15659', 'light'),
        secondary: contrastColor('#F15659', 'light'),
      },
      transport_bike: {
        primary: contrastColor('#A51140', 'light'),
        secondary: contrastColor('#A51140', 'light'),
      },
      transport_scooter: {
        primary: contrastColor('#5B6100', 'light'),
        secondary: contrastColor('#5B6100', 'light'),
      },
      transport_car: {
        primary: contrastColor('#6F5468', 'light'),
        secondary: contrastColor('#6F5468', 'light'),
      },
      transport_other: {
        primary: contrastColor('#555E65', 'light'),
        secondary: contrastColor('#555E65', 'light'),
      },
    },
    static: {
      background: {
        background_0: contrastColor('#001622', 'light'),
        background_1: contrastColor('#00314E', 'light'),
        background_2: contrastColor('#00314E', 'light'),
        background_3: contrastColor('#001622', 'light'),
        background_accent_0: contrastColor('#005685', 'light'),
        background_accent_1: contrastColor('#005685', 'light'),
        background_accent_2: contrastColor('#CDE9E3', 'dark'),
        background_accent_3: contrastColor('#0D6569', 'light'),
        background_accent_4: contrastColor('#ECE58D', 'dark'),
        background_accent_5: contrastColor('#005685', 'light'),
      },

      status: {
        valid: contrastColor('#82B962', 'dark'),
        info: contrastColor('#8DD4CD', 'dark'),
        warning: contrastColor('#F8DA00', 'dark'),
        error: contrastColor('#F15629', 'light'),
      },
      zone_selection: {
        from: contrastColor('#82B962', 'dark'),
        to: contrastColor('#005685', 'light'),
      },
    },
    text: {
      colors: {
        primary: textColors.light,
        secondary: '#F1F2F2',
        disabled: '#A9AEB1',
      },
    },
    border: {
      primary: '#E7E8E9',
      secondary: '#000000',
      focus: '#005685',
      radius: borderRadius,
      width: borderWidth,
    },
    icon: {
      size: iconSizes,
    },
  },
};

export default themes;
