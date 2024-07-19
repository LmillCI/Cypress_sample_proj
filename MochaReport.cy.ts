describe('mysuite2', ()=>
{
 it('Negative test', ()=>
{
     cy.visit("https://ecommerce.tealiumdemo.com/");
    cy.get("li[class='level0 nav-1 first parent'] a[class='level0 has-children']").click();
    cy.get("[title$='Lafayette Convertible Dress']").should('have.text', 'abcdtool');//verify the text of a product 
      
})
it('positive test ', ()=>
{
    cy.visit("https://ecommerce.tealiumdemo.com/");

 cy.get('#search').type('skirts');
      cy.get("[title='Search']").click();
}
)
})