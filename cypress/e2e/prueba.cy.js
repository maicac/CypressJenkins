describe('Tests de Prueba para Jenkins',{tags: "@regresion"}, () => {
  
  it('Test que PASA',{tags: ["@primero", "@pasara"]}, () => {
    cy.visit('https://example.cypress.io')
  })

  it('Test que FALLA',{tags: "@fallara"}, () => {
    cy.visit('https://example.cypress.io')
    cy.get("h1").should("have.text", "Hola Mundo!")
  })

  it.skip('Test que NO SE EJECUTA', () => {
    cy.visit('https://example.cypress.io')
  })
})