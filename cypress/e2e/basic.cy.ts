context('Basic', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('basic nav', () => {
    cy.contains('[Default Layout]')
      .should('exist')

    cy.get('[test-id="test-input"]')
      .type('Rock{Enter}')
      .url()
      .should('include', '/hi/Rock')
  })
})
