/**
 * Using Style Dictionary, design tokens from the ../tokens folder (exported from Figma Variables) 
 * are parsed into the `theme.ts` file that is bundled in this package.
 * 
 * Mutations of the tokens are necessary to keep the same naming and layout
 * of the `theme.ts` file as before. Suggested modifications in the future are marked with `TODO`.
 */
import * as path from "path"
import { Config, TransformedToken, Dictionary } from "style-dictionary"
import { useBlack } from "../src/utils/tokens";
import { ContrastColor } from "../src";

const StyleDictionary = require('style-dictionary');

const srcDir = path.join(__dirname, '..', 'src', 'tokens');
const outDir = path.join(__dirname, '..', 'src', 'themes');

type Mode = 'atb' | 'fram' | 'innlandet' | 'nfk' | 'troms'
const modes: Mode[] = ['troms'];

/**
 * Tokens that are not based on Figma variables, but on objects defined in code.
 * 
 * These are for now hardcoded in this array and added to other design tokens.
 * 
 * TODO: Add these tokens in Figma
 */
const ADDITIONAL_TOKENS = (baseColors: TransformedToken[]) =>  [
  {
    name: "light/spacings",
    value: "spacings"
  },
  {
    name: "light/icon/size",
    value: "iconSizes"
  },
  {
    name: "light/border/radius",
    value: "borderRadius"
  },
  {
    name: "light/border/width",
    value: "borderWidth"
  },
  {
    name: "light/border/primary",
    value: baseColors.find(token => token.name === "basecolors/gray_50")?.value.background
  },
  {
    name: "light/border/secondary",
    value: baseColors.find(token => token.name === "basecolors/gray_1000")?.value.background
  },
  {
    name: "light/border/focus",
    value: baseColors.find(token => token.name === "basecolors/blue_500")?.value.background
  },
  {
    name: "dark/spacings",
    value: "spacings"
  },
  {
    name: "dark/icon/size",
    value: "iconSizes"
  },
  {
    name: "dark/border/radius",
    value: "borderRadius"
  },
  {
    name: "dark/border/width",
    value: "borderWidth"
  },
  {
    name: "dark/border/primary",
    value: baseColors.find(token => token.name === "basecolors/gray_850")?.value.background
  },
  {
    name: "dark/border/secondary",
    value: baseColors.find(token => token.name === "basecolors/gray_0")?.value.background
  },
  {
    name: "dark/border/focus",
    value: baseColors.find(token => token.name === "basecolors/cyan_500")?.value.background
  },
]

/**
 * Turns the names of the tokens (e.g., transport/flexible) into a nested JSON structure:
 * 
 * transport: {
 *    flexible: {
 *      ...
 *    }
 * }
 */
function convertToNested(originalDict: TransformedToken[]) {
  const nestedDict: Record<string, TransformedToken | Record<string, TransformedToken>> = {};
  for (const token of originalDict) {
      const pathComponents = token.name.split('/');
      let current = nestedDict;
      for (let i = 0; i < pathComponents.length; i++) {
          const component = pathComponents[i];
          if (i === pathComponents.length - 1) {
              current[component] = token.value;
          } else {
              current[component] = current[component] || {};
              current = current[component];
          }
      }
  }
  return nestedDict;
}

/**
 * Writes the parsed tokens to a file.
 */
StyleDictionary.registerFormat({
  name: 'convention/ts',
  formatter: ({
    dictionary
  }: { dictionary: Dictionary }) => {

    const headers = `// @ts-nocheck\n
import { Themes } from '../../theme';
import { borderRadius, borderWidth, iconSizes, spacings } from '../../sizes';`

    // Exclude base colors, since they should never be used directly in code
    const filteredTokens = dictionary.allTokens.filter((token: TransformedToken) => !token.name.includes("basecolors"))

    // Nest tokens based on the path in their name
    const tokens = convertToNested(filteredTokens.concat(ADDITIONAL_TOKENS(dictionary.allTokens) as TransformedToken[]))
    
    // Remove quotes around these objects
    const UNQUOTE_VARS = ["borderWidth", "borderRadius", "spacings", "iconSizes"]
    const regex = new RegExp(`:\\s*"(${UNQUOTE_VARS.join('|')})"(?=,|\\s*\\}|$)`, 'g');
    const json = JSON.stringify(tokens, null, 2).replace(regex, (_, value) => `: ${value}`)

    return `${headers}\n
export const themes: Themes = ${json};\n\n
export default themes;`;
  }
})

