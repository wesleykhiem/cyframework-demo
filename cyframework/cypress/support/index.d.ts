declare namespace Cypress {
    interface Chainable {
        clearThenType(text: string, options?: Partial<TypeOptions>): Chainable<JQuery<HTMLElement>>
    }
}
  