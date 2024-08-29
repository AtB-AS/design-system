import merge from 'ts-deepmerge';
import { ConfigurationOverride, overrideConfig } from './utils/override-config';
import {
  AtBThemes,
  // NfkThemes,
  // FRAMThemes,
  // TromsThemes,
  // InnlandetThemes,
} from './themes';
export type Themes = {
  light: Theme;
  dark: Theme;
};
export type Mode = keyof Themes;

export type TextColorType = 'dark' | 'light';

export type ContrastColor = {
  background: string;
  foreground: {
    primary: string;
    secondary: string;
    disabled: string;
  };
};

export type TextColor = keyof ContrastColor["foreground"];

export type TransportColor = {
  primary: ContrastColor;
  secondary: ContrastColor;
};

export type StatusColor = {
  primary: ContrastColor;
  secondary: ContrastColor;
};

export type InteractiveColor = {
  default: ContrastColor;
  hover: ContrastColor;
  active: ContrastColor;
  disabled: ContrastColor;
  outline: ContrastColor;
  destructive: ContrastColor;
};

// The colors can be changed, but should follow standard practice as commented:
export enum GeofencingZoneCodes {
  allowed = 'Allowed', // blue
  slow = 'Slow', // yellow
  noParking = 'NoParking', // red
  noEntry = 'NoEntry', // dark/black
}

export type GeofencingZoneKeys = keyof typeof GeofencingZoneCodes;

export type GeofencingZoneStyle = {
  color: ContrastColor;
  fillOpacity: number;
  strokeOpacity: number;
  layerIndexWeight: number;
};

export type GeofencingZoneStyles = {
  [GZKey in GeofencingZoneKeys]: GeofencingZoneStyle;
};

export interface Theme {
  color: {
    foreground: {
      dark: ContrastColor['foreground'];
      light: ContrastColor['foreground'];
      dynamic: ContrastColor['foreground'];
      inverse: ContrastColor['foreground'];
    };

    interactive: {
      0: InteractiveColor;
      1: InteractiveColor;
      2: InteractiveColor;
      3: InteractiveColor;
      destructive: InteractiveColor;
    };

    transport: {
      city: TransportColor;
      region: TransportColor;
      airportExpress: TransportColor;
      boat: TransportColor;
      train: TransportColor;
      flexible: TransportColor;
      scooter: TransportColor;
      bike: TransportColor;
      car: TransportColor;
      other: TransportColor;
    };

    status: {
      success: StatusColor;
      info: StatusColor;
      warning: StatusColor;
      error: StatusColor;
    };

    background: {
      neutral: {
        0: ContrastColor;
        1: ContrastColor;
        2: ContrastColor;
        3: ContrastColor;
      };
      accent: {
        0: ContrastColor;
        1: ContrastColor;
        2: ContrastColor;
        3: ContrastColor;
        4: ContrastColor;
        5: ContrastColor;
      };
    };

    zone: {
      from: ContrastColor;
      to: ContrastColor;
    };

    geofencingZone: GeofencingZoneStyles;
  };

  border: {
    radius: {
      small: number;
      medium: number;
      circle: number;
    };
    width: {
      slim: number;
      medium: number;
    };
  };

  icon: {
    size: {
      xSmall: number;
      small: number;
      medium: number;
      large: number;
    }
  };

  spacing: {
    xSmall: number;
    small: number;
    medium: number;
    large: number;
    xLarge: number;
  };

  typography: {
    ios: {
      font: string;
      number: number;
    };

    android: {
      font: string;
      number: number;
    };

    web: {
      font: string;
      number: number;
    };
  };
};

export type Statuses = keyof Theme['color']['status'];

export enum ThemeVariant {
  AtB,
  Nfk,
  FRAM,
  Troms,
  Innlandet,
}

export function createThemesFor(themeVariant: ThemeVariant) {
  switch (themeVariant) {
    case ThemeVariant.AtB:
      return AtBThemes;
    // case ThemeVariant.Nfk:
    //   return NfkThemes;
    // case ThemeVariant.FRAM:
    //   return FRAMThemes;
    // case ThemeVariant.Troms:
    //   return TromsThemes;
    // case ThemeVariant.Innlandet:
    //   return InnlandetThemes;
    default:
      throw Error('A valid ThemeVariant must be provided');
  }
}

/**
 * Create new themes (light/dark) with optinally overriden defaults.
 *
 * @example extending nested features
 * ```ts
 * const themes = createThemes({
 *   light: {
 *     spacings: {
 *       medium: 20,
 *     },
 *   },
 * });
 *
 * themes.dark.spacings.medium;
 * //=> 20
 * ```
 *
 * @param overrides - Properties to override base themes with, on `Theme` level
 * @returns themes
 */
export function createThemes(
  themes: Themes,
  overrides?: ConfigurationOverride<Themes>,
): Themes {
  if (!overrides) return themes;
  return overrideConfig(themes, overrides);
}

/**
 * Use Theme as base and extend with new properties. Properties
 * can be nested and will be deep merged.
 *
 * @example extending nested features
 * ```ts
 * type FooExtension = {
 *   statusBarStyle: 'dark' | 'light';
 * }
 * const _themes = createExtendedThemes<FooExtension>({
 *   light: {statusBarStyle: 'dark'},
 *   dark: {statusBarStyle: 'light'}
 * });
 *
 * _themes.dark.statusBarStyle;
 * //=> (property) statusBarStyle: "dark" | "light"
 * ```
 *
 * @param extension - Object to extend original theme. Can be nested with same keys
 * @returns new deep merged intersection themes
 */
export function createExtendedThemes<T extends {}>(
  themes: Themes,
  extension: { light: T; dark: T },
): {
  light: Themes['light'] & T,
  dark: Themes['dark'] & T,
} {
  return {
    light: merge(themes.light, extension.light) as Themes['light'] & T,
    dark: merge(themes.dark, extension.dark) as Themes['dark'] & T,
  };
}