/**
 * Creates the getContrastColor struct for each color value.
 * 
 * Note that no logic exists that can accessibly say what the foreground color should be. 
 * 
 * TODO: Create for each base color a variable that defines the foreground color of that base color and use that in the `text` attribute instead.
 */
const getContrastColor = (token: TransformedToken) => {
  return {
    background: token.value as string,
    text: useBlack(token.value) ? `#000` : `#fff`
  }
}

/**
 * Converts each single value to a ContrastColor struct
 */
StyleDictionary.registerTransform({
  type: "value",
  name: "value/contrastColor",
  transformer: (token: TransformedToken) => getContrastColor(token)
})

/**
 * There are inconsistencies in colors where some variables are not using ContrastColor, but only one value.
 * Those values are extracted here.
 * 
 * NEEDS_ONLY_VALUE defines the path that requires the value and the key of which value to use from ContrastColor for this specific variable.
 * 
 * TODO: Unify this such that we don't need to handle special cases like this.
 */
const NEEDS_ONLY_VALUE: Record<string, keyof ContrastColor> = {
  "text/colors": "background"
}

/**
 * Extracts the color from ContrastColor if necessary according to the object above
 */
StyleDictionary.registerTransform({
  type: "value",
  name: "value/extractContrastColor",
  transitive: true,
  matcher: (token: TransformedToken) => Object.entries(NEEDS_ONLY_VALUE).some(entry => token.name.includes(entry[0])),
  transformer: (token: TransformedToken) => {
    
    const extractKey = Object.entries(NEEDS_ONLY_VALUE).find(entry => token.name.includes(entry[0]))?.[1]!
    return token.value[extractKey]
  }
})


/**
 * Turns variables to `snake_case`
 * 
 * TODO: Use the same formatting in Figma and code?
 */
StyleDictionary.registerTransform({
    type: "name",
    name: "name/snake",
    transformer: (token: TransformedToken) => {
      // Trim all the file paths for excessive spaces
      return token.name.split('/').map(t => t.trim()).join('/')
        // Turn the names into snake_case
        .split(' ').join('_').toLowerCase()
    }
})

/**
 * Naming is inconsistent between Figma and code. This function maps the names of Figma variables to the name they have in code.
 * 
 * TODO: Align these names across design and code
 */
const mapModeOfTransport = (modeOfTransport: string) => {
  let _modeOfTransport = modeOfTransport.trim()

  switch(_modeOfTransport) {
    case "Airport express bus": {
      _modeOfTransport = "Airport Express"
      break; 
    }
    case "AtB Bestill": {
      _modeOfTransport = "Flexible"
      break; 
    }
  }

  return _modeOfTransport
}


/**
 * Grouping of transport variables is done different in Figma and code:
 * 
 * Figma:
 * 
 * Transport/Primary/name_of_transport
 *          /Secondary
 * 
 * Code:
 * 
 * Transport/name_of_transport/Primary
 *                            /Secondary
 * 
 * This transform inverts the Figma grouping to be the same as the one in code.
 * 
 * TODO: Group similarly in Figma and code, such that this becomes obsolete
 */
StyleDictionary.registerTransform({
  type: "name",
  name: "name/groupTransportByType",
  matcher: (token: TransformedToken) => token.name.includes("Transport/Transport"),
  transformer: (token: TransformedToken) => {
    const _nameArr = token.name.split(' ')
    const nameArr = _nameArr.splice(0, 2)
    nameArr.push(_nameArr.join(' '))
    // Transport/Transport  Type of transport (e.g., bike, city)   Primary, Secondary
    return `${nameArr[0]} ${mapModeOfTransport(nameArr[2])}/${nameArr[1]}`
  }
})

/**
 * This function maps naming from Figma to code. It accepts the name of a `directory` and returns the 
 * name for that directory in code. 
 * 
 * Returns an empty string if the directory should be removed.
 * Returns directories separated by `/` if it should be nested deeper.
 * 
 * TODO: Fix these inconcistencies, such that this becomes obsolete.
 */
