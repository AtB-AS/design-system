import merge from 'ts-deepmerge';
import {ConfigurationOverride, overrideConfig} from './utils/override-config';
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

export type TextColor = 'primary' | 'secondary' | 'disabled';

export type TextColorType = 'dark' | 'light';

export type ContrastColor = {
  background: string;
  text: string;
};
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
  spacings: {
    xSmall: number;
    small: number;
    medium: number;
    large: number;
    xLarge: number;
  };

  interactive: {
    interactive_0: InteractiveColor;
    interactive_1: InteractiveColor;
    interactive_2: InteractiveColor;
    interactive_3: InteractiveColor;
    interactive_destructive: InteractiveColor;
  };
  transport: {
    transport_city: TransportColor;
    transport_region: TransportColor;
    transport_airportExpress: TransportColor;
    transport_boat: TransportColor;
    transport_train: TransportColor;
    transport_flexible: TransportColor;
    transport_scooter: TransportColor;
    transport_bike: TransportColor;
    transport_car: TransportColor;
    transport_other: TransportColor;
  };

  status: {
    valid: StatusColor;
    info: StatusColor;
    warning: StatusColor;
    error: StatusColor;
  };

  static: {
    background: {
      background_0: ContrastColor;
      background_1: ContrastColor;
      background_2: ContrastColor;
      background_3: ContrastColor;
      background_accent_0: ContrastColor;
      background_accent_1: ContrastColor;
      background_accent_2: ContrastColor;
      background_accent_3: ContrastColor;
      background_accent_4: ContrastColor;
      background_accent_5: ContrastColor;
    };

    zone_selection: {
      from: ContrastColor;
      to: ContrastColor;
    };
  };

  text: {
    colors: {[key in TextColor]: string};
  };

  border: {
    primary: string;
    secondary: string;
    focus: string;
    border: {
      radius: {
        small: number;
        regular: number;
        circle: number;
      };
      width: {
        slim: number;
        medium: number;
      };
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
  geofencingZones: GeofencingZoneStyles;
}

export type Statuses = keyof Theme['status'];

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
