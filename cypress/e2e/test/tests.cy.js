/// <reference types="Cypress" />

const { basePage } = require("../../support/pages/basePage.cy")
const { basketPage } = require("../../support/pages/basketPage.cy")
const { filterPage } = require("../../support/pages/filterPage.cy")
const { searchTheItemPage } = require("../../support/pages/searchTheItemPage.cy")
const { stockPage } = require("../../support/pages/stockPage.cy")




describe('Cypress Tests - epicentrk.ua', () => {

    it('Verify if the price filter working correctly for the following marketplaces', () => {
		basePage.uncaughtException()
        filterPage.filterWork()
        filterPage.verifySortedCorrectly()
		
	})

	it('Add items to the basket and calculate the total price of all products in the cart', () => {
		basePage.uncaughtException()
		basketPage.addItemsToTheBasketAndVerifyInformation()
		basketPage.calculateTotalAmount()

	})


	it('Search the item and verify that all items are correctly displayed', () => {
		basePage.uncaughtException()
		searchTheItemPage.searchTheItemAndCorrectlyDisplayed()

	})


	it('Verify Localization', () => {
		basePage.uncaughtException()
		stockPage.stockPageVerifyLocalization()

	})

})