const mapPath = (path: string) => {
  let buildPath = path

  switch(path) {
    // Base colors 
    case "Base": {
      buildPath = "BaseColors"
      break; 
    }
    // Background
    case "Background": {
      buildPath = "Static/Background/Background"
      break; 
    }
    case "Neutral": {
      buildPath = ""
      break; 
    }
    // Status
    case "Status": {
      buildPath = "Static/Status"
      break; 
    }
    case "Success Primary": {
      buildPath = "Valid"
      break; 
    }
    case "Info Primary": {
      buildPath = "Info"
      break; 
    }
    case "Warning Primary": {
      buildPath = "Warning"
      break; 
    }
    case "Error Primary": {
      buildPath = "Error"
      break; 
    }
    // Text
    case "Text": {
      buildPath = "Text/Colors"
      break;
    }
    case "Primary WW": {
      buildPath = "Primary"
      break;
    }
    // Interactive colors
    case "Interactive 0": {
      buildPath = "Interactive/Interactive 0"
      break;
    }
    case "Interactive 1": {
      buildPath = "Interactive/Interactive 1"
      break;
    }
    case "Interactive 2": {
      buildPath = "Interactive/Interactive 2"
      break;
    }
    case "Interactive 3": {
      buildPath = "Interactive/Interactive 3"
      break;
    }
    case "Interactive destructive": {
      buildPath = "Interactive/Interactive Destructive"
      break;
    }
    // Transport
    case "Transport": {
      buildPath = "Transport/Transport"
      break;
    }
    // Background
    case "Neutral 0": {
      buildPath = "0"
      break;
    }
    case "Neutral 1": {
      buildPath = "1"
      break;
    }
    case "Neutral 2": {
      buildPath = "2"
      break;
    }
    case "Neutral 3": {
      buildPath = "3"
      break;
    }
 }

 return buildPath
}

/**
 * Checks if the Figma `directory` is actually a directory in code.
 * 
 * If it is, the name will receive a `/` at the end.
 */
const isDir = (dir: string) => {
  const DIRS = [
    'Dark',
    'Light',
    'BaseColors', 
    'Static/Status', 
    'Text/Colors',
    'Interactive/Interactive 0', 'Interactive/Interactive 1', 'Interactive/Interactive 2', 'Interactive/Interactive 3', 'Interactive/Interactive Destructive'
  ]

  return DIRS.includes(dir)
}

/** This tranform shapes the name of the token to match the expected path in the output file.
 * E.g., `Base Gray 50` becomes `Base/Gray 50`
 */
StyleDictionary.registerTransform({
  type: "name",
  name: "name/makePath",
  transformer: (token: TransformedToken) => {
    // console.log(token.path)

    return token.path.reduce((p, c) => {
      const normalizedPath = mapPath(c)
      p += normalizedPath
      isDir(normalizedPath) ? p += '/' : p += ' '

      return p
    }, '')
  }
})

type Destination = {
  name?: string, 
  mode?: Mode, 
  extension?: string
} 

/**
 * Configures where the file should be output and what the name should be for each theme for each organisation
*/
const getDestination = ({ name = 'tokens', mode, extension = 'json' }: Destination) => {
  const fname = [name, mode, extension].filter(Boolean).join('.');
  const _path = path.join(outDir, `${mode}-theme/`)
  return {
    fname,
    path: _path,
    fullPath: path.join(_path, fname)
  };
}

const getStyleDictionaryConfig = (mode?: Mode, filter?: (token: TransformedToken) => Boolean): Config => {
  const destination = getDestination({ mode, extension: 'js' })
  filter
  return {
    source: [`${srcDir}/**/*.${mode}.tokens.json`],
    platforms: {
      ts: {
        buildPath: destination.path,
        transforms: ["name/makePath", "name/groupTransportByType", "name/snake", "value/contrastColor", "value/extractContrastColor"],
        files: [
          {
            destination: 'theme.ts',
            format: 'convention/ts'
          },
        ],
      },
      // TODO: Style Dictionary can generate CSS and CSS Modules directly too. This way we don't need to parse the `theme.ts` file into CSS files separately.
      // css: {},
      // cssModule: {}
    },
  };
};

// Build tokens for each mode
modes.forEach((mode) => {
  console.log(`\n👷 Building ${mode} tokens`);
  /** Only build the specified mode */
  const modeFilter = (token: TransformedToken) => token.filePath.indexOf(mode) > -1
  StyleDictionary.extend(getStyleDictionaryConfig(mode, modeFilter)).buildAllPlatforms();
});
