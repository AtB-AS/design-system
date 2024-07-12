import { useFigmaToDTCG } from "@tfk-samf/figma-to-dtcg"
import { GetLocalVariablesResponse } from "@figma/rest-api-spec"

const figmaResponse = await Promise.resolve<GetLocalVariablesResponse>(
    {
        "status": 200,
        "error": false,
        "meta": {
            "variableCollections": {
                "VariableCollectionId:21:2": {
                    "defaultModeId": "21:0",
                    "id": "VariableCollectionId:21:2",
                    "name": "Semantics",
                    "remote": false,
                    "modes": [
                    {
                        "modeId": "21:0",
                        "name": "Light"
                    },
                    {
                        "modeId": "112:1",
                        "name": "Dark"
                    }
                    ],
                    "key": "e671feec76d67af54916720e19539269ea5bc4bc",
                    "hiddenFromPublishing": false,
                    "variableIds": []
                }
            },
            "variables": {
                "VariableID:382:3354": {
                    "id": "VariableID:382:3354",
                    "name": "text/text-on-success",
                    "remote": false,
                    "key": "29338ec357fcb5d16fa1497c1bdf4bd8b2671933",
                    "variableCollectionId": "VariableCollectionId:21:2",
                    "resolvedType": "COLOR",
                    "valuesByMode": {
                    "21:0": {
                        "type": "VARIABLE_ALIAS",
                        "id": "VariableID:5:17"
                    },
                    "112:1": {
                        "type": "VARIABLE_ALIAS",
                        "id": "VariableID:5:25"
                    }
                    },
                    "scopes": [
                    "ALL_SCOPES"
                    ],
                    "description": "test",
                    "hiddenFromPublishing": false,
                    "codeSyntax": {}
                },
                "VariableID:5:17": {
                    "id": "VariableID:5:17",
                    "name": "color/green/100",
                    "remote": false,
                    "key": "29eb66c272c271b29d218ac6444a6c1065a63029",
                    "variableCollectionId": "VariableCollectionId:5:2",
                    "resolvedType": "COLOR",
                    "valuesByMode": {
                    "5:0": {
                        "r": 0.8509804010391235,
                        "g": 0.9176470637321472,
                        "b": 0.9019607901573181,
                        "a": 1
                    }
                    },
                    "scopes": [
                        "ALL_SCOPES"
                    ],
                    "description": "test",
                    "hiddenFromPublishing": false,
                    "codeSyntax": {}
                },
                "VariableID:5:25": {
                    "id": "VariableID:5:25",
                    "name": "color/green/900",
                    "remote": false,
                    "key": "c9267eb1dc8db1bd707a4fea57ba2085cb1ee409",
                    "variableCollectionId": "VariableCollectionId:5:2",
                    "resolvedType": "COLOR",
                    "valuesByMode": {
                    "5:0": {
                        "r": 0,
                        "g": 0.21568627655506134,
                        "b": 0.16078431904315948,
                        "a": 1
                    }
                    },
                    "scopes": [
                        "ALL_SCOPES"
                    ],
                    "description": "test",
                    "hiddenFromPublishing": false,
                    "codeSyntax": {}
                }
            }
        }
    })

const { tokens } = await useFigmaToDTCG({
    response: figmaResponse
})


console.log(tokens)

