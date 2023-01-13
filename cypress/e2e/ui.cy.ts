describe('UI', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Show Sudoku title', () => {
    cy.get('h1').contains('Sudoku').should('be.visible')
  })

  it('Show New Game option', () => {
    cy.get('h2').contains('New Game').should('be.visible') // This doesn't check that it's a clickable option
  })
})