describe("Play Modes", () => {

    beforeEach(() => {
        cy.visit("/")
        // To check the page is initialised via checking filled cells
        cy.get(".game__cell.game__cell--filled")
            .should("have.length.at.least", 30)
            .and("have.length.lessThan", 82)
    })

    it("Default is Easy and 45 filled cells", () => {
        cy.get("select[name=status__difficulty-select]").should('have.value', 'Easy')
        cy.get(".game__cell.game__cell--filled").should("have.length", 45)
    })

    it("40 cells filled on Medium select", () => {
        cy.get("select[name=status__difficulty-select]").select('Medium')
        cy.get(".game__cell.game__cell--filled").should("have.length", 40)
    })

    it("30 cells filled on Hard select", () => {
        cy.get("select[name=status__difficulty-select]").select('Hard')
        cy.get(".game__cell.game__cell--filled").should("have.length", 30)
    })

    it("Medium is less than 45 filled cells", () => {
        cy.get("select[name=status__difficulty-select]").select('Medium')
        cy.get(".game__cell.game__cell--filled").should("have.length.below", 45)
    })

    it("Hard is above 25 filled cells", () => {
        cy.get("select[name=status__difficulty-select]").select('Hard')
        cy.get(".game__cell.game__cell--filled").should("have.length.above", 25)
    })

    it("Log count of Easy filled cells (alias with 'then')", () => {
        cy.get(".game__cell.game__cell--filled")
            .its('length')
            .then(easyN => {
                cy.log(`The count of filled cells is ${easyN}.`)
            })
    })

    it("Easy filled count is above Medium filled (alias with 'as')", () => {

        cy.get(".game__cell.game__cell--filled")
            .its('length')
            .as('easyN')

        cy.get("select[name=status__difficulty-select]").select('Medium')
        cy.get(".game__cell.game__cell--filled")
            .its('length')
            .as('mediumN')
            .then(function () {
                expect(this.easyN).to.be.above(this.mediumN)
                expect(this.mediumN).to.be.below(this.easyN)
            })
    })

})
