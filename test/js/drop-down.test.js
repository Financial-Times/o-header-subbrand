/* eslint-env mocha*/

import proclaim from 'proclaim';
import HeaderServices from '../../src/js/header';
import * as fixtures from '../helpers/fixtures';

describe('Dropdown', () => {
	let attribute;
	let click;
	let headerEl;
	let navItems;

	beforeEach(() => {
		document.body.innerHTML = fixtures.withPrimaryNav;
		headerEl = document.body.querySelector('.o-header-services');
		new HeaderServices(headerEl);
		navItems = document.querySelectorAll('li[data-o-header-services-level="1"]');
		click = (parent, element) => parent.querySelector(element).dispatchEvent(new Event('click'));
	});

	afterEach(() => {
		document.body.removeChild(headerEl);
		headerEl = null;
	});

	describe('toggles drop down menu via `aria-expanded`', () => {
		it('open on click', () => {
			click(navItems[0], 'button');
			attribute = navItems[0].getAttribute('aria-expanded') === 'true';
			proclaim.isTrue(attribute);
		});

		it('hides on double click', () => {
			click(navItems[0], 'button');
			click(navItems[0], 'button');
			attribute = navItems[0].getAttribute('aria-expanded') === 'false';
			proclaim.isTrue(attribute);
		});

		it('hides open dropdowns when different nav item is toggled', () => {
			click(navItems[0], 'button');
			attribute = navItems[0].getAttribute('aria-expanded') === 'true';
			proclaim.isTrue(attribute);
			click(navItems[1], 'button');
			attribute = navItems[0].getAttribute('aria-expanded') === 'false';
			proclaim.isTrue(attribute);
			attribute = navItems[1].getAttribute('aria-expanded') === 'true';
			proclaim.isTrue(attribute);
		});

		it('hides all menus if click outside of nav items', () => {
			click(navItems[0], 'button');
			attribute = navItems[0].getAttribute('aria-expanded') === 'true';
			proclaim.isTrue(attribute);
			click(document, 'body');
			attribute = navItems[0].getAttribute('aria-expanded') === 'false';
			proclaim.isTrue(attribute);
		});
	});

	describe('toggles drop down menu via `aria-expanded`', () => {
		it('repositions dropdown menu if it doesnt fit to the right of the window', () => {
			navItems[1].style.width = '1000px';
			click(navItems[1], 'button');
			proclaim.isTrue(navItems[1].lastElementChild.classList.contains('o-header-services__list--right'));
		});
	});
});
