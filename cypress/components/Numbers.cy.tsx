import { Numbers } from '../../src/components/Numbers'

describe('Numbers', () => {
  it('shows numbers', () => {
    cy.mount(<Numbers />)
  })
})
