describe('mysuite1', ()=>
{
 it('Login Test', ()=>
{
     cy.visit("https://opensource-demo.orangehrmlive.com/");
     cy.get("input[name='username']").type("Admin");
     cy.get("input[name='password']").type("admin123");
     cy.get("button[type='submit']").click();   
})
it('verify title -negative test', ()=>
{
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.title().should('eq', 'OrangeHRM123');//assertion 

})
})