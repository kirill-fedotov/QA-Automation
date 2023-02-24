export class BasePage {

	openPage(page) {
		cy.visit(page)
	}


	wait(time = 2000) {
		cy.wait(time)
	}


	uncaughtException() {
		Cypress.on('uncaught:exception', (err, runnable) => {
			return false
		})
	}



}

export const basePage = new BasePage()