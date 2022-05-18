describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should have working arithmetical operations', () =>{
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5')
  })

  it('should allow for multiple operations be chained together', () =>{
    cy.get('#number7').click();
    cy.get('#operator-subtract').click();
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5')
  })

  it('should allow for a range of numbers', () =>{
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-3')
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#decimal').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2.2')
  })

  it('should allow for a negative number', () =>{
    cy.get('#number4').click();
    cy.get('#operator-subtract').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-3')
  })

  it('should allow for decimal number', () =>{
  cy.get('#number2').click();
  cy.get('#operator_add').click();
  cy.get('#number2').click();
  cy.get('#decimal').click();
  cy.get('#number2').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '4.2')
  })

  it('should allow for a large number', () =>{
    cy.get('#number2').click();
    cy.get('#number7').click();
    cy.get('#number4').click();
    cy.get('#number9').click();
    cy.get('#number7').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number7').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '137483725441')
    })

  it('should give an error message if a number is multiplied by 0', () =>{
    cy.get('#number4').click();
    cy.get('#number4').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'You cannot devide by 0')
  })

})