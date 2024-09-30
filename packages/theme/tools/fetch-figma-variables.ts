import { useFigmaToDTCG } from "@tfk-samf/figma-to-dtcg"
import type { GetLocalVariablesResponse } from "@figma/rest-api-spec"

import StyleDictionary from 'style-dictionary';
import type { Config, DesignTokens, TransformedToken } from 'style-dictionary/types';
import { fileHeader } from 'style-dictionary/utils';

import path from 'path';
import { convertToCamelCase, convertToSnakeCase } from "./utils";
import { ThemeOptions } from "../src";

export type Organizations = 'atb' | 'fram' | 'innlandet' | 'nfk' | 'troms'
export type Modes = 'light' | 'dark'
export type SharedCollections = 'border' | 'spacing' | 'typography' | 'icon'
export type OrganisationCollections = 'color_palette'
export type VariantCollections = 'theme'

const outDir = './src';
const organizations: Organizations[] = ['atb']
const modes: Modes[] = ['light', 'dark'];

/**
 * Appends the name of the collection to the file path, such that
 * it is prepended to the name of the variable (e.g., COLOR-background-neutral-...).
 */
StyleDictionary.registerTransform({
  name: 'attribute/append-type',
  type: 'attribute',
  transform: (token: TransformedToken) => {
    const originalPath = token.path;

    if (!token.prefix) return token;

    Object.assign(originalPath, [token.prefix, ...token.path].map(convertToCamelCase));

    return token;
  },
});

/**
 * Appends the name of the collection to the file path, such that
 * it is prepended to the name of the variable (e.g., COLOR-background-neutral-...).
 */
StyleDictionary.registerTransform({
  name: 'attribute/compat-path',
  type: 'attribute',
  transform: (token: TransformedToken) => {

    const compatPath = token.path.reduce((acc, cur, index, all) => {

      switch (cur) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "city":
        case "region":
        case "airportExpress":
        case "boat":
        case "train":
        case "flexible":
        case "bike":
        case "scooter":
        case "car":
        case "other":
          return acc
        case "destructive":
          // Keep the destructive key if it is the last one
          // Happens in `interactive/x/destructive`
          if (index === 3) {
            return acc.concat(cur)
          }
          return acc
        case "color":
          if (index === 0) {
            return acc
          }
          return acc.concat(cur)
        case "background":
          if (index === all.length - 1) {
            // Unpack ContrastColor when border color
            if (all.includes("border")) {
              return acc
            }
            else return acc.concat(cur)
          }

          return acc.concat("static", "background")
        case "neutral":
          return acc.concat(`background_${all[index + 1]}`)
        case "accent":
          return acc.concat(`background_accent_${all[index + 1]}`)
        case "interactive":
        case "transport":
          let mode = convertToSnakeCase(all[index + 1])
          return acc.concat(cur, `${cur}_${mode}`)
        case "foreground":
          return acc.concat("text")
        case "primary":
          // If ContrastColor
          if (index === all.length - 1 && all[index - 1] === "foreground" && cur === "primary") {
            return acc
          }

          return acc.concat(cur)
        case "dynamic":
          return acc.concat("colors")
        case "zone":
          return acc.concat("static", "zone_selection")
        case "geofencingZone":
          return acc.concat("geofencingZones")
        case "spacing":
          return acc.concat("spacings")
        default:
          return acc.concat(cur)
      }
    }, [] as string[])

    token.compatPath = compatPath;

    return token;
  },
});

/**
 * Removes the base colors (color palette) from the final output.
 */
StyleDictionary.registerFilter({
  name: 'filter-palette',
  filter: (token: TransformedToken) => {
    return token.prefix !== "color_palette"
  }
});

/**
 * Contents of the main TypeScript file linking the themes
 */
const tsIndex = `
import light from "./light"
import dark from "./dark"

const themes = {
  light,
  dark
}
  
export default themes`;

/**
 * Outputs a string to a file. Used for generated
 * linking files defined above.
 */
StyleDictionary.registerFormat({
  name: 'index',
  format: async ({ file, options }) => {
    const header = await fileHeader({ file });
    return (
      header
      + options.content
    );
  },
});

/**
 * Generates a nested JSON object using the path of each token as key.
 *
 * ["Color", "Background", "Neutral", "0"] becomes
 * {
 *   "Color": {
 *     "Background": {
 *       "Neutral": {
 *         "0": value
 *       }
 *     }
 *   }
 * }
 *
 * @param tokens Flat list of design tokens
 * @returns Nested object based on the path of each token
 */
