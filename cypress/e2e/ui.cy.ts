describe('UI', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Sudoku page contains title', () => {
    cy.get('h1').contains('Sudoku')
  })

  it('Sudoku page contains New Game', () => {
    cy.get('h2').contains('New Game') // This doesn't check that it's a clickable option
  })
})