import { useFigmaToDTCG } from "@tfk-samf/figma-to-dtcg"
import type { Organization, Mode } from "@tfk-samf/figma-to-dtcg"
import type { GetLocalVariablesResponse } from "@figma/rest-api-spec"

import StyleDictionary from 'style-dictionary';
import type { Config, DesignTokens, TransformedToken } from 'style-dictionary/types';
import { fileHeader } from 'style-dictionary/utils';

import path from 'path';
import { convertToCamelCase, convertToSnakeCase } from "./utils";
import { ThemeOptions } from "../src";

/**
 * Mocked response from Figma Variables Rest API
 */
const response = await Promise.resolve<GetLocalVariablesResponse>(
  {
    "status": 200,
    "error": false,
    "meta": {
      "variables": {
        "VariableID:3534:12676": {
          "id": "VariableID:3534:12676",
          "name": "Radius/Small",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3534:12675",
          "key": "2018a7bb048aeacafa41473159dc9ab37db56754",
          "remote": false,
          "resolvedType": "FLOAT",
          "valuesByMode": {
            "3534:0": 4
          },
          "scopes": [
            "CORNER_RADIUS"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3534:12677": {
          "id": "VariableID:3534:12677",
          "name": "Radius/Regular",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3534:12675",
          "key": "948a5edb78e02b9baedff10a4038359d8f1cd0cb",
          "remote": false,
          "resolvedType": "FLOAT",
          "valuesByMode": {
            "3534:0": 8
          },
          "scopes": [
            "CORNER_RADIUS"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3534:12678": {
          "id": "VariableID:3534:12678",
          "name": "Radius/Circle",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3534:12675",
          "key": "a667b379e60495e1e194b2b7cdb2dd61cd7baa5c",
          "remote": false,
          "resolvedType": "FLOAT",
          "valuesByMode": {
            "3534:0": 20
          },
          "scopes": [
            "CORNER_RADIUS"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3541:12024": {
          "id": "VariableID:3541:12024",
          "name": "xSmall",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3541:12023",
          "key": "bbf3bc49935327791e7bf353c53f5255c9e48aae",
          "remote": false,
          "resolvedType": "FLOAT",
          "valuesByMode": {
            "3541:0": 4
          },
          "scopes": [
            "WIDTH_HEIGHT",
            "GAP"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3541:12025": {
          "id": "VariableID:3541:12025",
          "name": "Small",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3541:12023",
          "key": "1dfc9db894542b753b1fc93ce4c11fd8aa748d8d",
          "remote": false,
          "resolvedType": "FLOAT",
          "valuesByMode": {
            "3541:0": 8
          },
          "scopes": [
            "WIDTH_HEIGHT",
            "GAP"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3541:12026": {
          "id": "VariableID:3541:12026",
          "name": "Medium",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3541:12023",
          "key": "a8c538ccd66978b30b85da37b985f7c010121d3a",
          "remote": false,
          "resolvedType": "FLOAT",
          "valuesByMode": {
            "3541:0": 12
          },
          "scopes": [
            "WIDTH_HEIGHT",
            "GAP"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3541:12027": {
          "id": "VariableID:3541:12027",
          "name": "Large",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3541:12023",
          "key": "8c2ad061ef55f1e6e406d053453a8bd9de03958f",
          "remote": false,
          "resolvedType": "FLOAT",
          "valuesByMode": {
            "3541:0": 20
          },
          "scopes": [
            "WIDTH_HEIGHT",
            "GAP"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3541:12028": {
          "id": "VariableID:3541:12028",
          "name": "xLarge",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3541:12023",
          "key": "e2d10a174d3b7a3ce031f0c7941a8743c4144851",
          "remote": false,
          "resolvedType": "FLOAT",
          "valuesByMode": {
            "3541:0": 24
          },
          "scopes": [
            "WIDTH_HEIGHT",
            "GAP"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10890": {
          "id": "VariableID:3544:10890",
          "name": "Background/Neutral/0",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "f72b9ef3fa19f78b559990b44bceb23edd06bd41",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:691"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:705"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10892": {
          "id": "VariableID:3544:10892",
          "name": "Background/Neutral/1",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "791a46d0a7a796b62070a2fd8ac70b703ea92249",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:692"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:702"
            },
            "3766:0": {
              "r": 0.9019607901573181,
              "g": 0.9490196108818054,
              "b": 0.9647058844566345,
              "a": 1
            },
            "3771:0": {
              "r": 0.9372549057006836,
              "g": 0.9607843160629272,
              "b": 0.9725490212440491,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10893": {
          "id": "VariableID:3544:10893",
          "name": "Background/Neutral/2",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "c89823022d3e4d4547b0f502d42e816ffbe588ed",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:693"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:700"
            },
            "3766:0": {
              "r": 0.9176470637321472,
              "g": 0.9176470637321472,
              "b": 0.9176470637321472,
              "a": 1
            },
            "3771:0": {
              "r": 0.8745098114013672,
              "g": 0.8941176533699036,
              "b": 0.9058823585510254,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10894": {
          "id": "VariableID:3544:10894",
          "name": "Background/Neutral/3",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "ae29d51b83e6fdd896b4eca45f8f8b6c1a67592c",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:694"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:699"
            },
            "3766:0": {
              "r": 0.8941176533699036,
              "g": 0.8941176533699036,
              "b": 0.8941176533699036,
              "a": 1
            },
            "3771:0": {
              "r": 0.8941176533699036,
              "g": 0.8941176533699036,
              "b": 0.8941176533699036,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10895": {
          "id": "VariableID:3544:10895",
          "name": "Background/Accent/0",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "48c5deeb5823b4b15e41150abd82936bd7d75dbc",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:700"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:700"
            },
            "3766:0": {
              "r": 0.003921568859368563,
              "g": 0.5058823823928833,
              "b": 0.6352941393852234,
              "a": 1
            },
            "3771:0": {
              "r": 0,
              "g": 0.47843137383461,
              "b": 0.7098039388656616,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10896": {
          "id": "VariableID:3544:10896",
          "name": "Background/Accent/1",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "e9a9d28a0ac61ac3164e2c876003f8f57667f92a",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:699"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:699"
            },
            "3766:0": {
              "r": 0.01568627543747425,
              "g": 0.3764705955982208,
              "b": 0.45098039507865906,
              "a": 1
            },
            "3771:0": {
              "r": 0,
              "g": 0.33725491166114807,
              "b": 0.5215686559677124,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10897": {
          "id": "VariableID:3544:10897",
          "name": "Background/Accent/2",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "2195a1bba240ae8aa5632065144fd6a8fb9f397f",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:725"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:725"
            },
            "3766:0": {
              "r": 0.772549033164978,
              "g": 0.8745098114013672,
              "b": 0.9019607901573181,
              "a": 1
            },
            "3771:0": {
              "r": 0.8039215803146362,
              "g": 0.9137254953384399,
              "b": 0.8901960849761963,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10898": {
          "id": "VariableID:3544:10898",
          "name": "Background/Accent/3",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "896f580002cfdd93374877a5912145504d6f00aa",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:729"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:729"
            },
            "3766:0": {
              "r": 0.003921568859368563,
              "g": 0.5058823823928833,
              "b": 0.6352941393852234,
              "a": 1
            },
            "3771:0": {
              "r": 0.05098039284348488,
              "g": 0.3960784375667572,
              "b": 0.4117647111415863,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10899": {
          "id": "VariableID:3544:10899",
          "name": "Background/Accent/4",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "e377f3e39d98e1151f172c42df3b683bdacddbd8",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:706"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:706"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 0.9254902005195618,
              "g": 0.8980392217636108,
              "b": 0.5529412031173706,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10900": {
          "id": "VariableID:3544:10900",
          "name": "Background/Accent/5",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "c6d5d17b1c6ed10c89bcdd0449827498c7eb1de2",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:726"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:701"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 0,
              "g": 0.47843137383461,
              "b": 0.7098039388656616,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10905": {
          "id": "VariableID:3544:10905",
          "name": "Status/Valid/Primary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "f57637bf0d1a121490f2052402c88702f2f64826",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:709"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:709"
            },
            "3766:0": {
              "r": 0.49803921580314636,
              "g": 0.8549019694328308,
              "b": 0.7333333492279053,
              "a": 1
            },
            "3771:0": {
              "r": 0.5098039507865906,
              "g": 0.7254902124404907,
              "b": 0.3843137323856354,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10906": {
          "id": "VariableID:3544:10906",
          "name": "Status/Info/Primary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "69fb0e0bef0005cb8bd96a6e71b86b225bd718ca",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:729"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:729"
            },
            "3766:0": {
              "r": 0.6000000238418579,
              "g": 0.8039215803146362,
              "b": 0.8549019694328308,
              "a": 1
            },
            "3771:0": {
              "r": 0.5529412031173706,
              "g": 0.8313725590705872,
              "b": 0.8039215803146362,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10907": {
          "id": "VariableID:3544:10907",
          "name": "Status/Warning/Primary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "747b64a3198de6833435c30b62286eb1938d6b28",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:745"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:745"
            },
            "3766:0": {
              "r": 0.9882352948188782,
              "g": 0.729411780834198,
              "b": 0.38823530077934265,
              "a": 1
            },
            "3771:0": {
              "r": 0.9725490212440491,
              "g": 0.8549019694328308,
              "b": 0,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10908": {
          "id": "VariableID:3544:10908",
          "name": "Status/Error/Primary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "1e766df7b903b020199d67af6d92e61bf34cdcea",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:767"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:767"
            },
            "3766:0": {
              "r": 0.6509804129600525,
              "g": 0.0784313753247261,
              "b": 0.09803921729326248,
              "a": 1
            },
            "3771:0": {
              "r": 0.9450980424880981,
              "g": 0.33725491166114807,
              "b": 0.16078431904315948,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10910": {
          "id": "VariableID:3544:10910",
          "name": "_Text/Primary/BW",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "352ebfd43d5bc834ecd2917c7dba78f230baf1f6",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:705"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:691"
            },
            "3766:0": {
              "r": 0,
              "g": 0.20392157137393951,
              "b": 0.2549019753932953,
              "a": 1
            },
            "3771:0": {
              "r": 0,
              "g": 0,
              "b": 0,
              "a": 1
            }
          },
          "scopes": [
            "TEXT_FILL",
            "STROKE_COLOR"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10911": {
          "id": "VariableID:3544:10911",
          "name": "_Text/Secondary/WW",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "99309b855000cd18ae4fb6ff2c989a92087ad6d3",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:699"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:693"
            },
            "3766:0": {
              "r": 0.3019607961177826,
              "g": 0.4431372582912445,
              "b": 0.47843137383461,
              "a": 1
            },
            "3771:0": {
              "r": 0.3333333432674408,
              "g": 0.3686274588108063,
              "b": 0.3960784375667572,
              "a": 1
            }
          },
          "scopes": [
            "TEXT_FILL",
            "STROKE_COLOR"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10912": {
          "id": "VariableID:3544:10912",
          "name": "_Text/Disabled/WW",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "fc0584515b80cea405e2a0b7f669e12042db62c8",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:696"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:696"
            },
            "3766:0": {
              "r": 0.47843137383461,
              "g": 0.5843137502670288,
              "b": 0.6117647290229797,
              "a": 1
            },
            "3771:0": {
              "r": 0.6627451181411743,
              "g": 0.6823529601097107,
              "b": 0.6941176652908325,
              "a": 1
            }
          },
          "scopes": [
            "TEXT_FILL",
            "STROKE_COLOR"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10913": {
          "id": "VariableID:3544:10913",
          "name": "Interactive/0/Default",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "6542b00f96dd05758086ca74cf497ea01a42a04d",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:729"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:729"
            },
            "3766:0": {
              "r": 0.01568627543747425,
              "g": 0.3764705955982208,
              "b": 0.45098039507865906,
              "a": 1
            },
            "3771:0": {
              "r": 0,
              "g": 0.33725491166114807,
              "b": 0.5215686559677124,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10914": {
          "id": "VariableID:3544:10914",
          "name": "Interactive/0/Hover",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "7f089e2ac611fdf7f06416fa055ca8ccdac23ba3",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:730"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:730"
            },
            "3766:0": {
              "r": 0.003921568859368563,
              "g": 0.5058823823928833,
              "b": 0.6352941393852234,
              "a": 1
            },
            "3771:0": {
              "r": 0,
              "g": 0.49803921580314636,
              "b": 0.729411780834198,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10915": {
          "id": "VariableID:3544:10915",
          "name": "Interactive/0/Active",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "56ab0e0d159e98c113aaa8e7a03627fe22fa7bd9",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:726"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:726"
            },
            "3766:0": {
              "r": 0.6000000238418579,
              "g": 0.8039215803146362,
              "b": 0.8549019694328308,
              "a": 1
            },
            "3771:0": {
              "r": 0.8039215803146362,
              "g": 0.9137254953384399,
              "b": 0.8901960849761963,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10916": {
          "id": "VariableID:3544:10916",
          "name": "Interactive/0/Disabled",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "0b9cd01de7ced127bd0965d7e82dea38b5f1b270",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:725"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:725"
            },
            "3766:0": {
              "r": 0.6000000238418579,
              "g": 0.8039215803146362,
              "b": 0.8549019694328308,
              "a": 1
            },
            "3771:0": {
              "r": 0.8392156958580017,
              "g": 0.843137264251709,
              "b": 0.8588235378265381,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10917": {
          "id": "VariableID:3544:10917",
          "name": "Interactive/0/Outline",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "4006142235d17630d79dca72f6b5e6daa26a7859",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:717"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:717"
            },
            "3766:0": {
              "r": 0.003921568859368563,
              "g": 0.5058823823928833,
              "b": 0.6352941393852234,
              "a": 1
            },
            "3771:0": {
              "r": 0.05098039284348488,
              "g": 0.3960784375667572,
              "b": 0.4117647111415863,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10918": {
          "id": "VariableID:3544:10918",
          "name": "Interactive/0/Destructive",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "e5e225ea0e861f3d29885dccbaeacb82db2f423d",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:768"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:765"
            },
            "3766:0": {
              "r": 0.6470588445663452,
              "g": 0.06666667014360428,
              "b": 0.250980406999588,
              "a": 1
            },
            "3771:0": {
              "r": 0.6431372761726379,
              "g": 0.05882352963089943,
              "b": 0.12941177189350128,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10920": {
          "id": "VariableID:3544:10920",
          "name": "Interactive/1/Default",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "5cf3c5ac178e26c034ce227f95b78796f806c5fa",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:699"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:699"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 0.003921568859368563,
              "g": 0.1725490242242813,
              "b": 0.2666666805744171,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10921": {
          "id": "VariableID:3544:10921",
          "name": "Interactive/1/Hover",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "5606384f9164b9b297baf9883f916fb770554741",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:698"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:698"
            },
            "3766:0": {
              "r": 0.772549033164978,
              "g": 0.8745098114013672,
              "b": 0.9019607901573181,
              "a": 1
            },
            "3771:0": {
              "r": 0,
              "g": 0.2235294133424759,
              "b": 0.3529411852359772,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10922": {
          "id": "VariableID:3544:10922",
          "name": "Interactive/1/Active",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "67e4322fbd687789abaceaa53e5a13394e3313e8",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:703"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:703"
            },
            "3766:0": {
              "r": 0.6000000238418579,
              "g": 0.8039215803146362,
              "b": 0.8549019694328308,
              "a": 1
            },
            "3771:0": {
              "r": 0,
              "g": 0.08627451211214066,
              "b": 0.13333334028720856,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10923": {
          "id": "VariableID:3544:10923",
          "name": "Interactive/1/Disabled",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "60e5a1f0f5ee04170a7a751d66f66db6440adf2a",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:695"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:695"
            },
            "3766:0": {
              "r": 0.9019607901573181,
              "g": 0.9490196108818054,
              "b": 0.9647058844566345,
              "a": 1
            },
            "3771:0": {
              "r": 0.8392156958580017,
              "g": 0.843137264251709,
              "b": 0.8588235378265381,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10924": {
          "id": "VariableID:3544:10924",
          "name": "Interactive/1/Outline",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "0535982636a4d80483078b24a4dea30f09e91c3a",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:729"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:729"
            },
            "3766:0": {
              "r": 0.01568627543747425,
              "g": 0.3764705955982208,
              "b": 0.45098039507865906,
              "a": 1
            },
            "3771:0": {
              "r": 0,
              "g": 0.33725491166114807,
              "b": 0.5215686559677124,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10925": {
          "id": "VariableID:3544:10925",
          "name": "Interactive/1/Destructive",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "ef15bf30e1a7465126f771f83041c3b848a72c24",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:768"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:765"
            },
            "3766:0": {
              "r": 0.6470588445663452,
              "g": 0.06666667014360428,
              "b": 0.250980406999588,
              "a": 1
            },
            "3771:0": {
              "r": 0.6431372761726379,
              "g": 0.05882352963089943,
              "b": 0.12941177189350128,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10926": {
          "id": "VariableID:3544:10926",
          "name": "Interactive/2/Default",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "c6ab52812db5b56714feeca69010f9fc8da96cb4",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:691"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:705"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10927": {
          "id": "VariableID:3544:10927",
          "name": "Interactive/2/Hover",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "5e64750b59c52877ba11633cdf61bbf983afb4b0",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:725"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:733"
            },
            "3766:0": {
              "r": 0.772549033164978,
              "g": 0.8745098114013672,
              "b": 0.9019607901573181,
              "a": 1
            },
            "3771:0": {
              "r": 0.8980392217636108,
              "g": 0.9529411792755127,
              "b": 0.95686274766922,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10928": {
          "id": "VariableID:3544:10928",
          "name": "Interactive/2/Active",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "76ac780b6169ad9df53d6a2b71f3ef0f0a42f59b",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:726"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:731"
            },
            "3766:0": {
              "r": 0.6000000238418579,
              "g": 0.8039215803146362,
              "b": 0.8549019694328308,
              "a": 1
            },
            "3771:0": {
              "r": 0.8039215803146362,
              "g": 0.9137254953384399,
              "b": 0.8901960849761963,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10929": {
          "id": "VariableID:3544:10929",
          "name": "Interactive/2/Disabled",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "4ae5e33f179ce7cc06b276c6c519c15c9c042359",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:691"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:705"
            },
            "3766:0": {
              "r": 0.9019607901573181,
              "g": 0.9490196108818054,
              "b": 0.9647058844566345,
              "a": 1
            },
            "3771:0": {
              "r": 0.8392156958580017,
              "g": 0.843137264251709,
              "b": 0.8588235378265381,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10930": {
          "id": "VariableID:3544:10930",
          "name": "Interactive/2/Outline",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "cbf2f7bef39cdaa86c53ff28b4817143f4ebd8b3",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:729"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:729"
            },
            "3766:0": {
              "r": 0.01568627543747425,
              "g": 0.3764705955982208,
              "b": 0.45098039507865906,
              "a": 1
            },
            "3771:0": {
              "r": 0,
              "g": 0.33725491166114807,
              "b": 0.5215686559677124,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10931": {
          "id": "VariableID:3544:10931",
          "name": "Interactive/2/Destructive",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "17da6952a125ad73289f702a0acf82c500dbe318",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:768"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:765"
            },
            "3766:0": {
              "r": 0.6470588445663452,
              "g": 0.06666667014360428,
              "b": 0.250980406999588,
              "a": 1
            },
            "3771:0": {
              "r": 0.6431372761726379,
              "g": 0.05882352963089943,
              "b": 0.12941177189350128,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10932": {
          "id": "VariableID:3544:10932",
          "name": "Interactive/3/Default",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "6730638ce6e45725aff73eb8a975eb761d8fd84f",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:725"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:731"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 0.5098039507865906,
              "g": 0.7254902124404907,
              "b": 0.3843137323856354,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10933": {
          "id": "VariableID:3544:10933",
          "name": "Interactive/3/Hover",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "0d4405a2405e0ece327bf98afc936f9635f1e29f",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:726"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:732"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 0.7215686440467834,
              "g": 0.8313725590705872,
              "b": 0.658823549747467,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10934": {
          "id": "VariableID:3544:10934",
          "name": "Interactive/3/Active",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "3e5ca4aa526f6b3ed60774ed95f910372876461f",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:726"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:732"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 0.1568627506494522,
              "g": 0.26274511218070984,
              "b": 0.125490203499794,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10935": {
          "id": "VariableID:3544:10935",
          "name": "Interactive/3/Disabled",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "14d220ca37f31cf7765a5b43b235a161ab759168",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:693"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:699"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 0.8313725590705872,
              "g": 0.8980392217636108,
              "b": 0.8235294222831726,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10936": {
          "id": "VariableID:3544:10936",
          "name": "Interactive/3/Outline",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "add25ff0d5e1c4d70fd5fd3f7ec9e78628659459",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:731"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:725"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 0,
              "g": 0.33725491166114807,
              "b": 0.5215686559677124,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10937": {
          "id": "VariableID:3544:10937",
          "name": "Interactive/3/Destructive",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "23fb98d407648b119b48c569599ded287ca91eff",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:768"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:768"
            },
            "3766:0": {
              "r": 0.6470588445663452,
              "g": 0.06666667014360428,
              "b": 0.250980406999588,
              "a": 1
            },
            "3771:0": {
              "r": 0.6431372761726379,
              "g": 0.05882352963089943,
              "b": 0.12941177189350128,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10938": {
          "id": "VariableID:3544:10938",
          "name": "Interactive/Destructive/Default",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "e35b2108a9825dae5f3fb8ea64aa63b77fbe290c",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:768"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:768"
            },
            "3766:0": {
              "r": 0.6509804129600525,
              "g": 0.0784313753247261,
              "b": 0.09803921729326248,
              "a": 1
            },
            "3771:0": {
              "r": 0.9450980424880981,
              "g": 0.5058823823928833,
              "b": 0.4627451002597809,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10939": {
          "id": "VariableID:3544:10939",
          "name": "Interactive/Destructive/Hover",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "313a6266072ebff8c43f4106399c82feb5228b3c",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:767"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:767"
            },
            "3766:0": {
              "r": 0.7921568751335144,
              "g": 0.4470588266849518,
              "b": 0.4588235318660736,
              "a": 1
            },
            "3771:0": {
              "r": 0.9372549057006836,
              "g": 0.7215686440467834,
              "b": 0.6980392336845398,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10940": {
          "id": "VariableID:3544:10940",
          "name": "Interactive/Destructive/Active",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "c776206132f3349f793403cf28b944be87c724b9",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:771"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:771"
            },
            "3766:0": {
              "r": 0.32549020648002625,
              "g": 0.10588235408067703,
              "b": 0.13333334028720856,
              "a": 1
            },
            "3771:0": {
              "r": 0.3333333432674408,
              "g": 0.06666667014360428,
              "b": 0.14509804546833038,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10941": {
          "id": "VariableID:3544:10941",
          "name": "Interactive/Destructive/Disabled",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "5f2ad8dd1d3e94953bb13144b80bdd2b699cfefb",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:763"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:763"
            },
            "3766:0": {
              "r": 0.929411768913269,
              "g": 0.8156862854957581,
              "b": 0.8196078538894653,
              "a": 1
            },
            "3771:0": {
              "r": 0.95686274766922,
              "g": 0.8470588326454163,
              "b": 0.8352941274642944,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10942": {
          "id": "VariableID:3544:10942",
          "name": "Interactive/Destructive/Outline",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "442567b17ea8903bb31c99d9b43c38345a7ab476",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:729"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:729"
            },
            "3766:0": {
              "r": 0.007843137718737125,
              "g": 0.12156862765550613,
              "b": 0.1568627506494522,
              "a": 1
            },
            "3771:0": {
              "r": 0,
              "g": 0.33725491166114807,
              "b": 0.5215686559677124,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10943": {
          "id": "VariableID:3544:10943",
          "name": "Interactive/Destructive/Destructive",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "7821979f40da9b921d38edcfc3ad6588442eed99",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:768"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:765"
            },
            "3766:0": {
              "r": 0.6470588445663452,
              "g": 0.06666667014360428,
              "b": 0.250980406999588,
              "a": 1
            },
            "3771:0": {
              "r": 0.6431372761726379,
              "g": 0.05882352963089943,
              "b": 0.12941177189350128,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10944": {
          "id": "VariableID:3544:10944",
          "name": "Transport/City/Primary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "5bc55611566e4d0b53fb65af82052eeae6d34365",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:708"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:708"
            },
            "3766:0": {
              "r": 0.003921568859368563,
              "g": 0.3019607961177826,
              "b": 0.3803921639919281,
              "a": 1
            },
            "3771:0": {
              "r": 0.5098039507865906,
              "g": 0.7254902124404907,
              "b": 0.3843137323856354,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10945": {
          "id": "VariableID:3544:10945",
          "name": "Transport/Region/Primary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "ef32605682f6a70465024122e8d25eb359b5672a",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:729"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:729"
            },
            "3766:0": {
              "r": 0.42352941632270813,
              "g": 0.4941176474094391,
              "b": 0.18431372940540314,
              "a": 1
            },
            "3771:0": {
              "r": 0,
              "g": 0.33725491166114807,
              "b": 0.5215686559677124,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10946": {
          "id": "VariableID:3544:10946",
          "name": "Transport/AirportExpress/Primary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "cfc3d114594a26008a1ab6dead38dea1badde7a5",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:768"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:768"
            },
            "3766:0": {
              "r": 0.42352941632270813,
              "g": 0.4941176474094391,
              "b": 0.18431372940540314,
              "a": 1
            },
            "3771:0": {
              "r": 0,
              "g": 0.33725491166114807,
              "b": 0.5215686559677124,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10947": {
          "id": "VariableID:3544:10947",
          "name": "Transport/Flexible/Primary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "cd6b696069ce44ab3e73675462466c04c8c0d95f",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:757"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:757"
            },
            "3766:0": {
              "r": 0.4431372582912445,
              "g": 0.4431372582912445,
              "b": 0.4431372582912445,
              "a": 1
            },
            "3771:0": {
              "r": 0.9450980424880981,
              "g": 0.33725491166114807,
              "b": 0.3490196168422699,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10948": {
          "id": "VariableID:3544:10948",
          "name": "Transport/Boat/Primary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "970eeaaf271aa8e2d36d9038e9ce441083f08ed7",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:717"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:717"
            },
            "3766:0": {
              "r": 0.09019608050584793,
              "g": 0.46666666865348816,
              "b": 0.843137264251709,
              "a": 1
            },
            "3771:0": {
              "r": 0,
              "g": 0.49803921580314636,
              "b": 0.729411780834198,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10949": {
          "id": "VariableID:3544:10949",
          "name": "Transport/Train/Primary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "21ddf54f2ca060516a394238c9f4b169ffb5fd67",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:741"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:741"
            },
            "3766:0": {
              "r": 0.6470588445663452,
              "g": 0.3764705955982208,
              "b": 0.5411764979362488,
              "a": 1
            },
            "3771:0": {
              "r": 0.3333333432674408,
              "g": 0.06666667014360428,
              "b": 0.14509804546833038,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10950": {
          "id": "VariableID:3544:10950",
          "name": "Transport/Scooter/Primary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "0a8f19b9ebc154e82fcfbbdf7a5fb0ff8040ad54",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:712"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:712"
            },
            "3766:0": {
              "r": 0.27450981736183167,
              "g": 0.29019609093666077,
              "b": 0,
              "a": 1
            },
            "3771:0": {
              "r": 0.27450981736183167,
              "g": 0.29019609093666077,
              "b": 0,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10951": {
          "id": "VariableID:3544:10951",
          "name": "Transport/Car/Primary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "bb0d28b4cdc37b57e5978ed7dfa224813ed9dfd6",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:740"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:740"
            },
            "3766:0": {
              "r": 0.43529412150382996,
              "g": 0.3294117748737335,
              "b": 0.40784314274787903,
              "a": 1
            },
            "3771:0": {
              "r": 0.43529412150382996,
              "g": 0.3294117748737335,
              "b": 0.40784314274787903,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10952": {
          "id": "VariableID:3544:10952",
          "name": "Transport/Bike/Primary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "349ef98910da88db3a73f0552bab16e35413bd1d",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:769"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:769"
            },
            "3766:0": {
              "r": 0.4901960790157318,
              "g": 0.05098039284348488,
              "b": 0.1921568661928177,
              "a": 1
            },
            "3771:0": {
              "r": 0.4901960790157318,
              "g": 0.05098039284348488,
              "b": 0.1921568661928177,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3544:10953": {
          "id": "VariableID:3544:10953",
          "name": "Transport/Other/Primary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "4d73587058a80e6db06c06e63cf8535b8cf5906f",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:700"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:695"
            },
            "3766:0": {
              "r": 0.4431372582912445,
              "g": 0.4431372582912445,
              "b": 0.4431372582912445,
              "a": 1
            },
            "3771:0": {
              "r": 0.3333333432674408,
              "g": 0.3686274588108063,
              "b": 0.3960784375667572,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3546:11033": {
          "id": "VariableID:3546:11033",
          "name": "_Text/Primary/WW",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "1673a43a1cdf3ac04e01a8b60913bdff06f9449d",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:691"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:691"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "TEXT_FILL",
            "STROKE_COLOR"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3552:10889": {
          "id": "VariableID:3552:10889",
          "name": "Transport/City/Secondary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "bd804abc6c69d4c34eaa84fa5e5bbd9a4f0bf506",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:709"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:709"
            },
            "3766:0": {
              "r": 0.003921568859368563,
              "g": 0.3019607961177826,
              "b": 0.3803921639919281,
              "a": 1
            },
            "3771:0": {
              "r": 0.5098039507865906,
              "g": 0.7254902124404907,
              "b": 0.3843137323856354,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3552:10892": {
          "id": "VariableID:3552:10892",
          "name": "Transport/Region/Secondary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "a6c5d6b9e237a104302eff2ba2d8394fd27eda45",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:730"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:730"
            },
            "3766:0": {
              "r": 0.42352941632270813,
              "g": 0.4941176474094391,
              "b": 0.18431372940540314,
              "a": 1
            },
            "3771:0": {
              "r": 0,
              "g": 0.33725491166114807,
              "b": 0.5215686559677124,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3552:10893": {
          "id": "VariableID:3552:10893",
          "name": "Transport/AirportExpress/Secondary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "1fadd1e151ff714fc659e46874455374e6bc424f",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:769"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:769"
            },
            "3766:0": {
              "r": 0.42352941632270813,
              "g": 0.4941176474094391,
              "b": 0.18431372940540314,
              "a": 1
            },
            "3771:0": {
              "r": 0,
              "g": 0.33725491166114807,
              "b": 0.5215686559677124,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3552:10894": {
          "id": "VariableID:3552:10894",
          "name": "Transport/Flexible/Secondary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "105e4bd2bdb63224cb405097e3a7987d36afb2b4",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:758"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:758"
            },
            "3766:0": {
              "r": 0.4431372582912445,
              "g": 0.4431372582912445,
              "b": 0.4431372582912445,
              "a": 1
            },
            "3771:0": {
              "r": 0.9450980424880981,
              "g": 0.33725491166114807,
              "b": 0.3490196168422699,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3552:10895": {
          "id": "VariableID:3552:10895",
          "name": "Transport/Boat/Secondary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "b9f2f8a050f3fae13095bb11aacb6a5b8e87dec9",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:719"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:719"
            },
            "3766:0": {
              "r": 0.09019608050584793,
              "g": 0.46666666865348816,
              "b": 0.843137264251709,
              "a": 1
            },
            "3771:0": {
              "r": 0,
              "g": 0.49803921580314636,
              "b": 0.729411780834198,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3552:10896": {
          "id": "VariableID:3552:10896",
          "name": "Transport/Train/Secondary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "aa9c2c661e1e9a7914c6fcb0e4774e945440a372",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:742"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:742"
            },
            "3766:0": {
              "r": 0.6470588445663452,
              "g": 0.3764705955982208,
              "b": 0.5411764979362488,
              "a": 1
            },
            "3771:0": {
              "r": 0.3333333432674408,
              "g": 0.06666667014360428,
              "b": 0.14509804546833038,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3552:10897": {
          "id": "VariableID:3552:10897",
          "name": "Transport/Scooter/Secondary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "1e9ca9042666408eefeebb45fd27b4b18558ce22",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:713"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:713"
            },
            "3766:0": {
              "r": 0.27450981736183167,
              "g": 0.29019609093666077,
              "b": 0,
              "a": 1
            },
            "3771:0": {
              "r": 0.27450981736183167,
              "g": 0.29019609093666077,
              "b": 0,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3552:10898": {
          "id": "VariableID:3552:10898",
          "name": "Transport/Car/Secondary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "2616e360c67f3e348b2ab483a3ce7d66fbe7e5f6",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:741"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:741"
            },
            "3766:0": {
              "r": 0.43529412150382996,
              "g": 0.3294117748737335,
              "b": 0.40784314274787903,
              "a": 1
            },
            "3771:0": {
              "r": 0.43529412150382996,
              "g": 0.3294117748737335,
              "b": 0.40784314274787903,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3552:10899": {
          "id": "VariableID:3552:10899",
          "name": "Transport/Bike/Secondary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "4cf178114df36b750211ebdb89c0093a346ff1c7",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:770"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:770"
            },
            "3766:0": {
              "r": 0.4901960790157318,
              "g": 0.05098039284348488,
              "b": 0.1921568661928177,
              "a": 1
            },
            "3771:0": {
              "r": 0.4901960790157318,
              "g": 0.05098039284348488,
              "b": 0.1921568661928177,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3552:10900": {
          "id": "VariableID:3552:10900",
          "name": "Transport/Other/Secondary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "fe93e2ee0d0f5e62cf59c4e0ff49a09dda229aa4",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:701"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:697"
            },
            "3766:0": {
              "r": 0.4431372582912445,
              "g": 0.4431372582912445,
              "b": 0.4431372582912445,
              "a": 1
            },
            "3771:0": {
              "r": 0.3333333432674408,
              "g": 0.3686274588108063,
              "b": 0.3960784375667572,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3561:7397": {
          "id": "VariableID:3561:7397",
          "name": "_Text/Primary/WB",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "f8ea8d0aee99a3eb00c52374373eeeb92f2ec8d2",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:691"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:705"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "TEXT_FILL",
            "STROKE_COLOR"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:3561:7398": {
          "id": "VariableID:3561:7398",
          "name": "_Text/Primary/BB",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "84581095f4da26d17626aa0462ec99d97c7a549a",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:705"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:705"
            },
            "3766:0": {
              "r": 0,
              "g": 0.20392157137393951,
              "b": 0.2549019753932953,
              "a": 1
            },
            "3771:0": {
              "r": 0,
              "g": 0,
              "b": 0,
              "a": 1
            }
          },
          "scopes": [
            "TEXT_FILL",
            "STROKE_COLOR"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:4642:5334": {
          "id": "VariableID:4642:5334",
          "name": "Status/Valid/Secondary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "557667099732cf79c5f3f85baaf48cb8fe795cfc",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:706"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:712"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:4666:5482": {
          "id": "VariableID:4666:5482",
          "name": "Status/Info/Secondary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "6bc5665ed755199f80cbd450fa5ce37b3cc3bdab",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:715"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:732"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:4666:5483": {
          "id": "VariableID:4666:5483",
          "name": "Status/Warning/Secondary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "7ebb388035066629b7c6ac6dd02409cfb7f5ac06",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:743"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:714"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:4666:5484": {
          "id": "VariableID:4666:5484",
          "name": "Status/Error/Secondary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "1c3dbddd36784186734370c1f0bae4110bf1db95",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:762"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:771"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5414:691": {
          "id": "VariableID:5414:691",
          "name": "Gray/0/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "933612908671b6d2ec15c660808a6027f1a28994",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "5414:9": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "5414:10": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:692": {
          "id": "VariableID:5414:692",
          "name": "Gray/50/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "31972cf8f7733b18eea328f0a3d227a2237bced9",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.9333333373069763,
              "g": 0.9529411792755127,
              "b": 0.9647058844566345,
              "a": 1
            },
            "5414:9": {
              "r": 0.9333333373069763,
              "g": 0.9529411792755127,
              "b": 0.9647058844566345,
              "a": 1
            },
            "5414:10": {
              "r": 0.9333333373069763,
              "g": 0.9529411792755127,
              "b": 0.9647058844566345,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:693": {
          "id": "VariableID:5414:693",
          "name": "Gray/100/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "04b8604bbf0c066f3a7894a0f5d76a8ea81429da",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.8823529481887817,
              "g": 0.9058823585510254,
              "b": 0.9215686321258545,
              "a": 1
            },
            "5414:9": {
              "r": 0.8823529481887817,
              "g": 0.9058823585510254,
              "b": 0.9215686321258545,
              "a": 1
            },
            "5414:10": {
              "r": 0.8823529481887817,
              "g": 0.9058823585510254,
              "b": 0.9215686321258545,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:694": {
          "id": "VariableID:5414:694",
          "name": "Gray/150/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "2c9a8a785c6c805d838a86af2983312ffd42f26c",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.8352941274642944,
              "g": 0.8627451062202454,
              "b": 0.8784313797950745,
              "a": 1
            },
            "5414:9": {
              "r": 0.8352941274642944,
              "g": 0.8627451062202454,
              "b": 0.8784313797950745,
              "a": 1
            },
            "5414:10": {
              "r": 0.8352941274642944,
              "g": 0.8627451062202454,
              "b": 0.8784313797950745,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:695": {
          "id": "VariableID:5414:695",
          "name": "Gray/200/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "fa1af2b9ee19be5e6c6525f1fb93492528d90a26",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.7803921699523926,
              "g": 0.7921568751335144,
              "b": 0.800000011920929,
              "a": 1
            },
            "5414:9": {
              "r": 0.7803921699523926,
              "g": 0.7921568751335144,
              "b": 0.800000011920929,
              "a": 1
            },
            "5414:10": {
              "r": 0.7803921699523926,
              "g": 0.7921568751335144,
              "b": 0.800000011920929,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:696": {
          "id": "VariableID:5414:696",
          "name": "Gray/300/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "d00cf6046f7612a594b05e3435335b39eeb189bd",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.6627451181411743,
              "g": 0.6823529601097107,
              "b": 0.6941176652908325,
              "a": 1
            },
            "5414:9": {
              "r": 0.6627451181411743,
              "g": 0.6823529601097107,
              "b": 0.6941176652908325,
              "a": 1
            },
            "5414:10": {
              "r": 0.6627451181411743,
              "g": 0.6823529601097107,
              "b": 0.6941176652908325,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:697": {
          "id": "VariableID:5414:697",
          "name": "Gray/400/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "605c05c9ec1c88c4362244b185b64ae10607ff71",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.5529412031173706,
              "g": 0.5764706134796143,
              "b": 0.5960784554481506,
              "a": 1
            },
            "5414:9": {
              "r": 0.5529412031173706,
              "g": 0.5764706134796143,
              "b": 0.5960784554481506,
              "a": 1
            },
            "5414:10": {
              "r": 0.5529412031173706,
              "g": 0.5764706134796143,
              "b": 0.5960784554481506,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:698": {
          "id": "VariableID:5414:698",
          "name": "Gray/500/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "d7f8105a6d65d42fd5472f42dca159b4859ca689",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.43529412150382996,
              "g": 0.46666666865348816,
              "b": 0.4901960790157318,
              "a": 1
            },
            "5414:9": {
              "r": 0.43529412150382996,
              "g": 0.46666666865348816,
              "b": 0.4901960790157318,
              "a": 1
            },
            "5414:10": {
              "r": 0.43529412150382996,
              "g": 0.46666666865348816,
              "b": 0.4901960790157318,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:699": {
          "id": "VariableID:5414:699",
          "name": "Gray/600/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "e9a8006d47ee118b9b6adc94dba0f9006d8a9cdf",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.3333333432674408,
              "g": 0.3686274588108063,
              "b": 0.3960784375667572,
              "a": 1
            },
            "5414:9": {
              "r": 0.3333333432674408,
              "g": 0.3686274588108063,
              "b": 0.3960784375667572,
              "a": 1
            },
            "5414:10": {
              "r": 0.3333333432674408,
              "g": 0.3686274588108063,
              "b": 0.3960784375667572,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:700": {
          "id": "VariableID:5414:700",
          "name": "Gray/700/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "1f57cb7441f0fb385e6423e3ce8b029bfdc4acf8",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.21568627655506134,
              "g": 0.25882354378700256,
              "b": 0.29019609093666077,
              "a": 1
            },
            "5414:9": {
              "r": 0.21568627655506134,
              "g": 0.25882354378700256,
              "b": 0.29019609093666077,
              "a": 1
            },
            "5414:10": {
              "r": 0.21568627655506134,
              "g": 0.25882354378700256,
              "b": 0.29019609093666077,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:701": {
          "id": "VariableID:5414:701",
          "name": "Gray/800/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "11cb3cec0182fba0c1e68ee2114faa3a022287ef",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.16862745583057404,
              "g": 0.20392157137393951,
              "b": 0.22745098173618317,
              "a": 1
            },
            "5414:9": {
              "r": 0.16862745583057404,
              "g": 0.20392157137393951,
              "b": 0.22745098173618317,
              "a": 1
            },
            "5414:10": {
              "r": 0.16862745583057404,
              "g": 0.20392157137393951,
              "b": 0.22745098173618317,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:702": {
          "id": "VariableID:5414:702",
          "name": "Gray/850/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "fcfbba8b1ea9a9dbaf420101d5cde58d8147aa1e",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.1411764770746231,
              "g": 0.16862745583057404,
              "b": 0.1882352977991104,
              "a": 1
            },
            "5414:9": {
              "r": 0.1411764770746231,
              "g": 0.16862745583057404,
              "b": 0.1882352977991104,
              "a": 1
            },
            "5414:10": {
              "r": 0.1411764770746231,
              "g": 0.16862745583057404,
              "b": 0.1882352977991104,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:703": {
          "id": "VariableID:5414:703",
          "name": "Gray/900/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "7c4eac01e257361e54dc74fe9a153846065e3a51",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.10196078568696976,
              "g": 0.125490203499794,
              "b": 0.1411764770746231,
              "a": 1
            },
            "5414:9": {
              "r": 0.10196078568696976,
              "g": 0.125490203499794,
              "b": 0.1411764770746231,
              "a": 1
            },
            "5414:10": {
              "r": 0.10196078568696976,
              "g": 0.125490203499794,
              "b": 0.1411764770746231,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:704": {
          "id": "VariableID:5414:704",
          "name": "Gray/950/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "c83923c9647523cdc9403f21e8e4a4de389adad2",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.062745101749897,
              "g": 0.07450980693101883,
              "b": 0.08235294371843338,
              "a": 1
            },
            "5414:9": {
              "r": 0.062745101749897,
              "g": 0.07450980693101883,
              "b": 0.08235294371843338,
              "a": 1
            },
            "5414:10": {
              "r": 0.062745101749897,
              "g": 0.07450980693101883,
              "b": 0.08235294371843338,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:705": {
          "id": "VariableID:5414:705",
          "name": "Gray/1000/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "13e403ea31b4a40dc0e398f80b6c8e3d04a5fe75",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0,
              "g": 0,
              "b": 0,
              "a": 1
            },
            "5414:9": {
              "r": 0,
              "g": 0,
              "b": 0,
              "a": 1
            },
            "5414:10": {
              "r": 0,
              "g": 0,
              "b": 0,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:706": {
          "id": "VariableID:5414:706",
          "name": "Green/100/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "ef91971130e1878eacc65e5c57f306eeb17b0822",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.8980392217636108,
              "g": 0.9098039269447327,
              "b": 0.7215686440467834,
              "a": 1
            },
            "5414:9": {
              "r": 0.8980392217636108,
              "g": 0.9098039269447327,
              "b": 0.7215686440467834,
              "a": 1
            },
            "5414:10": {
              "r": 0.8980392217636108,
              "g": 0.9098039269447327,
              "b": 0.7215686440467834,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:707": {
          "id": "VariableID:5414:707",
          "name": "Green/200/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "1c17cb354c84ba3d5bdc249bb9dbe84816d08390",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.7882353067398071,
              "g": 0.8117647171020508,
              "b": 0.41960784792900085,
              "a": 1
            },
            "5414:9": {
              "r": 0.7882353067398071,
              "g": 0.8117647171020508,
              "b": 0.41960784792900085,
              "a": 1
            },
            "5414:10": {
              "r": 0.7882353067398071,
              "g": 0.8117647171020508,
              "b": 0.41960784792900085,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:708": {
          "id": "VariableID:5414:708",
          "name": "Green/300/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "14d39559e35f6d20001b0d72faa169ea1af5fab0",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.6352941393852234,
              "g": 0.6784313917160034,
              "b": 0,
              "a": 1
            },
            "5414:9": {
              "r": 0.6352941393852234,
              "g": 0.6784313917160034,
              "b": 0,
              "a": 1
            },
            "5414:10": {
              "r": 0.6352941393852234,
              "g": 0.6784313917160034,
              "b": 0,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:709": {
          "id": "VariableID:5414:709",
          "name": "Green/400/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "756971a35f49aa9f48b479294ce8dc9ec372514b",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.5647059082984924,
              "g": 0.6039215922355652,
              "b": 0,
              "a": 1
            },
            "5414:9": {
              "r": 0.5647059082984924,
              "g": 0.6039215922355652,
              "b": 0,
              "a": 1
            },
            "5414:10": {
              "r": 0.5647059082984924,
              "g": 0.6039215922355652,
              "b": 0,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:710": {
          "id": "VariableID:5414:710",
          "name": "Green/500/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "a86c38b8773cfd2cbb8ec64777bb2447e0554bed",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.4588235318660736,
              "g": 0.4901960790157318,
              "b": 0,
              "a": 1
            },
            "5414:9": {
              "r": 0.4588235318660736,
              "g": 0.4901960790157318,
              "b": 0,
              "a": 1
            },
            "5414:10": {
              "r": 0.4588235318660736,
              "g": 0.4901960790157318,
              "b": 0,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:711": {
          "id": "VariableID:5414:711",
          "name": "Green/600/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "73c39e531e59a10db2592ec3b6236089613159c3",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.35686275362968445,
              "g": 0.3803921639919281,
              "b": 0,
              "a": 1
            },
            "5414:9": {
              "r": 0.35686275362968445,
              "g": 0.3803921639919281,
              "b": 0,
              "a": 1
            },
            "5414:10": {
              "r": 0.35686275362968445,
              "g": 0.3803921639919281,
              "b": 0,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:712": {
          "id": "VariableID:5414:712",
          "name": "Green/700/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "899f13ee66be47c81efe71d954fa0c79ff32d044",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.27450981736183167,
              "g": 0.29019609093666077,
              "b": 0,
              "a": 1
            },
            "5414:9": {
              "r": 0.27450981736183167,
              "g": 0.29019609093666077,
              "b": 0,
              "a": 1
            },
            "5414:10": {
              "r": 0.27450981736183167,
              "g": 0.29019609093666077,
              "b": 0,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:713": {
          "id": "VariableID:5414:713",
          "name": "Green/800/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "4c4e96505e0250131ae6f7a7c305edd7ea28149b",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.19607843458652496,
              "g": 0.21176470816135406,
              "b": 0,
              "a": 1
            },
            "5414:9": {
              "r": 0.19607843458652496,
              "g": 0.21176470816135406,
              "b": 0,
              "a": 1
            },
            "5414:10": {
              "r": 0.19607843458652496,
              "g": 0.21176470816135406,
              "b": 0,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:714": {
          "id": "VariableID:5414:714",
          "name": "Green/900/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "533a9ea2c21f279fdd8cd4afe8b90b468f83ff00",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.12156862765550613,
              "g": 0.12941177189350128,
              "b": 0,
              "a": 1
            },
            "5414:9": {
              "r": 0.12156862765550613,
              "g": 0.12941177189350128,
              "b": 0,
              "a": 1
            },
            "5414:10": {
              "r": 0.12156862765550613,
              "g": 0.12941177189350128,
              "b": 0,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:715": {
          "id": "VariableID:5414:715",
          "name": "Cyan/50/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "3651676889b659168a4f8ea8369d29fb342cf1d4",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.8705882430076599,
              "g": 0.9607843160629272,
              "b": 0.9725490212440491,
              "a": 1
            },
            "5414:9": {
              "r": 0.8705882430076599,
              "g": 0.9607843160629272,
              "b": 0.9725490212440491,
              "a": 1
            },
            "5414:10": {
              "r": 0.8705882430076599,
              "g": 0.9607843160629272,
              "b": 0.9725490212440491,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:716": {
          "id": "VariableID:5414:716",
          "name": "Cyan/100/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "da46253a0016a84e5891c88d582693bac4ac8622",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.7490196228027344,
              "g": 0.929411768913269,
              "b": 0.9450980424880981,
              "a": 1
            },
            "5414:9": {
              "r": 0.7490196228027344,
              "g": 0.929411768913269,
              "b": 0.9450980424880981,
              "a": 1
            },
            "5414:10": {
              "r": 0.7490196228027344,
              "g": 0.929411768913269,
              "b": 0.9450980424880981,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:717": {
          "id": "VariableID:5414:717",
          "name": "Cyan/200/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "ca203277036c74d67e85231af500d8e231870e0c",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.4431372582912445,
              "g": 0.8392156958580017,
              "b": 0.8784313797950745,
              "a": 1
            },
            "5414:9": {
              "r": 0.4431372582912445,
              "g": 0.8392156958580017,
              "b": 0.8784313797950745,
              "a": 1
            },
            "5414:10": {
              "r": 0.4431372582912445,
              "g": 0.8392156958580017,
              "b": 0.8784313797950745,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:718": {
          "id": "VariableID:5414:718",
          "name": "Cyan/300/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "a15e816231ed2dc88dc84cbc6e169116908f45f4",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.3843137323856354,
              "g": 0.729411780834198,
              "b": 0.7647058963775635,
              "a": 1
            },
            "5414:9": {
              "r": 0.3843137323856354,
              "g": 0.729411780834198,
              "b": 0.7647058963775635,
              "a": 1
            },
            "5414:10": {
              "r": 0.3843137323856354,
              "g": 0.729411780834198,
              "b": 0.7647058963775635,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:719": {
          "id": "VariableID:5414:719",
          "name": "Cyan/400/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "5f43e9aa1134fd337817e83a67ec01d7659a6243",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.32549020648002625,
              "g": 0.6117647290229797,
              "b": 0.6431372761726379,
              "a": 1
            },
            "5414:9": {
              "r": 0.32549020648002625,
              "g": 0.6117647290229797,
              "b": 0.6431372761726379,
              "a": 1
            },
            "5414:10": {
              "r": 0.32549020648002625,
              "g": 0.6117647290229797,
              "b": 0.6431372761726379,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:720": {
          "id": "VariableID:5414:720",
          "name": "Cyan/500/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "d08da877470f1393bfe5f03ec4632da784d47549",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.2666666805744171,
              "g": 0.501960813999176,
              "b": 0.5254902243614197,
              "a": 1
            },
            "5414:9": {
              "r": 0.2666666805744171,
              "g": 0.501960813999176,
              "b": 0.5254902243614197,
              "a": 1
            },
            "5414:10": {
              "r": 0.2666666805744171,
              "g": 0.501960813999176,
              "b": 0.5254902243614197,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:721": {
          "id": "VariableID:5414:721",
          "name": "Cyan/600/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "c02c67ad99c2ded362648071942123e1dcbbd14e",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.2078431397676468,
              "g": 0.3960784375667572,
              "b": 0.4117647111415863,
              "a": 1
            },
            "5414:9": {
              "r": 0.2078431397676468,
              "g": 0.3960784375667572,
              "b": 0.4117647111415863,
              "a": 1
            },
            "5414:10": {
              "r": 0.2078431397676468,
              "g": 0.3960784375667572,
              "b": 0.4117647111415863,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:722": {
          "id": "VariableID:5414:722",
          "name": "Cyan/700/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "734270de8a65e050b6a1cc78781c735a1b3a2178",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.16078431904315948,
              "g": 0.3019607961177826,
              "b": 0.3176470696926117,
              "a": 1
            },
            "5414:9": {
              "r": 0.16078431904315948,
              "g": 0.3019607961177826,
              "b": 0.3176470696926117,
              "a": 1
            },
            "5414:10": {
              "r": 0.16078431904315948,
              "g": 0.3019607961177826,
              "b": 0.3176470696926117,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:723": {
          "id": "VariableID:5414:723",
          "name": "Cyan/800/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "5e6c4fca3f0c392db992114c7c3687a69a2bec77",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.11372549086809158,
              "g": 0.21960784494876862,
              "b": 0.22745098173618317,
              "a": 1
            },
            "5414:9": {
              "r": 0.11372549086809158,
              "g": 0.21960784494876862,
              "b": 0.22745098173618317,
              "a": 1
            },
            "5414:10": {
              "r": 0.11372549086809158,
              "g": 0.21960784494876862,
              "b": 0.22745098173618317,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:724": {
          "id": "VariableID:5414:724",
          "name": "Cyan/900/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "a8ad01c35e9b7a48ec97393aa0d97c21435e0599",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.07058823853731155,
              "g": 0.13333334028720856,
              "b": 0.1411764770746231,
              "a": 1
            },
            "5414:9": {
              "r": 0.07058823853731155,
              "g": 0.13333334028720856,
              "b": 0.1411764770746231,
              "a": 1
            },
            "5414:10": {
              "r": 0.07058823853731155,
              "g": 0.13333334028720856,
              "b": 0.1411764770746231,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:725": {
          "id": "VariableID:5414:725",
          "name": "Blue/100/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "95cad35362a019ed5df03a72a32e06dca36b6dc8",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.8313725590705872,
              "g": 0.9137254953384399,
              "b": 0.9254902005195618,
              "a": 1
            },
            "5414:9": {
              "r": 0.8313725590705872,
              "g": 0.9137254953384399,
              "b": 0.9254902005195618,
              "a": 1
            },
            "5414:10": {
              "r": 0.8313725590705872,
              "g": 0.9137254953384399,
              "b": 0.9254902005195618,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:726": {
          "id": "VariableID:5414:726",
          "name": "Blue/200/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "cf3d6b5c888a9475537645f21ee859da3da71129",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.6509804129600525,
              "g": 0.8196078538894653,
              "b": 0.8509804010391235,
              "a": 1
            },
            "5414:9": {
              "r": 0.6509804129600525,
              "g": 0.8196078538894653,
              "b": 0.8509804010391235,
              "a": 1
            },
            "5414:10": {
              "r": 0.6509804129600525,
              "g": 0.8196078538894653,
              "b": 0.8509804010391235,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:727": {
          "id": "VariableID:5414:727",
          "name": "Blue/300/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "7597b1e78d9e211c081ceb5c3f206ffb6a345f08",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.4588235318660736,
              "g": 0.7215686440467834,
              "b": 0.7686274647712708,
              "a": 1
            },
            "5414:9": {
              "r": 0.4588235318660736,
              "g": 0.7215686440467834,
              "b": 0.7686274647712708,
              "a": 1
            },
            "5414:10": {
              "r": 0.4588235318660736,
              "g": 0.7215686440467834,
              "b": 0.7686274647712708,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:728": {
          "id": "VariableID:5414:728",
          "name": "Blue/400/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "b5b19fb957a13d10d9477a3fa5a04a88f47de2e5",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.25882354378700256,
              "g": 0.6196078658103943,
              "b": 0.6823529601097107,
              "a": 1
            },
            "5414:9": {
              "r": 0.25882354378700256,
              "g": 0.6196078658103943,
              "b": 0.6823529601097107,
              "a": 1
            },
            "5414:10": {
              "r": 0.25882354378700256,
              "g": 0.6196078658103943,
              "b": 0.6823529601097107,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:729": {
          "id": "VariableID:5414:729",
          "name": "Blue/500/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "cebc0365d10738a04b5c186d3004e877faafaa57",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0,
              "g": 0.48627451062202454,
              "b": 0.572549045085907,
              "a": 1
            },
            "5414:9": {
              "r": 0,
              "g": 0.48627451062202454,
              "b": 0.572549045085907,
              "a": 1
            },
            "5414:10": {
              "r": 0,
              "g": 0.48627451062202454,
              "b": 0.572549045085907,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:730": {
          "id": "VariableID:5414:730",
          "name": "Blue/600/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "462eeea9dfec8293a2d948e2ab1c920771ac3fe3",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0,
              "g": 0.4000000059604645,
              "b": 0.47058823704719543,
              "a": 1
            },
            "5414:9": {
              "r": 0,
              "g": 0.4000000059604645,
              "b": 0.47058823704719543,
              "a": 1
            },
            "5414:10": {
              "r": 0,
              "g": 0.4000000059604645,
              "b": 0.47058823704719543,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:731": {
          "id": "VariableID:5414:731",
          "name": "Blue/700/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "0708b23904a522f4f20f14403efa1707bd73b843",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0,
              "g": 0.30588236451148987,
              "b": 0.3607843220233917,
              "a": 1
            },
            "5414:9": {
              "r": 0,
              "g": 0.30588236451148987,
              "b": 0.3607843220233917,
              "a": 1
            },
            "5414:10": {
              "r": 0,
              "g": 0.30588236451148987,
              "b": 0.3607843220233917,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:732": {
          "id": "VariableID:5414:732",
          "name": "Blue/800/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "a935e57c7f0b715bf059ba24c4f955d3698fd325",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0,
              "g": 0.2235294133424759,
              "b": 0.26274511218070984,
              "a": 1
            },
            "5414:9": {
              "r": 0,
              "g": 0.2235294133424759,
              "b": 0.26274511218070984,
              "a": 1
            },
            "5414:10": {
              "r": 0,
              "g": 0.2235294133424759,
              "b": 0.26274511218070984,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:733": {
          "id": "VariableID:5414:733",
          "name": "Blue/900/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "4b9c7511e6686516ce69f1c796297982a9684435",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0,
              "g": 0.13725490868091583,
              "b": 0.16078431904315948,
              "a": 1
            },
            "5414:9": {
              "r": 0,
              "g": 0.13725490868091583,
              "b": 0.16078431904315948,
              "a": 1
            },
            "5414:10": {
              "r": 0,
              "g": 0.13725490868091583,
              "b": 0.16078431904315948,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:734": {
          "id": "VariableID:5414:734",
          "name": "Burgundy/100/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "c48617e0db14af2b3b344b2bb119334a2f3bdc18",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.9098039269447327,
              "g": 0.8901960849761963,
              "b": 0.9019607901573181,
              "a": 1
            },
            "5414:9": {
              "r": 0.9098039269447327,
              "g": 0.8901960849761963,
              "b": 0.9019607901573181,
              "a": 1
            },
            "5414:10": {
              "r": 0.9098039269447327,
              "g": 0.8901960849761963,
              "b": 0.9019607901573181,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:735": {
          "id": "VariableID:5414:735",
          "name": "Burgundy/200/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "1578bf10dd5a16302e8d1b12267deb8b91fa9dfe",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.8156862854957581,
              "g": 0.7803921699523926,
              "b": 0.8078431487083435,
              "a": 1
            },
            "5414:9": {
              "r": 0.8156862854957581,
              "g": 0.7803921699523926,
              "b": 0.8078431487083435,
              "a": 1
            },
            "5414:10": {
              "r": 0.8156862854957581,
              "g": 0.7803921699523926,
              "b": 0.8078431487083435,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:736": {
          "id": "VariableID:5414:736",
          "name": "Burgundy/300/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "5cf5f1932bca3d2a9394ccab892e0d97e4475e76",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.7176470756530762,
              "g": 0.6627451181411743,
              "b": 0.7019608020782471,
              "a": 1
            },
            "5414:9": {
              "r": 0.7176470756530762,
              "g": 0.6627451181411743,
              "b": 0.7019608020782471,
              "a": 1
            },
            "5414:10": {
              "r": 0.7176470756530762,
              "g": 0.6627451181411743,
              "b": 0.7019608020782471,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:737": {
          "id": "VariableID:5414:737",
          "name": "Burgundy/400/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "20ee5e0bf320121e94891f8606fa514d14e8eb49",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.6274510025978088,
              "g": 0.5568627715110779,
              "b": 0.6078431606292725,
              "a": 1
            },
            "5414:9": {
              "r": 0.6274510025978088,
              "g": 0.5568627715110779,
              "b": 0.6078431606292725,
              "a": 1
            },
            "5414:10": {
              "r": 0.6274510025978088,
              "g": 0.5568627715110779,
              "b": 0.6078431606292725,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:738": {
          "id": "VariableID:5414:738",
          "name": "Burgundy/500/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "0cd0c117f9a9fa8f750e1f9522448fbb15e5b381",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.5254902243614197,
              "g": 0.43921568989753723,
              "b": 0.501960813999176,
              "a": 1
            },
            "5414:9": {
              "r": 0.5254902243614197,
              "g": 0.43921568989753723,
              "b": 0.501960813999176,
              "a": 1
            },
            "5414:10": {
              "r": 0.5254902243614197,
              "g": 0.43921568989753723,
              "b": 0.501960813999176,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:739": {
          "id": "VariableID:5414:739",
          "name": "Burgundy/600/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "69b964db58978f28fe7957ead91192defeb8114f",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.43529412150382996,
              "g": 0.3294117748737335,
              "b": 0.40784314274787903,
              "a": 1
            },
            "5414:9": {
              "r": 0.43529412150382996,
              "g": 0.3294117748737335,
              "b": 0.40784314274787903,
              "a": 1
            },
            "5414:10": {
              "r": 0.43529412150382996,
              "g": 0.3294117748737335,
              "b": 0.40784314274787903,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:740": {
          "id": "VariableID:5414:740",
          "name": "Burgundy/700/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "05a0fe5c262a4a0c8a16c383a75cb24b80d29ede",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.35686275362968445,
              "g": 0.23529411852359772,
              "b": 0.32549020648002625,
              "a": 1
            },
            "5414:9": {
              "r": 0.35686275362968445,
              "g": 0.23529411852359772,
              "b": 0.32549020648002625,
              "a": 1
            },
            "5414:10": {
              "r": 0.35686275362968445,
              "g": 0.23529411852359772,
              "b": 0.32549020648002625,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:741": {
          "id": "VariableID:5414:741",
          "name": "Burgundy/800/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "288b49f74710c1142190102a10fad71d6958a61b",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.29411765933036804,
              "g": 0.16078431904315948,
              "b": 0.25882354378700256,
              "a": 1
            },
            "5414:9": {
              "r": 0.29411765933036804,
              "g": 0.16078431904315948,
              "b": 0.25882354378700256,
              "a": 1
            },
            "5414:10": {
              "r": 0.29411765933036804,
              "g": 0.16078431904315948,
              "b": 0.25882354378700256,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:742": {
          "id": "VariableID:5414:742",
          "name": "Burgundy/900/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "88af9287e025349b86c9bb793a6a4afad6a48265",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.1725490242242813,
              "g": 0.0941176488995552,
              "b": 0.15294118225574493,
              "a": 1
            },
            "5414:9": {
              "r": 0.1725490242242813,
              "g": 0.0941176488995552,
              "b": 0.15294118225574493,
              "a": 1
            },
            "5414:10": {
              "r": 0.1725490242242813,
              "g": 0.0941176488995552,
              "b": 0.15294118225574493,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:743": {
          "id": "VariableID:5414:743",
          "name": "Yellow/50/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "06aff3aa28e74b52b24e66c879a9df7cc4bfaca2",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.9843137264251709,
              "g": 0.9764705896377563,
              "b": 0.8549019694328308,
              "a": 1
            },
            "5414:9": {
              "r": 0.9843137264251709,
              "g": 0.9764705896377563,
              "b": 0.8549019694328308,
              "a": 1
            },
            "5414:10": {
              "r": 0.9843137264251709,
              "g": 0.9764705896377563,
              "b": 0.8549019694328308,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:744": {
          "id": "VariableID:5414:744",
          "name": "Yellow/100/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "63d440b70c54129596512ec6c2743e95dad55475",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.9411764740943909,
              "g": 0.9137254953384399,
              "b": 0.45098039507865906,
              "a": 1
            },
            "5414:9": {
              "r": 0.9411764740943909,
              "g": 0.9137254953384399,
              "b": 0.45098039507865906,
              "a": 1
            },
            "5414:10": {
              "r": 0.9411764740943909,
              "g": 0.9137254953384399,
              "b": 0.45098039507865906,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:745": {
          "id": "VariableID:5414:745",
          "name": "Yellow/200/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "28ee47dcaacb1641905a7e924de55480be0dd162",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.8941176533699036,
              "g": 0.843137264251709,
              "b": 0,
              "a": 1
            },
            "5414:9": {
              "r": 0.8941176533699036,
              "g": 0.843137264251709,
              "b": 0,
              "a": 1
            },
            "5414:10": {
              "r": 0.8941176533699036,
              "g": 0.843137264251709,
              "b": 0,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:746": {
          "id": "VariableID:5414:746",
          "name": "Yellow/300/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "54c3544b7d9ec6bcb88367c8106c4bb26be46dbc",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.7764706015586853,
              "g": 0.6823529601097107,
              "b": 0,
              "a": 1
            },
            "5414:9": {
              "r": 0.7764706015586853,
              "g": 0.6823529601097107,
              "b": 0,
              "a": 1
            },
            "5414:10": {
              "r": 0.7764706015586853,
              "g": 0.6823529601097107,
              "b": 0,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:747": {
          "id": "VariableID:5414:747",
          "name": "Yellow/400/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "11e2be9a2828f02e2c2807206580ab2f80ff38ca",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.686274528503418,
              "g": 0.5647059082984924,
              "b": 0,
              "a": 1
            },
            "5414:9": {
              "r": 0.686274528503418,
              "g": 0.5647059082984924,
              "b": 0,
              "a": 1
            },
            "5414:10": {
              "r": 0.686274528503418,
              "g": 0.5647059082984924,
              "b": 0,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:748": {
          "id": "VariableID:5414:748",
          "name": "Yellow/500/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "5216fea12bde8a97b17e623163966cb6e3e86890",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.5921568870544434,
              "g": 0.43921568989753723,
              "b": 0,
              "a": 1
            },
            "5414:9": {
              "r": 0.5921568870544434,
              "g": 0.43921568989753723,
              "b": 0,
              "a": 1
            },
            "5414:10": {
              "r": 0.5921568870544434,
              "g": 0.43921568989753723,
              "b": 0,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:749": {
          "id": "VariableID:5414:749",
          "name": "Yellow/600/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "f7147bf5751f1f9e2f044eafa6767207afdf9fa9",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.5058823823928833,
              "g": 0.32156863808631897,
              "b": 0,
              "a": 1
            },
            "5414:9": {
              "r": 0.5058823823928833,
              "g": 0.32156863808631897,
              "b": 0,
              "a": 1
            },
            "5414:10": {
              "r": 0.5058823823928833,
              "g": 0.32156863808631897,
              "b": 0,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:750": {
          "id": "VariableID:5414:750",
          "name": "Yellow/700/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "acf619b88f097e24047bb75a3af626e1e8f6307a",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.43529412150382996,
              "g": 0.22745098173618317,
              "b": 0,
              "a": 1
            },
            "5414:9": {
              "r": 0.43529412150382996,
              "g": 0.22745098173618317,
              "b": 0,
              "a": 1
            },
            "5414:10": {
              "r": 0.43529412150382996,
              "g": 0.22745098173618317,
              "b": 0,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:751": {
          "id": "VariableID:5414:751",
          "name": "Yellow/800/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "b51918677f675262e9c9b93628b29d5f08a13069",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.3607843220233917,
              "g": 0.125490203499794,
              "b": 0,
              "a": 1
            },
            "5414:9": {
              "r": 0.3607843220233917,
              "g": 0.125490203499794,
              "b": 0,
              "a": 1
            },
            "5414:10": {
              "r": 0.3607843220233917,
              "g": 0.125490203499794,
              "b": 0,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:752": {
          "id": "VariableID:5414:752",
          "name": "Yellow/900/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "74802df6b8711fe5b2173efefd835e8c0ce8a129",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.27450981736183167,
              "g": 0.007843137718737125,
              "b": 0,
              "a": 1
            },
            "5414:9": {
              "r": 0.27450981736183167,
              "g": 0.007843137718737125,
              "b": 0,
              "a": 1
            },
            "5414:10": {
              "r": 0.27450981736183167,
              "g": 0.007843137718737125,
              "b": 0,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:753": {
          "id": "VariableID:5414:753",
          "name": "Orange/100/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "9dfd7be4746d0f665a285670b6e6fd3e0f9471f7",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.9607843160629272,
              "g": 0.8823529481887817,
              "b": 0.8313725590705872,
              "a": 1
            },
            "5414:9": {
              "r": 0.9607843160629272,
              "g": 0.8823529481887817,
              "b": 0.8313725590705872,
              "a": 1
            },
            "5414:10": {
              "r": 0.9607843160629272,
              "g": 0.8823529481887817,
              "b": 0.8313725590705872,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:754": {
          "id": "VariableID:5414:754",
          "name": "Orange/200/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "c594ced9141247f8f02b9a92605b0770e505e84d",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.9176470637321472,
              "g": 0.7568627595901489,
              "b": 0.6470588445663452,
              "a": 1
            },
            "5414:9": {
              "r": 0.9176470637321472,
              "g": 0.7568627595901489,
              "b": 0.6470588445663452,
              "a": 1
            },
            "5414:10": {
              "r": 0.9176470637321472,
              "g": 0.7568627595901489,
              "b": 0.6470588445663452,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:755": {
          "id": "VariableID:5414:755",
          "name": "Orange/300/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "232dbd005fd1ddbd9dc300bc9707bf7a9f3bff32",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.8705882430076599,
              "g": 0.6274510025978088,
              "b": 0.4627451002597809,
              "a": 1
            },
            "5414:9": {
              "r": 0.8705882430076599,
              "g": 0.6274510025978088,
              "b": 0.4627451002597809,
              "a": 1
            },
            "5414:10": {
              "r": 0.8705882430076599,
              "g": 0.6274510025978088,
              "b": 0.4627451002597809,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:756": {
          "id": "VariableID:5414:756",
          "name": "Orange/400/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "dadafa7cc4865aeedc613ecf99a1268470f5f21f",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.8235294222831726,
              "g": 0.48627451062202454,
              "b": 0.2549019753932953,
              "a": 1
            },
            "5414:9": {
              "r": 0.8235294222831726,
              "g": 0.48627451062202454,
              "b": 0.2549019753932953,
              "a": 1
            },
            "5414:10": {
              "r": 0.8235294222831726,
              "g": 0.48627451062202454,
              "b": 0.2549019753932953,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:757": {
          "id": "VariableID:5414:757",
          "name": "Orange/500/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "5d1f393e43f38ed13088953b3c5462650c7d1a09",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.7803921699523926,
              "g": 0.35686275362968445,
              "b": 0.07058823853731155,
              "a": 1
            },
            "5414:9": {
              "r": 0.7803921699523926,
              "g": 0.35686275362968445,
              "b": 0.07058823853731155,
              "a": 1
            },
            "5414:10": {
              "r": 0.7803921699523926,
              "g": 0.35686275362968445,
              "b": 0.07058823853731155,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:758": {
          "id": "VariableID:5414:758",
          "name": "Orange/600/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "eef8f1bcf873f0501f7dfc7322e29cda9e3833b2",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.5921568870544434,
              "g": 0.2705882489681244,
              "b": 0.054901961237192154,
              "a": 1
            },
            "5414:9": {
              "r": 0.5921568870544434,
              "g": 0.2705882489681244,
              "b": 0.054901961237192154,
              "a": 1
            },
            "5414:10": {
              "r": 0.5921568870544434,
              "g": 0.2705882489681244,
              "b": 0.054901961237192154,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:759": {
          "id": "VariableID:5414:759",
          "name": "Orange/700/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "2c54b235f8a2e63214df471c84da6d0337a7edd1",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.45098039507865906,
              "g": 0.2078431397676468,
              "b": 0.03921568766236305,
              "a": 1
            },
            "5414:9": {
              "r": 0.45098039507865906,
              "g": 0.2078431397676468,
              "b": 0.03921568766236305,
              "a": 1
            },
            "5414:10": {
              "r": 0.45098039507865906,
              "g": 0.2078431397676468,
              "b": 0.03921568766236305,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:760": {
          "id": "VariableID:5414:760",
          "name": "Orange/800/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "96fa4758bbf024a66d61a884db7950c2b6ec2643",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.3294117748737335,
              "g": 0.14901961386203766,
              "b": 0.0313725508749485,
              "a": 1
            },
            "5414:9": {
              "r": 0.3294117748737335,
              "g": 0.14901961386203766,
              "b": 0.0313725508749485,
              "a": 1
            },
            "5414:10": {
              "r": 0.3294117748737335,
              "g": 0.14901961386203766,
              "b": 0.0313725508749485,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:761": {
          "id": "VariableID:5414:761",
          "name": "Orange/900/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "24b3bd616b7e04592857899333be3cb69c133a86",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.20392157137393951,
              "g": 0.0941176488995552,
              "b": 0.019607843831181526,
              "a": 1
            },
            "5414:9": {
              "r": 0.20392157137393951,
              "g": 0.0941176488995552,
              "b": 0.019607843831181526,
              "a": 1
            },
            "5414:10": {
              "r": 0.20392157137393951,
              "g": 0.0941176488995552,
              "b": 0.019607843831181526,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:762": {
          "id": "VariableID:5414:762",
          "name": "Red/50/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "9bde719b0e5084517f0ed9f470cf054a36223983",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.95686274766922,
              "g": 0.8823529481887817,
              "b": 0.9058823585510254,
              "a": 1
            },
            "5414:9": {
              "r": 0.95686274766922,
              "g": 0.8823529481887817,
              "b": 0.9058823585510254,
              "a": 1
            },
            "5414:10": {
              "r": 0.95686274766922,
              "g": 0.8823529481887817,
              "b": 0.9058823585510254,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:763": {
          "id": "VariableID:5414:763",
          "name": "Red/100/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "51ab1b0c0f265ed71b8d9801c194f78c1636a7ec",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.9333333373069763,
              "g": 0.8235294222831726,
              "b": 0.8588235378265381,
              "a": 1
            },
            "5414:9": {
              "r": 0.9333333373069763,
              "g": 0.8235294222831726,
              "b": 0.8588235378265381,
              "a": 1
            },
            "5414:10": {
              "r": 0.9333333373069763,
              "g": 0.8235294222831726,
              "b": 0.8588235378265381,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:764": {
          "id": "VariableID:5414:764",
          "name": "Red/200/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "1aa4f9cd7838a28781d220ea99086dfdd085a515",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.8941176533699036,
              "g": 0.7215686440467834,
              "b": 0.7764706015586853,
              "a": 1
            },
            "5414:9": {
              "r": 0.8941176533699036,
              "g": 0.7215686440467834,
              "b": 0.7764706015586853,
              "a": 1
            },
            "5414:10": {
              "r": 0.8941176533699036,
              "g": 0.7215686440467834,
              "b": 0.7764706015586853,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:765": {
          "id": "VariableID:5414:765",
          "name": "Red/300/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "b9b7082d2078886928f135f7ee2a301d3aced591",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.8392156958580017,
              "g": 0.572549045085907,
              "b": 0.6549019813537598,
              "a": 1
            },
            "5414:9": {
              "r": 0.8392156958580017,
              "g": 0.572549045085907,
              "b": 0.6549019813537598,
              "a": 1
            },
            "5414:10": {
              "r": 0.8392156958580017,
              "g": 0.572549045085907,
              "b": 0.6549019813537598,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:766": {
          "id": "VariableID:5414:766",
          "name": "Red/400/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "08bbf1fc528cd3ee8b6cf990dfc8eaca0334054a",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.7803921699523926,
              "g": 0.41960784792900085,
              "b": 0.5372549295425415,
              "a": 1
            },
            "5414:9": {
              "r": 0.7803921699523926,
              "g": 0.41960784792900085,
              "b": 0.5372549295425415,
              "a": 1
            },
            "5414:10": {
              "r": 0.7803921699523926,
              "g": 0.41960784792900085,
              "b": 0.5372549295425415,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:767": {
          "id": "VariableID:5414:767",
          "name": "Red/500/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "cef2175f0b780392804f5ac61a8128c72ac33a04",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.7176470756530762,
              "g": 0.2549019753932953,
              "b": 0.4000000059604645,
              "a": 1
            },
            "5414:9": {
              "r": 0.7176470756530762,
              "g": 0.2549019753932953,
              "b": 0.4000000059604645,
              "a": 1
            },
            "5414:10": {
              "r": 0.7176470756530762,
              "g": 0.2549019753932953,
              "b": 0.4000000059604645,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:768": {
          "id": "VariableID:5414:768",
          "name": "Red/600/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "a7ff7e46c620e71d73ea87f3de5d66dfe93e6498",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.6470588445663452,
              "g": 0.06666667014360428,
              "b": 0.250980406999588,
              "a": 1
            },
            "5414:9": {
              "r": 0.6470588445663452,
              "g": 0.06666667014360428,
              "b": 0.250980406999588,
              "a": 1
            },
            "5414:10": {
              "r": 0.6470588445663452,
              "g": 0.06666667014360428,
              "b": 0.250980406999588,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:769": {
          "id": "VariableID:5414:769",
          "name": "Red/700/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "39218125a46fed8434ac08818319557626ee1390",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.4901960790157318,
              "g": 0.05098039284348488,
              "b": 0.1921568661928177,
              "a": 1
            },
            "5414:9": {
              "r": 0.4901960790157318,
              "g": 0.05098039284348488,
              "b": 0.1921568661928177,
              "a": 1
            },
            "5414:10": {
              "r": 0.4901960790157318,
              "g": 0.05098039284348488,
              "b": 0.1921568661928177,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:770": {
          "id": "VariableID:5414:770",
          "name": "Red/800/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "5718a33a5b49a7b8a261c3beaf5ddb38f179a88d",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.3607843220233917,
              "g": 0.03921568766236305,
              "b": 0.1411764770746231,
              "a": 1
            },
            "5414:9": {
              "r": 0.3607843220233917,
              "g": 0.03921568766236305,
              "b": 0.1411764770746231,
              "a": 1
            },
            "5414:10": {
              "r": 0.3607843220233917,
              "g": 0.03921568766236305,
              "b": 0.1411764770746231,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:771": {
          "id": "VariableID:5414:771",
          "name": "Red/900/Background",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "8a81389f410c28611f1e455d3bca9cdca5151191",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "r": 0.21960784494876862,
              "g": 0.0235294122248888,
              "b": 0.08627451211214066,
              "a": 1
            },
            "5414:9": {
              "r": 0.21960784494876862,
              "g": 0.0235294122248888,
              "b": 0.08627451211214066,
              "a": 1
            },
            "5414:10": {
              "r": 0.21960784494876862,
              "g": 0.0235294122248888,
              "b": 0.08627451211214066,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:860": {
          "id": "VariableID:5414:860",
          "name": "Gray/0/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "62a6e84d31565685179282f751fdb3551d839a97",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:861": {
          "id": "VariableID:5414:861",
          "name": "Gray/50/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "7c7965d0c546c88787ecfe2adaf3c0caf21a91bd",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:862": {
          "id": "VariableID:5414:862",
          "name": "Gray/100/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "381790bf189027bbd3ad8670adb0ed71f9498877",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:863": {
          "id": "VariableID:5414:863",
          "name": "Gray/150/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "0241aee3540c0609073afab9f0e0c252fdb73c91",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:864": {
          "id": "VariableID:5414:864",
          "name": "Gray/200/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "ddea44d065a5b25bbee372835e62f8b14176e5ee",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:865": {
          "id": "VariableID:5414:865",
          "name": "Gray/300/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "e01a12d592d23d09476d451f63b7f08b07e97095",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:866": {
          "id": "VariableID:5414:866",
          "name": "Gray/400/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "7b7eb2f93d85c29cc81f84f4dafea700ebae9678",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:867": {
          "id": "VariableID:5414:867",
          "name": "Gray/500/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "e0103d4c50f0435f816a4a57bd3488e69c824e4d",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:868": {
          "id": "VariableID:5414:868",
          "name": "Gray/600/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "8fa2398b2ef6ad7eed34130a8db820de15adfc8a",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:869": {
          "id": "VariableID:5414:869",
          "name": "Gray/700/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "8ce58012eb9c613747a94eb3f42bc352216823d7",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:870": {
          "id": "VariableID:5414:870",
          "name": "Gray/800/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "f393f9409f0c28ddd91604fd6be9d95c6a3b234e",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:871": {
          "id": "VariableID:5414:871",
          "name": "Gray/850/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "1e24e0fc6abef9a25fbadeba3728b69a42403beb",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:872": {
          "id": "VariableID:5414:872",
          "name": "Gray/900/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "4995ae7139f196b7076eed28cdcf85d774217960",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:873": {
          "id": "VariableID:5414:873",
          "name": "Gray/950/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "f0da1c331036c47f02251845b3546b4c2bd85943",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:874": {
          "id": "VariableID:5414:874",
          "name": "Gray/1000/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "a0579ccab3dddccc3666750ef957ab74fc3409f9",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:875": {
          "id": "VariableID:5414:875",
          "name": "Green/100/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "7e0e20c0b41ebc65da144d380f37e138370a415c",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:876": {
          "id": "VariableID:5414:876",
          "name": "Green/200/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "2da35e98d760936ea201ef717930c4eba461a53e",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:877": {
          "id": "VariableID:5414:877",
          "name": "Green/300/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "76218c2bcf4291c7664d0222b48964d028668a66",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:878": {
          "id": "VariableID:5414:878",
          "name": "Green/400/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "5389be827dcd6e225902ac619d772ec25a8bb028",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:879": {
          "id": "VariableID:5414:879",
          "name": "Green/500/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "71b7a2e25514419b02a9a2ae33bd875cd39149ab",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:880": {
          "id": "VariableID:5414:880",
          "name": "Green/600/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "1bed0d1cdc2f8c4eba68722da43b0aeade4804c4",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:881": {
          "id": "VariableID:5414:881",
          "name": "Green/700/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "cc1bc31cb0a822fca84dd0ce40f5bcdeb6c22629",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:882": {
          "id": "VariableID:5414:882",
          "name": "Green/800/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "534d120f365e3ec3f134e91facadf13509f86292",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:883": {
          "id": "VariableID:5414:883",
          "name": "Green/900/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "998baa011db0688bb5404337560e53474c7d1bc8",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:884": {
          "id": "VariableID:5414:884",
          "name": "Cyan/50/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "a6cdec741a7708dff8387e439113c599ae72dda9",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:885": {
          "id": "VariableID:5414:885",
          "name": "Cyan/100/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "4ca2ce0c325fe0dbab7096437a9dec55df339675",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:886": {
          "id": "VariableID:5414:886",
          "name": "Cyan/200/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "081547d5c20cf9909b59cf5eea3b8c25542c3074",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:887": {
          "id": "VariableID:5414:887",
          "name": "Cyan/300/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "004317504aec747a9c8fa1ef86337363401100dc",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:888": {
          "id": "VariableID:5414:888",
          "name": "Cyan/400/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "d924770483671e9085492bf0c1924ed5197342fb",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:889": {
          "id": "VariableID:5414:889",
          "name": "Cyan/500/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "995fabd400739a9de887a3253c063f2ab587709f",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:890": {
          "id": "VariableID:5414:890",
          "name": "Cyan/600/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "8040f43e74f08ed8477be176e4c3f22f78cf368f",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:891": {
          "id": "VariableID:5414:891",
          "name": "Cyan/700/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "94abc6e2c926b3b38c3fa62e59f161f49c3cc497",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:892": {
          "id": "VariableID:5414:892",
          "name": "Cyan/800/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "657812c819cf478dcbb6228fb9bde9750a8903b5",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:893": {
          "id": "VariableID:5414:893",
          "name": "Cyan/900/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "6c583be30be59dd670f7f748d7b70a678c130eb5",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:894": {
          "id": "VariableID:5414:894",
          "name": "Blue/100/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "2c55e588b4543a1e40a16b813f26b8e5157e8151",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:895": {
          "id": "VariableID:5414:895",
          "name": "Blue/200/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "22da7bafd1b53f6dbdc2711f3b975921bbc0fb0f",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:896": {
          "id": "VariableID:5414:896",
          "name": "Blue/300/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "bbdce1dd65542103ef164fde684ccbc797b78a85",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:897": {
          "id": "VariableID:5414:897",
          "name": "Blue/400/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "384ae82e2d3c585ec1f1eba918f552619b84297d",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:898": {
          "id": "VariableID:5414:898",
          "name": "Blue/500/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "193c6f0f874db7854c860f471280d0eaef8ed21e",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:899": {
          "id": "VariableID:5414:899",
          "name": "Blue/600/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "9180571896523c8b5fa251bdd7a679dad7e9f8a7",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:900": {
          "id": "VariableID:5414:900",
          "name": "Blue/700/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "a6b2a7fc3f8ce5252ceca50f49b08d58d9ebf40e",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:901": {
          "id": "VariableID:5414:901",
          "name": "Blue/800/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "ab400018c086b10900840edb84ea7ffe6c4b547f",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:902": {
          "id": "VariableID:5414:902",
          "name": "Blue/900/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "3254112851fefac24a15162cf77785a01561009a",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:903": {
          "id": "VariableID:5414:903",
          "name": "Burgundy/100/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "af0929b5a6676e14014683ea8963e24bdfed777d",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:904": {
          "id": "VariableID:5414:904",
          "name": "Burgundy/200/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "483b7b666f58e89b78a92620c9816f0d79ee82e0",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:905": {
          "id": "VariableID:5414:905",
          "name": "Burgundy/300/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "a1009444a66fc85e48f6fb9e2809c36e8fd1824b",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:906": {
          "id": "VariableID:5414:906",
          "name": "Burgundy/400/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "4a8ca6a9a3e8346621e9308d80c9bb9a4f67a3ee",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:907": {
          "id": "VariableID:5414:907",
          "name": "Burgundy/500/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "5f3cd7d74df23332141e48c889474357b4f33ed0",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:908": {
          "id": "VariableID:5414:908",
          "name": "Burgundy/600/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "790310424389f2f5f9cea6b1bc5f5207668c2c99",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:909": {
          "id": "VariableID:5414:909",
          "name": "Burgundy/700/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "52228ac0b9d4cf11b153e0e32fabe7342fd5193a",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:910": {
          "id": "VariableID:5414:910",
          "name": "Burgundy/800/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "6c1314969064fcca65226f20628511211a2264cf",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:911": {
          "id": "VariableID:5414:911",
          "name": "Burgundy/900/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "983b5f28e619a8c130ca045f8a4efa29e7be6f17",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:912": {
          "id": "VariableID:5414:912",
          "name": "Yellow/50/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "909cc6368e743d450e0c42752a0df56807c8ee2b",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:913": {
          "id": "VariableID:5414:913",
          "name": "Yellow/100/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "17da6ae859be30bd4a088a3b8e2143acb02c1551",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:914": {
          "id": "VariableID:5414:914",
          "name": "Yellow/200/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "bbe361c4694d9558fd3febfaff32ae6e7f12e245",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:915": {
          "id": "VariableID:5414:915",
          "name": "Yellow/300/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "a791b9b2da6bdc96203e1fab73c49840405acfa8",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:916": {
          "id": "VariableID:5414:916",
          "name": "Yellow/400/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "87e12b61c360d26f85b202e4f32e17233315f3ae",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:917": {
          "id": "VariableID:5414:917",
          "name": "Yellow/500/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "8a8a30526b3bf716ac69c285a3115154a4b6ede2",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:918": {
          "id": "VariableID:5414:918",
          "name": "Yellow/600/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "9d5bcd609b59975534a84a09f4581524f36e6d69",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:919": {
          "id": "VariableID:5414:919",
          "name": "Yellow/700/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "564ab55436e7a01b9bfbe38c2b16f4ad2f5d312e",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:920": {
          "id": "VariableID:5414:920",
          "name": "Yellow/800/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "c514f9b9cff8327215e84ab942d102418ceb8c0d",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:921": {
          "id": "VariableID:5414:921",
          "name": "Yellow/900/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "b032e4439282606b0ca7c6560be5f5367a3725af",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:922": {
          "id": "VariableID:5414:922",
          "name": "Orange/100/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "5b9be7cf4c0e5391b7408941645013ae86a28fab",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:923": {
          "id": "VariableID:5414:923",
          "name": "Orange/200/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "fe7094a70f4399e88a269f6dcd9fa2ca060f6c37",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:924": {
          "id": "VariableID:5414:924",
          "name": "Orange/300/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "f3faba3d255859910510e3d9dadb9dfdb74ca1de",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:925": {
          "id": "VariableID:5414:925",
          "name": "Orange/400/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "824d8801e14d5c85f6f160e8f609f7f7f7ae8a29",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:926": {
          "id": "VariableID:5414:926",
          "name": "Orange/500/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "0e273723b2304321fb11272ec9c2c1acd164eaea",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:927": {
          "id": "VariableID:5414:927",
          "name": "Orange/600/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "c591b485593b05b9969a4efa712b978ef50cbe2d",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:928": {
          "id": "VariableID:5414:928",
          "name": "Orange/700/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "b1af02485cd9aa70c04edb4ad0ed1be54b05db3e",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:929": {
          "id": "VariableID:5414:929",
          "name": "Orange/800/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "c1148ac2e357ac0b0292be46563f84538ebcff21",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:930": {
          "id": "VariableID:5414:930",
          "name": "Orange/900/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "bb06fc4c5c28ae42e7a7660475f5cafb00a71c32",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:931": {
          "id": "VariableID:5414:931",
          "name": "Red/50/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "627c89a3ec0b138d76e545d07e334e4d5fa42de7",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:932": {
          "id": "VariableID:5414:932",
          "name": "Red/100/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "d7b5dfeeba9cbe86ec4a25d7d700cd7db0f1bff2",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:933": {
          "id": "VariableID:5414:933",
          "name": "Red/200/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "ad7d452ed2f19c4503ae67f8abf550583d08be95",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:934": {
          "id": "VariableID:5414:934",
          "name": "Red/300/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "26b95e7925415b0f2a91dab71e7753e846c7b273",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:935": {
          "id": "VariableID:5414:935",
          "name": "Red/400/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "758d38162a8f4cdd6cc5fd427919e6fd75914816",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:936": {
          "id": "VariableID:5414:936",
          "name": "Red/500/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "5a742f440afed032a05352c904e998454d283d0d",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3701"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:937": {
          "id": "VariableID:5414:937",
          "name": "Red/600/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "d143d10a521ebca0e0568a1b30773419356d0e2d",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:938": {
          "id": "VariableID:5414:938",
          "name": "Red/700/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "294e3eec5198d7de4e698446f975e16e7749192c",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:939": {
          "id": "VariableID:5414:939",
          "name": "Red/800/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "ebd481ca435423dd0b7dd217e72fc60842cfa6b6",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:940": {
          "id": "VariableID:5414:940",
          "name": "Red/900/Foreground",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:690",
          "key": "fa6894b884648965f4fdd7518176aeb88c935e9f",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "5414:8": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:9": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            },
            "5414:10": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:3698"
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": true,
          "codeSyntax": {}
        },
        "VariableID:5414:941": {
          "id": "VariableID:5414:941",
          "name": "Width/Slim",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3534:12675",
          "key": "d6245d209138f190d81b922f2da521334619ee2b",
          "remote": false,
          "resolvedType": "FLOAT",
          "valuesByMode": {
            "3534:0": 1
          },
          "scopes": [
            "CORNER_RADIUS"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5414:942": {
          "id": "VariableID:5414:942",
          "name": "Width/Medium",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3534:12675",
          "key": "1d86f1ac8f5d38d81c2acd319cbb37ffb98b3d79",
          "remote": false,
          "resolvedType": "FLOAT",
          "valuesByMode": {
            "3534:0": 2
          },
          "scopes": [
            "CORNER_RADIUS"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5414:3580": {
          "id": "VariableID:5414:3580",
          "name": "_Text/Secondary/BB",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "33345d5d0b54f2849c13f640d908b8fffb14983f",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:699"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:693"
            },
            "3766:0": {
              "r": 0.3019607961177826,
              "g": 0.4431372582912445,
              "b": 0.47843137383461,
              "a": 1
            },
            "3771:0": {
              "r": 0.3333333432674408,
              "g": 0.3686274588108063,
              "b": 0.3960784375667572,
              "a": 1
            }
          },
          "scopes": [
            "TEXT_FILL",
            "STROKE_COLOR"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5414:3581": {
          "id": "VariableID:5414:3581",
          "name": "_Text/Secondary/WB",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "25c7ef7ea311c0c52746688d989e20dbdcbaba65",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:699"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:693"
            },
            "3766:0": {
              "r": 0.3019607961177826,
              "g": 0.4431372582912445,
              "b": 0.47843137383461,
              "a": 1
            },
            "3771:0": {
              "r": 0.3333333432674408,
              "g": 0.3686274588108063,
              "b": 0.3960784375667572,
              "a": 1
            }
          },
          "scopes": [
            "TEXT_FILL",
            "STROKE_COLOR"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5414:3582": {
          "id": "VariableID:5414:3582",
          "name": "_Text/Secondary/BW",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "61848c93e8888eb8faa9779112df1cf85f44bbdf",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:699"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:693"
            },
            "3766:0": {
              "r": 0.3019607961177826,
              "g": 0.4431372582912445,
              "b": 0.47843137383461,
              "a": 1
            },
            "3771:0": {
              "r": 0.3333333432674408,
              "g": 0.3686274588108063,
              "b": 0.3960784375667572,
              "a": 1
            }
          },
          "scopes": [
            "TEXT_FILL",
            "STROKE_COLOR"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5414:3695": {
          "id": "VariableID:5414:3695",
          "name": "_Text/Disabled/BB",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "386038b832bee7ce21596b2b06ebf2c93d5f925b",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:696"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:696"
            },
            "3766:0": {
              "r": 0.47843137383461,
              "g": 0.5843137502670288,
              "b": 0.6117647290229797,
              "a": 1
            },
            "3771:0": {
              "r": 0.6627451181411743,
              "g": 0.6823529601097107,
              "b": 0.6941176652908325,
              "a": 1
            }
          },
          "scopes": [
            "TEXT_FILL",
            "STROKE_COLOR"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5414:3696": {
          "id": "VariableID:5414:3696",
          "name": "_Text/Disabled/WB",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "e3a92ccf3f5bd92e7ac46a8907c77e2870cd9b4d",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:696"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:696"
            },
            "3766:0": {
              "r": 0.47843137383461,
              "g": 0.5843137502670288,
              "b": 0.6117647290229797,
              "a": 1
            },
            "3771:0": {
              "r": 0.6627451181411743,
              "g": 0.6823529601097107,
              "b": 0.6941176652908325,
              "a": 1
            }
          },
          "scopes": [
            "TEXT_FILL",
            "STROKE_COLOR"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5414:3697": {
          "id": "VariableID:5414:3697",
          "name": "_Text/Disabled/BW",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "6d97a80b4bfaa9ff0ccddbbebd235deafe413ffd",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:696"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:696"
            },
            "3766:0": {
              "r": 0.47843137383461,
              "g": 0.5843137502670288,
              "b": 0.6117647290229797,
              "a": 1
            },
            "3771:0": {
              "r": 0.6627451181411743,
              "g": 0.6823529601097107,
              "b": 0.6941176652908325,
              "a": 1
            }
          },
          "scopes": [
            "TEXT_FILL",
            "STROKE_COLOR"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5414:3698": {
          "id": "VariableID:5414:3698",
          "name": "Foreground/Light/Primary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "360f2c2b7905dba510c207d87017c159279025c7",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:691"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:691"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5414:3699": {
          "id": "VariableID:5414:3699",
          "name": "Foreground/Light/Secondary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "cc81bf7a6428d6b5751c7283fb8776562b7ed37d",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:693"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:693"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5414:3700": {
          "id": "VariableID:5414:3700",
          "name": "Foreground/Light/Disabled",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "3a7a79f5cc8fa77119d4cfe13c476f8c3a4c829d",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:696"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:696"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5414:3701": {
          "id": "VariableID:5414:3701",
          "name": "Foreground/Dark/Primary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "1977869a07afae3b931e2627d5c870297ae68be0",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:705"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:705"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5414:3702": {
          "id": "VariableID:5414:3702",
          "name": "Foreground/Dark/Secondary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "3a790cc1c10c5cb51d2f766a312d2fa92001e7ee",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:699"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:699"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5414:3703": {
          "id": "VariableID:5414:3703",
          "name": "Foreground/Dark/Disabled",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "d4f9f284660ef969ffbf264f9c7d2f783ce8f388",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:696"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:696"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5414:3882": {
          "id": "VariableID:5414:3882",
          "name": "Zone/From",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "03a7b70e818955c7ce1f27780dcce3d5f40e48f2",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:708"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:708"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5414:3883": {
          "id": "VariableID:5414:3883",
          "name": "Zone/To",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "ac4aa179b2a61a08e65c6c32982e51feda245d23",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:717"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:717"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5604:7193": {
          "id": "VariableID:5604:7193",
          "name": "Font",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:685",
          "key": "07e2f21451a6ad00c1a640eecffd58fc1a5b90be",
          "remote": false,
          "resolvedType": "STRING",
          "valuesByMode": {
            "5414:6": "SF Pro Text",
            "5604:0": "Roboto",
            "5868:0": "Roboto"
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5604:7203": {
          "id": "VariableID:5604:7203",
          "name": "Number",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5414:685",
          "key": "3331c0be41c43ef8ff387e9d851b13d67432bee6",
          "remote": false,
          "resolvedType": "FLOAT",
          "valuesByMode": {
            "5414:6": -0.3100000023841858,
            "5604:0": -0.5,
            "5868:0": -0.5
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5753:24": {
          "id": "VariableID:5753:24",
          "name": "Size/xSmall",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5753:23",
          "key": "7f9f954eea72e5fd5b72950607a4a7e3d49de6f7",
          "remote": false,
          "resolvedType": "FLOAT",
          "valuesByMode": {
            "5753:0": 12
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5753:25": {
          "id": "VariableID:5753:25",
          "name": "Size/Large",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5753:23",
          "key": "9c4187fbd62aec82f51d993c369d2d286f31db16",
          "remote": false,
          "resolvedType": "FLOAT",
          "valuesByMode": {
            "5753:0": 26
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5753:26": {
          "id": "VariableID:5753:26",
          "name": "Size/Small",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5753:23",
          "key": "435e2f0200435a84007ec86fd2b5c279251337b8",
          "remote": false,
          "resolvedType": "FLOAT",
          "valuesByMode": {
            "5753:0": 16
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5753:28": {
          "id": "VariableID:5753:28",
          "name": "Size/Medium",
          "description": "",
          "variableCollectionId": "VariableCollectionId:5753:23",
          "key": "3b3ed2a5587aedc8d90f6872e896c371e452c3ea",
          "remote": false,
          "resolvedType": "FLOAT",
          "valuesByMode": {
            "5753:0": 20
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5753:30": {
          "id": "VariableID:5753:30",
          "name": "GeofencingZone/Allowed/Color",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "143323a4b6e23124796c34a42498dffcff88dc16",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:729"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:729"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5753:31": {
          "id": "VariableID:5753:31",
          "name": "GeofencingZone/Allowed/FillOpacity",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "21f5a8b09ca1ff90a90d189386d4bc21ee6f31ac",
          "remote": false,
          "resolvedType": "FLOAT",
          "valuesByMode": {
            "3544:0": 0.07500000298023224,
            "3544:2": 0.07999999821186066,
            "3766:0": 0,
            "3771:0": 0
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5753:32": {
          "id": "VariableID:5753:32",
          "name": "GeofencingZone/Allowed/StrokeOpacity",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "2c5cbf4ed6a3db3812014b4b9a0e7be1e85a12cb",
          "remote": false,
          "resolvedType": "FLOAT",
          "valuesByMode": {
            "3544:0": 0.5,
            "3544:2": 0.6000000238418579,
            "3766:0": 0,
            "3771:0": 0
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5753:33": {
          "id": "VariableID:5753:33",
          "name": "GeofencingZone/Allowed/LayerIndexWeight",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "20a0dcffa023caa081a3d08cc5ed3b24d099072a",
          "remote": false,
          "resolvedType": "FLOAT",
          "valuesByMode": {
            "3544:0": 1,
            "3544:2": 1,
            "3766:0": 0,
            "3771:0": 0
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5753:34": {
          "id": "VariableID:5753:34",
          "name": "GeofencingZone/Slow/Color",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "386b71c1008f3aae47255f6c762611b3452ad543",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:744"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:744"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5753:35": {
          "id": "VariableID:5753:35",
          "name": "GeofencingZone/Slow/FillOpacity",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "26c97206d92a020ed860bbd1f2a0190d15a121f3",
          "remote": false,
          "resolvedType": "FLOAT",
          "valuesByMode": {
            "3544:0": 0.6000000238418579,
            "3544:2": 0.6000000238418579,
            "3766:0": 0,
            "3771:0": 0
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5753:36": {
          "id": "VariableID:5753:36",
          "name": "GeofencingZone/Slow/StrokeOpacity",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "23dfafdae049f9e3054f31b7be14d172070d630c",
          "remote": false,
          "resolvedType": "FLOAT",
          "valuesByMode": {
            "3544:0": 0.800000011920929,
            "3544:2": 0.800000011920929,
            "3766:0": 0,
            "3771:0": 0
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5753:37": {
          "id": "VariableID:5753:37",
          "name": "GeofencingZone/Slow/LayerIndexWeight",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "ccd6c1d46449d9a36173c61b6a094b1e6c1ae41d",
          "remote": false,
          "resolvedType": "FLOAT",
          "valuesByMode": {
            "3544:0": 2,
            "3544:2": 2,
            "3766:0": 0,
            "3771:0": 0
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5753:38": {
          "id": "VariableID:5753:38",
          "name": "GeofencingZone/NoParking/Color",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "ae770c518c79a64e39649c86bb5d95cdf58d1b17",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:766"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:766"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5753:39": {
          "id": "VariableID:5753:39",
          "name": "GeofencingZone/NoParking/FillOpacity",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "59818ac7e592a831f75c49ba385c83af839f51e0",
          "remote": false,
          "resolvedType": "FLOAT",
          "valuesByMode": {
            "3544:0": 0.5,
            "3544:2": 0.5,
            "3766:0": 0,
            "3771:0": 0
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5753:40": {
          "id": "VariableID:5753:40",
          "name": "GeofencingZone/NoParking/StrokeOpacity",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "b9cc7ed956d9977dbae6b2a9b649323f01f6f988",
          "remote": false,
          "resolvedType": "FLOAT",
          "valuesByMode": {
            "3544:0": 0.699999988079071,
            "3544:2": 0.699999988079071,
            "3766:0": 0,
            "3771:0": 0
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5753:41": {
          "id": "VariableID:5753:41",
          "name": "GeofencingZone/NoParking/LayerIndexWeight",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "899f33391071146d0840ced9eb9c1c5dd0bcabd7",
          "remote": false,
          "resolvedType": "FLOAT",
          "valuesByMode": {
            "3544:0": 3,
            "3544:2": 3,
            "3766:0": 0,
            "3771:0": 0
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5753:42": {
          "id": "VariableID:5753:42",
          "name": "GeofencingZone/NoEntry/Color",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "45cac2dc28539c17b79a3839482a3e224f9b3e1f",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:771"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:771"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5753:43": {
          "id": "VariableID:5753:43",
          "name": "GeofencingZone/NoEntry/FillOpacity",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "4f87dd20bf99793c905a5e95e391bb379626242a",
          "remote": false,
          "resolvedType": "FLOAT",
          "valuesByMode": {
            "3544:0": 0.550000011920929,
            "3544:2": 0.550000011920929,
            "3766:0": 0,
            "3771:0": 0
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5753:44": {
          "id": "VariableID:5753:44",
          "name": "GeofencingZone/NoEntry/StrokeOpacity",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "9e9f7a4abdee2364ce410b7f2b91be4e28c902f7",
          "remote": false,
          "resolvedType": "FLOAT",
          "valuesByMode": {
            "3544:0": 0.75,
            "3544:2": 0.75,
            "3766:0": 0,
            "3771:0": 0
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5753:45": {
          "id": "VariableID:5753:45",
          "name": "GeofencingZone/NoEntry/LayerIndexWeight",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "75a6e5d2cf0ae7c1cee53a69f0c88781dc985515",
          "remote": false,
          "resolvedType": "FLOAT",
          "valuesByMode": {
            "3544:0": 5,
            "3544:2": 5,
            "3766:0": 0,
            "3771:0": 0
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5891:23": {
          "id": "VariableID:5891:23",
          "name": "Foreground/Dynamic/Primary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "6e67588cdbd8f739eee0aa84f341dc62c341105c",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:705"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:691"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5891:24": {
          "id": "VariableID:5891:24",
          "name": "Foreground/Dynamic/Secondary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "efdf700b5d36d2c408c33979da328f2d87734019",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:699"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:693"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5891:25": {
          "id": "VariableID:5891:25",
          "name": "Foreground/Dynamic/Disabled",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "7350de9c7bdea5ab0fc7ec222910595bd58f067c",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:696"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:696"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5891:26": {
          "id": "VariableID:5891:26",
          "name": "Foreground/Inverse/Primary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "9b24410d4c98a64d19a3093a8a7af505e3853f7f",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:691"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:705"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5891:27": {
          "id": "VariableID:5891:27",
          "name": "Foreground/Inverse/Secondary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "2ac60eda0a653225d0e394d81f6e4137512973ec",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:693"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:699"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5891:28": {
          "id": "VariableID:5891:28",
          "name": "Foreground/Inverse/Disabled",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "a0d91a273e779a687123f40e9acf587d0511d881",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:696"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:696"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5896:23": {
          "id": "VariableID:5896:23",
          "name": "Border/Primary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "302e8f84bd5423d4049a6a236f3d1a7cef5da169",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:692"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:702"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5896:24": {
          "id": "VariableID:5896:24",
          "name": "Border/Secondary",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "55baa3d057de66dd762e65b31ae6286646059082",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:705"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:691"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        },
        "VariableID:5896:25": {
          "id": "VariableID:5896:25",
          "name": "Border/Focus",
          "description": "",
          "variableCollectionId": "VariableCollectionId:3544:10889",
          "key": "c978e890dbf318ab7e4f390255f1cddbc1b347a0",
          "remote": false,
          "resolvedType": "COLOR",
          "valuesByMode": {
            "3544:0": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:729"
            },
            "3544:2": {
              "type": "VARIABLE_ALIAS",
              "id": "VariableID:5414:720"
            },
            "3766:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            },
            "3771:0": {
              "r": 1,
              "g": 1,
              "b": 1,
              "a": 1
            }
          },
          "scopes": [
            "ALL_SCOPES"
          ],
          "hiddenFromPublishing": false,
          "codeSyntax": {}
        }
      },
      "variableCollections": {
        "VariableCollectionId:3534:12675": {
          "id": "VariableCollectionId:3534:12675",
          "name": "Border",
          "hiddenFromPublishing": false,
          "key": "a8172d88b8f5bcbae1682f34d7a2a26ba352ceca",
          "defaultModeId": "3534:0",
          "modes": [
            {
              "name": "Scale",
              "modeId": "3534:0"
            }
          ],
          "remote": false,
          "variableIds": [
            "VariableID:3534:12676",
            "VariableID:3534:12677",
            "VariableID:3534:12678",
            "VariableID:5414:941",
            "VariableID:5414:942"
          ]
        },
        "VariableCollectionId:3541:12023": {
          "id": "VariableCollectionId:3541:12023",
          "name": "Spacing",
          "hiddenFromPublishing": false,
          "key": "2ea21005d7b881aabb086fb01f833c32606ddd5d",
          "defaultModeId": "3541:0",
          "modes": [
            {
              "name": "Scale",
              "modeId": "3541:0"
            }
          ],
          "remote": false,
          "variableIds": [
            "VariableID:3541:12024",
            "VariableID:3541:12025",
            "VariableID:3541:12026",
            "VariableID:3541:12027",
            "VariableID:3541:12028"
          ]
        },
        "VariableCollectionId:3544:10889": {
          "id": "VariableCollectionId:3544:10889",
          "name": "Theme",
          "hiddenFromPublishing": false,
          "key": "e5a5605274b4bea6fcf739b07eeee09d75c23608",
          "defaultModeId": "3544:0",
          "modes": [
            {
              "name": "AtB Light",
              "modeId": "3544:0"
            },
            {
              "name": "AtB Dark",
              "modeId": "3544:2"
            },
            {
              "name": "Reis",
              "modeId": "3766:0"
            },
            {
              "name": "FRAM",
              "modeId": "3771:0"
            }
          ],
          "remote": false,
          "variableIds": [
            "VariableID:3546:11033",
            "VariableID:3561:7398",
            "VariableID:3561:7397",
            "VariableID:3544:10910",
            "VariableID:3544:10911",
            "VariableID:5414:3580",
            "VariableID:5414:3581",
            "VariableID:5414:3582",
            "VariableID:3544:10912",
            "VariableID:5414:3695",
            "VariableID:5414:3696",
            "VariableID:5414:3697",
            "VariableID:5414:3698",
            "VariableID:5414:3699",
            "VariableID:5414:3700",
            "VariableID:5414:3701",
            "VariableID:5414:3702",
            "VariableID:5414:3703",
            "VariableID:3544:10890",
            "VariableID:3544:10892",
            "VariableID:3544:10893",
            "VariableID:3544:10894",
            "VariableID:3544:10895",
            "VariableID:3544:10896",
            "VariableID:3544:10897",
            "VariableID:3544:10898",
            "VariableID:3544:10899",
            "VariableID:3544:10900",
            "VariableID:3544:10905",
            "VariableID:3544:10906",
            "VariableID:3544:10907",
            "VariableID:3544:10908",
            "VariableID:4642:5334",
            "VariableID:3544:10913",
            "VariableID:3544:10914",
            "VariableID:3544:10915",
            "VariableID:3544:10916",
            "VariableID:3544:10917",
            "VariableID:3544:10918",
            "VariableID:3544:10920",
            "VariableID:3544:10921",
            "VariableID:3544:10922",
            "VariableID:3544:10923",
            "VariableID:3544:10924",
            "VariableID:3544:10925",
            "VariableID:3544:10926",
            "VariableID:3544:10927",
            "VariableID:3544:10928",
            "VariableID:3544:10929",
            "VariableID:3544:10930",
            "VariableID:3544:10931",
            "VariableID:3544:10932",
            "VariableID:3544:10933",
            "VariableID:3544:10934",
            "VariableID:3544:10935",
            "VariableID:3544:10936",
            "VariableID:3544:10937",
            "VariableID:3544:10938",
            "VariableID:3544:10939",
            "VariableID:3544:10940",
            "VariableID:3544:10941",
            "VariableID:3544:10942",
            "VariableID:3544:10943",
            "VariableID:3544:10944",
            "VariableID:5414:3882",
            "VariableID:5414:3883",
            "VariableID:3544:10945",
            "VariableID:3544:10946",
            "VariableID:3544:10947",
            "VariableID:3544:10948",
            "VariableID:3544:10949",
            "VariableID:3544:10950",
            "VariableID:3544:10951",
            "VariableID:3544:10952",
            "VariableID:3544:10953",
            "VariableID:3552:10889",
            "VariableID:3552:10892",
            "VariableID:3552:10893",
            "VariableID:3552:10894",
            "VariableID:3552:10895",
            "VariableID:3552:10896",
            "VariableID:3552:10897",
            "VariableID:3552:10898",
            "VariableID:3552:10899",
            "VariableID:3552:10900",
            "VariableID:4666:5482",
            "VariableID:4666:5483",
            "VariableID:4666:5484",
            "VariableID:5753:30",
            "VariableID:5753:31",
            "VariableID:5753:32",
            "VariableID:5753:33",
            "VariableID:5753:34",
            "VariableID:5753:35",
            "VariableID:5753:36",
            "VariableID:5753:37",
            "VariableID:5753:38",
            "VariableID:5753:39",
            "VariableID:5753:40",
            "VariableID:5753:41",
            "VariableID:5753:42",
            "VariableID:5753:43",
            "VariableID:5753:44",
            "VariableID:5753:45",
            "VariableID:5891:23",
            "VariableID:5891:24",
            "VariableID:5891:25",
            "VariableID:5891:26",
            "VariableID:5891:27",
            "VariableID:5891:28",
            "VariableID:5896:23",
            "VariableID:5896:24",
            "VariableID:5896:25"
          ]
        },
        "VariableCollectionId:5414:685": {
          "id": "VariableCollectionId:5414:685",
          "name": "Typography",
          "hiddenFromPublishing": false,
          "key": "e08dbfba4d25e1466a805d82509d11d9fb7bd139",
          "defaultModeId": "5414:6",
          "modes": [
            {
              "name": "iOS",
              "modeId": "5414:6"
            },
            {
              "name": "Android",
              "modeId": "5604:0"
            },
            {
              "name": "Web",
              "modeId": "5868:0"
            }
          ],
          "remote": false,
          "variableIds": [
            "VariableID:5604:7193",
            "VariableID:5604:7203"
          ]
        },
        "VariableCollectionId:5414:690": {
          "id": "VariableCollectionId:5414:690",
          "name": "Color Palette",
          "hiddenFromPublishing": false,
          "key": "ed46ba5a97bba4fae59d77722d8c698255716060",
          "defaultModeId": "5414:8",
          "modes": [
            {
              "name": "AtB",
              "modeId": "5414:8"
            },
            {
              "name": "Reis",
              "modeId": "5414:9"
            },
            {
              "name": "FRAM",
              "modeId": "5414:10"
            }
          ],
          "remote": false,
          "variableIds": [
            "VariableID:5414:691",
            "VariableID:5414:692",
            "VariableID:5414:693",
            "VariableID:5414:694",
            "VariableID:5414:695",
            "VariableID:5414:696",
            "VariableID:5414:697",
            "VariableID:5414:698",
            "VariableID:5414:699",
            "VariableID:5414:700",
            "VariableID:5414:701",
            "VariableID:5414:702",
            "VariableID:5414:703",
            "VariableID:5414:704",
            "VariableID:5414:705",
            "VariableID:5414:706",
            "VariableID:5414:707",
            "VariableID:5414:708",
            "VariableID:5414:709",
            "VariableID:5414:710",
            "VariableID:5414:711",
            "VariableID:5414:712",
            "VariableID:5414:713",
            "VariableID:5414:714",
            "VariableID:5414:715",
            "VariableID:5414:716",
            "VariableID:5414:717",
            "VariableID:5414:718",
            "VariableID:5414:719",
            "VariableID:5414:720",
            "VariableID:5414:721",
            "VariableID:5414:722",
            "VariableID:5414:723",
            "VariableID:5414:724",
            "VariableID:5414:725",
            "VariableID:5414:726",
            "VariableID:5414:727",
            "VariableID:5414:728",
            "VariableID:5414:729",
            "VariableID:5414:730",
            "VariableID:5414:731",
            "VariableID:5414:732",
            "VariableID:5414:733",
            "VariableID:5414:734",
            "VariableID:5414:735",
            "VariableID:5414:736",
            "VariableID:5414:737",
            "VariableID:5414:738",
            "VariableID:5414:739",
            "VariableID:5414:740",
            "VariableID:5414:741",
            "VariableID:5414:742",
            "VariableID:5414:743",
            "VariableID:5414:744",
            "VariableID:5414:745",
            "VariableID:5414:746",
            "VariableID:5414:747",
            "VariableID:5414:748",
            "VariableID:5414:749",
            "VariableID:5414:750",
            "VariableID:5414:751",
            "VariableID:5414:752",
            "VariableID:5414:753",
            "VariableID:5414:754",
            "VariableID:5414:755",
            "VariableID:5414:756",
            "VariableID:5414:757",
            "VariableID:5414:758",
            "VariableID:5414:759",
            "VariableID:5414:760",
            "VariableID:5414:761",
            "VariableID:5414:762",
            "VariableID:5414:763",
            "VariableID:5414:764",
            "VariableID:5414:765",
            "VariableID:5414:766",
            "VariableID:5414:767",
            "VariableID:5414:768",
            "VariableID:5414:769",
            "VariableID:5414:770",
            "VariableID:5414:771",
            "VariableID:5414:860",
            "VariableID:5414:861",
            "VariableID:5414:862",
            "VariableID:5414:863",
            "VariableID:5414:864",
            "VariableID:5414:865",
            "VariableID:5414:866",
            "VariableID:5414:867",
            "VariableID:5414:868",
            "VariableID:5414:869",
            "VariableID:5414:870",
            "VariableID:5414:871",
            "VariableID:5414:872",
            "VariableID:5414:873",
            "VariableID:5414:874",
            "VariableID:5414:875",
            "VariableID:5414:876",
            "VariableID:5414:877",
            "VariableID:5414:878",
            "VariableID:5414:879",
            "VariableID:5414:880",
            "VariableID:5414:881",
            "VariableID:5414:882",
            "VariableID:5414:883",
            "VariableID:5414:884",
            "VariableID:5414:885",
            "VariableID:5414:886",
            "VariableID:5414:887",
            "VariableID:5414:888",
            "VariableID:5414:889",
            "VariableID:5414:890",
            "VariableID:5414:891",
            "VariableID:5414:892",
            "VariableID:5414:893",
            "VariableID:5414:894",
            "VariableID:5414:895",
            "VariableID:5414:896",
            "VariableID:5414:897",
            "VariableID:5414:898",
            "VariableID:5414:899",
            "VariableID:5414:900",
            "VariableID:5414:901",
            "VariableID:5414:902",
            "VariableID:5414:903",
            "VariableID:5414:904",
            "VariableID:5414:905",
            "VariableID:5414:906",
            "VariableID:5414:907",
            "VariableID:5414:908",
            "VariableID:5414:909",
            "VariableID:5414:910",
            "VariableID:5414:911",
            "VariableID:5414:912",
            "VariableID:5414:913",
            "VariableID:5414:914",
            "VariableID:5414:915",
            "VariableID:5414:916",
            "VariableID:5414:917",
            "VariableID:5414:918",
            "VariableID:5414:919",
            "VariableID:5414:920",
            "VariableID:5414:921",
            "VariableID:5414:922",
            "VariableID:5414:923",
            "VariableID:5414:924",
            "VariableID:5414:925",
            "VariableID:5414:926",
            "VariableID:5414:927",
            "VariableID:5414:928",
            "VariableID:5414:929",
            "VariableID:5414:930",
            "VariableID:5414:931",
            "VariableID:5414:932",
            "VariableID:5414:933",
            "VariableID:5414:934",
            "VariableID:5414:935",
            "VariableID:5414:936",
            "VariableID:5414:937",
            "VariableID:5414:938",
            "VariableID:5414:939",
            "VariableID:5414:940"
          ]
        },
        "VariableCollectionId:5753:23": {
          "id": "VariableCollectionId:5753:23",
          "name": "Icon",
          "hiddenFromPublishing": false,
          "key": "71406e6a75266446bca7072119bce9b88b3ffb02",
          "defaultModeId": "5753:0",
          "modes": [
            {
              "name": "Mode 1",
              "modeId": "5753:0"
            }
          ],
          "remote": false,
          "variableIds": [
            "VariableID:5753:24",
            "VariableID:5753:26",
            "VariableID:5753:28",
            "VariableID:5753:25"
          ]
        }
      }
    }
  })

const { tokens } = await useFigmaToDTCG({
  api: "rest",
  response
})

const outDir = './src';

const organizations: Organization[] = ['atb']
const modes: Mode[] = ['light', 'dark'];

// const toUpperFirstCase = (name: string) => name.charAt(0).toUpperCase() + name.slice(1);

const makeTokens = (organization: Organization, mode: Mode) => {
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
        case "destructive":
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
        console.warn(`Path '${element}' contains a value already. Skipping assigning '${token.value}' to ${JSON.stringify(current)}. This happens when converting to the old ContrastColor where 'secondary' and 'disabled' fields do not exist.`)
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
const makeDestination = (organization: Organization, themeOptions?: ThemeOptions): string => path.join(outDir, `${themeOptions?.useFigmaStructure ? 'themes-fs' : 'themes'}/${organization}-theme/`);

/**
 * @param organization Name of the organization
 * @param mode Theme mode
 * @returns Style Dictionary config for the org-mode combination
 */
const getStyleDictionaryConfig = (organization: Organization, mode: Mode): Config => {

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

console.log('\n');
