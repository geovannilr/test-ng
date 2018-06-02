import { by, browser, element } from 'protractor';
import {LoginPage} from './login.page.po';

describe('TestNG App E2E Test Suite', () => {
	const loginPage = new LoginPage();
	describe('home page should work fine', () => {
		beforeAll(() => {
			loginPage.getPage();
			console.log('as');
		});
		
		it('should have right title', () => {
			loginPage.getPageTitle()
				.then((title: string) => {
					expect(title).toEqual('Test NG');
				});
		})
		
	})
})