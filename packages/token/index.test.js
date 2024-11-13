const postcss = require('postcss')
const { equal, rejects } = require('node:assert')
const { describe, it } = require('node:test')

const plugin = require('./')

const run = async (input) => await postcss([plugin()]).process(input, { from: undefined })

describe("Token function", () => {
  it("Translates existing token to CSS variable correctly", async () => {
    await it("For foreground variables", async () => {
      const output = await run(
        `
        a {
          color: token('color.foreground.dynamic.primary');
        }    
        `
      )
  
      equal(output,
        `
        a {
          color: var(--color-foreground-dynamic-primary);
        }    
        `
      )
    })

    await it("For background variables", async () => {
      const output = await run(
        `
        a {
          color: token('color.background.neutral.0.background');
        }    
        `
      )
  
      equal(output,
        `
        a {
          color: var(--color-background-neutral-0-background);
        }    
        `
      )
    })
  })

  it("Throws an error when a token does not exist", async () => {
    await rejects(async () => await run(
      `
      a {
        color: token('unknown');
      }    
      `)
    )
  })

  it("Throws an error on a wrong token", async () => {
    await rejects(async () => await run(
      `
      a {
        color: token('text.colors.primary');
      }    
      `)
    )
  })

  it("Throws an error on a partial token", async () => {
    await rejects(async () => await run(
      `
      a {
        color: token('color.foreground.dynamic');
      }    
      `)
    )
  })

  it("Throws an error on wrong syntax", async () => {

    await it("On missing closing bracket", async () =>
      await rejects(async () => await run(
        `
        a {
          color: token('color.foreground.dynamic.primary';
        }    
        `)
      )
    )

    await it("On mismatching quotes", async () =>
      await rejects(async () => await run(
        `
        a {
          color: token("color.foreground.dynamic.primary';
        }    
        `)
      )
    )

    await it("On backticks", async () =>
      await rejects(async () => await run(
        `
        a {
          color: token(\`color.foreground.dynamic.primary\`);
        }    
        `)
      )
    )

    await it("On wrong variable format: kebab-case", async () =>
      await rejects(async () => await run(
        `
        a {
          color: token('color-foreground-dynamic-primary');
        }    
        `)
      )
    )

    await it("On wrong variable format: PascalCase", async () =>
      await rejects(async () => await run(
        `
        a {
          color: token('Color.Foreground.Dynamic.Primary');
        }    
        `)
      )
    )
  })

  it("Leaves regular variables alone", async () => {
    const output = await run(
      `
      a {
        color: var(--regular-variable);
      }    
      `
    )

    equal(output,
      `
      a {
        color: var(--regular-variable);
      }    
      `
    )
  })
})