const expandToNestedObject = (tokens: TransformedToken[], pathKey = 'path') => {
  const result: any = {};
  tokens.forEach((token) => {
    let current = result;
    token[pathKey].forEach((element: string, index: number) => {
      if (typeof current === 'string') {
        console.warn(`Converted ContrastColor to old format for ${token[pathKey].join('.')}`)
        return
      }

      if (index === token[pathKey].length - 1) {
        current[element] = token.value;
      }
      else {
        current[element] = current[element] || {};
        current = current[element];
      }
    });
  });
  return result;
};

/**
 * Generates the nested JSON object and unquotes its keys.
 */
StyleDictionary.registerFormat({
  name: 'typescript/obj',
  format: async ({ dictionary, file, options }) => (`${await fileHeader({ file })
    }export default ${JSON.stringify(expandToNestedObject(dictionary.allTokens, options.useFigmaStructure ? 'path' : 'compatPath'), null, 2).replace(/"([^"]+)":/g, '$1:')
    };\n`),
});

/**
 * Configures where the file should be output in accordance with the organization.
 *
 * @param organization Name of the organization
 * @returns Output folder
 */
const makeDestination = (organization: Organizations, themeOptions?: ThemeOptions): string => path.join(outDir, `${themeOptions?.useFigmaStructure ? 'themes-fs' : 'themes'}/${organization}-theme/`);

const generateThemes = async () => {

  /**
   * Mocked response from Figma Variables Rest API
   */
  const response = await fetch('https://api.figma.com/v1/files/3rlcixpbhfBglNSctUkMys/variables/local', {
    headers: {
      'X-FIGMA-TOKEN': process.env.FIGMA_TOKEN ?? "Figma token inaccessible or not set."
    }
  })

  if (!response.ok) {
    throw new Error(`Failed to retrieve Figma variables with status ${response.status}: ${(await response.json())?.message}`)
  }

  const { tokens } = await useFigmaToDTCG<
    Organizations,
    Modes,
    SharedCollections,
    OrganisationCollections,
    VariantCollections
  >({
    api: "rest",
    response: await response.json() as GetLocalVariablesResponse
  }, {
    verbosity: "silent"
  })

  const makeTokens = (organization: Organizations, mode: Modes) => {
    const { theme, color_palette, ...rest } = {
      ...tokens,
      theme: tokens['theme']?.[`${organization}_${mode}`],
      color_palette: tokens['color_palette']?.[organization]
    }

    return {
      ...theme,
      ...color_palette,
      ...rest.border,
      ...rest.typography,
      ...rest.spacing,
      ...rest.icon
    } as DesignTokens
  }

  /**
   * @param organization Name of the organization
   * @param mode Theme mode
   * @returns Style Dictionary config for the org-mode combination
   */
  const getStyleDictionaryConfig = (organization: Organizations, mode: Modes): Config => {

    return {
      log: {
        verbosity: 'silent',
      },
      tokens: makeTokens(organization, mode),
      // include: [`${srcDir}/**/*.${organization}.json`],
      // source: [`${srcDir}/**/*.${organization}_${mode}.json`, `${srcDir}/**/@(border|spacing|typography)*.json`],
      platforms: {
        ts: {
          buildPath: makeDestination(organization),
          expand: true,
          // `js` transformGroup with `attribbute/append-type` prepended
          transforms: ['attribute/append-type', 'attribute/cti', 'attribute/compat-path', 'name/pascal', 'size/rem', 'color/hex'],
          files: [
            {
              format: 'typescript/obj',
              destination: `${mode}.ts`,
              filter: 'filter-palette',
            },
            {
              format: 'index',
              options: {
                content: tsIndex,
              },
              destination: 'theme.ts',
            },
          ],
        },
        tsFs: {
          buildPath: makeDestination(organization, {
            useFigmaStructure: true
          }),
          expand: true,
          // `js` transformGroup with `attribbute/append-type` prepended
          transforms: ['attribute/append-type', 'attribute/cti', 'attribute/compat-path', 'name/pascal', 'size/rem', 'color/hex'],
          files: [
            {
              format: 'typescript/obj',
              destination: `${mode}.ts`,
              options: {
                useFigmaStructure: true
              } as ThemeOptions,
              filter: 'filter-palette',
            },
            {
              format: 'index',
              options: {
                content: tsIndex,
              },
              destination: 'theme.ts',
            },
          ],
        }
      },
    };
  };

  // Generate files for each organization-mode combination
  for (const organization of organizations) {
    console.info(`\n👷  Built ${organization} tokens      | 🌙 & 🌞 |`);
    await Promise.all(
      modes.map((mode) => new StyleDictionary(
        getStyleDictionaryConfig(organization, mode),
      ).buildAllPlatforms()),
    );
  }
}

generateThemes()

console.log('\n');
