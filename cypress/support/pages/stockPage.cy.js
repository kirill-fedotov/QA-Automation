export class StockPage {


    stockPageVerifyLocalization() {

        // Set screen size.
        cy.viewport(1366, 768);

        // Open marketplace url.
        cy.visit('https://epicentrk.ua/'); 

        // Verify it.
        cy.url().should('eq', 'https://epicentrk.ua/')

        // Open category and subcategory.
        cy.get("div[class='header__burger']").click()
        cy.get('.action-count').click()
        cy.get(':nth-child(2) > ._kYam').click()
        

        // Verify localization.
        cy.get('._UgW9').should("contain.text", "Акции: Сантехника")
        

    }

}

export const stockPage = new StockPage()