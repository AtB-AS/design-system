const postcss = require('postcss');
const postcssFunctions = require('postcss-functions');
const { name } = require('./package.json')

const { createThemesFor, ThemeVariant } = require('@atb-as/theme')

const { light: theme } = createThemesFor(ThemeVariant.AtB, {
  useFigmaStructure: true
})

const token = (value) => {

  let token

  const parse = () => {
    const syntax = /^(['"])((?:[a-z0-9][a-zA-Z0-9]*)(?:\.[a-z0-9][a-zA-Z0-9]*)*)(\1)$/

    const [, openingQuote, _token, closingQuote] = value.match(syntax);

    if (!openingQuote) {
      throw new Error(`Missing opening quote in ${value}`)
    }

    if (!closingQuote) {
      throw new Error(`Missing closing quote in ${value}`)
    }

    if (!_token) {
      throw new Error(`Invalid syntax in value ${value}`)
    }

    token = _token
  }

  const exists = () => {
    const leaf = token.split('.').reduce((o, p) => o[p] || null, theme) || null
    if (typeof leaf === 'object' || leaf === null) {
      throw new Error(`Token '${token}' is not defined.`)
    }
  }

  const makeToken = () => `var(--${token.replace(/\./g, '-')})`

  parse()
  exists()

  return makeToken()
}

/**
 * @type {import('postcss').PluginCreator}
 */
const plugin = (() => {
  const functionsPlugin = postcssFunctions({
    functions: {
      token
    },
  });

  return {
    postcssPlugin: name,

    async Once(root) {
      await postcss([functionsPlugin]).process(root, { from: undefined });
    }
  }
})

plugin.postcss = true

module.exports = plugin
