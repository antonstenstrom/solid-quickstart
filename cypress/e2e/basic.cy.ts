describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('display header text', () => {
    cy.get('h1')
    .contains('Valkommen till Kalmar Wakepark!', { matchCase: false })
  })

  it('displays Click button', () => {
    cy.get('button')
    .contains('clicks');
  })
})
