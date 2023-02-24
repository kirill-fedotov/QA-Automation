export class SearchTheItemPage {


    searchTheItemAndCorrectlyDisplayed() { 
        
        // Set screen size.
        cy.viewport(1366, 768);

        // Open marketplace url.
        cy.visit('https://epicentrk.ua/');

        // Verify it.
        cy.url().should('eq', 'https://epicentrk.ua/')

        // Search the item.
        cy.get('._ySQM9Z > :nth-child(1) > .btn').click();
        cy.get('form[data-is="Search"]').type('блендер{enter}');

        // Verify that all items are correctly displayed.
        cy.get('span[class="font-weight-700 nc"]').each((item) => {
            cy.wrap(item).should('contain', 'Блендер');

        })
                    
                    
    }




















}

export const searchTheItemPage = new SearchTheItemPage()