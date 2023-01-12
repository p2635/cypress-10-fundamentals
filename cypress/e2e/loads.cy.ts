describe('New cypress spec', () => {
  it('Sudoku page contains a timer', () => {
    cy.visit('/')
    cy.contains('.status__time', '00:03')
  })
})