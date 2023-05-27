describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('display header text', () => {
    cy.get('h1')
    .contains('Välkommen till Kalmar Wakepark!', { matchCase: false })
  })

  it('displays Click button', () => {
    cy.get('button')
    .contains('Boka åk');
  })
})
