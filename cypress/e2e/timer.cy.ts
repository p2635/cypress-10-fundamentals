describe('Timer', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Display from 00:01 to 0:09 every second', () => {
    for(let k = 0; k < 10; k++){
      cy.contains('.status__time', `00:0${k}`, { timeout: 1200 })
    }
  })

  it('Display 00:10 within 11 seconds', () => {
    cy.contains('.status__time', '00:10', { timeout: 11_000 })
  })

})