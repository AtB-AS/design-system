import merge from 'ts-deepmerge';
import { BorderRadius, BorderWidth, IconSizes, Spacing} from './sizes';
import {ConfigurationOverride, overrideConfig} from './utils/override-config';
import {
  AtBThemes,
  NfkThemes,
  FRAMThemes,
  TromsThemes,
  InnlandetThemes,
} from './themes';
export type Themes = {
  Light: Theme;
  Dark: Theme;
};
export type Mode = keyof Themes;

export type TextColor = 'Primary' | 'Secondary' | 'Disabled';

export type TextColorType = 'Dark' | 'Light';

export type ContrastColor = {
  Background: string;
  Foreground: {
    Primary: string;
    Secondary: string;
    Disabled: string;
  };
};
export type TransportColor = {
  Primary: ContrastColor;
  Secondary: ContrastColor;
};

export type StatusColor = {
  Primary: ContrastColor;
  Secondary: ContrastColor;
};

export type InteractiveColor = {
  Default: ContrastColor;
  Hover: ContrastColor;
  Active: ContrastColor;
  Disabled: ContrastColor;
  Outline: ContrastColor;
  Destructive: ContrastColor;
};

// The colors can be changed, but should follow standard practice as commented:
export enum GeofencingZoneCodes {
  Allowed = 'Allowed', // blue
  Slow = 'Slow', // yellow
  NoParking = 'NoParking', // red
  NoEntry = 'NoEntry', // dark/black
}

export type GeofencingZoneKeys = keyof typeof GeofencingZoneCodes;

export type GeofencingZoneStyle = {
  Color: ContrastColor;
  FillOpacity: number;
  StrokeOpacity: number;
  LayerIndexWeight: number;
};

export type GeofencingZoneStyles = {
  [GZKey in GeofencingZoneKeys]: GeofencingZoneStyle;
};

export interface Theme {
  Spacing: typeof Spacing;

  Interactive: {
    0: InteractiveColor;
    1: InteractiveColor;
    2: InteractiveColor;
    3: InteractiveColor;
    Destructive: InteractiveColor;
  };
  Transport: {
    City: TransportColor;
    Region: TransportColor;
    AirportExpress: TransportColor;
    Boat: TransportColor;
    Train: TransportColor;
    Airport: TransportColor;
    Plane: TransportColor;
    Flexible: TransportColor;
    Scooter: TransportColor;
    Bike: TransportColor;
    Car: TransportColor;
    Other: TransportColor;
  };

  Status: {
    Success: StatusColor;
    info: StatusColor;
    warning: StatusColor;
    error: StatusColor;
  };

  Background: {
    0: ContrastColor;
    1: ContrastColor;
    2: ContrastColor;
    3: ContrastColor;
    Accent: {
      0: ContrastColor;
      1: ContrastColor;
      2: ContrastColor;
      3: ContrastColor;
      4: ContrastColor;
      5: ContrastColor;
    }
  };

  Zone: {
    From: ContrastColor;
    To: ContrastColor;
  };

  Border: {
    primary: string;
    secondary: string;
    focus: string;
    Radius: typeof BorderRadius;
    Width: typeof BorderWidth;
  };
  Icon: {
    Size: typeof IconSizes;
  };
  GeofencingZones: GeofencingZoneStyles;
}

export type Statuses = keyof Theme['Status'];

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
    case ThemeVariant.Nfk:
      return NfkThemes;
    case ThemeVariant.FRAM:
      return FRAMThemes;
    case ThemeVariant.Troms:
      return TromsThemes;
    case ThemeVariant.Innlandet:
      return InnlandetThemes;
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
export function createExtendedThemes<T extends Partial<Theme>>(
  themes: Themes,
  extension: { Light: T; Dark: T },
): {
  Light: Themes['Light'] & T,
  Dark: Themes['Dark'] & T,
} {
  return {
    Light: merge(themes.Light, extension.Light) as Theme & T,
    Dark: merge(themes.Dark, extension.Dark) as Theme & T,
  };
}
