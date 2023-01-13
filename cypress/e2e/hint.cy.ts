describe("Hint", () => {

  beforeEach(() => {
    cy.visit("/")
    // Easy mode only, make sure the grid is filled before you check for empty cells
    cy.get(".game__cell.game__cell--filled").should("have.length", 45)
  })

  it("Show victory message when board is filled with hints", () => {
    // Act
    cy.get(".game__cell").not(".game__cell--filled").each(($cell) => {
      cy.wrap($cell).click()
      cy.get(".status__action-hint").click()
    })

    // Assert
    cy.contains('.overlay__text', 'You solved it').should('be.visible')
  })

})
