import oGrid from 'o-grid';
import * as oUtils from 'o-utils';

class Drawer {
	/**
	 * Class constructor.
	 * @param {HTMLElement} [headerEl] - The component element in the DOM
	 */
	constructor(headerEl) {
		this.headerEl = headerEl;
		this.nav = headerEl.querySelector('.o-header-services__primary-nav');
		this.class = {
			drawer: 'o-header-services__primary-nav--drawer',
			open: 'o-header-services__primary-nav--open'
		};

		if (!this.nav) { return; }

		this.debouncedRender = oUtils.debounce(() => this.render(), 100);
		this.burger = this.headerEl.querySelector('.o-header-services__hamburger-icon');
		this.burger.addEventListener('click', this);
		window.addEventListener('resize', this);
		window.addEventListener('keydown', this);
		this.render();
	}

	/**
	 * Event Handler
	 * @param {Object} event - The revent emitted by element/window interactions
	 */
	handleEvent(e) {
		if (e.type === 'resize') {
			this.debouncedRender();
		} else if (e.type === 'keydown') {
			if (e.key === 'Escape' && this.nav.classList.contains(this.class.open)) {
				this.toggleDrawer();
				this.burger.focus();
			}
		} else if (e.type === 'click' || e.type === 'focusout') {
			this.toggleDrawer();
		}
	}

	/**
	 * Drawer rendering
	 */
	render () {
		const enableDrawer = oGrid.getCurrentLayout() === 'default' || oGrid.getCurrentLayout() === 'S' || window.innerWidth <= 740;

		if (enableDrawer) {
			this.nav.addEventListener('click', this);
		} else {
			this.nav.removeEventListener('click', this);
		}

		this._shiftRelatedContentList(enableDrawer);
		this.nav.classList.toggle(this.class.drawer, enableDrawer);
		this.nav.classList.toggle(this.class.open, !enableDrawer);

		this.nav.setAttribute('aria-hidden', enableDrawer);
	}

	/**
	 * Drawer hide/show functionality
	 */
	toggleDrawer () {
		this.nav.classList.toggle(this.class.open, this.nav.classList.contains(this.class.open));
		this.burger.classList.toggle('o-header-services__hambuger--open');
		this._toggleAriaAttributes(this.nav.classList.contains(this.class.open));
	}

	/**
	 * Shift related content (sign in, etc) between drawer and header title section
	 */
	_shiftRelatedContentList (shiftItems) {
		let relatedContent = this.headerEl.querySelector('.o-header-services__related-content');

		if (!relatedContent) { return; }

		let headerTop = this.headerEl.querySelector('.o-header-services__top');
		let navList = this.nav.querySelector('.o-header-services__primary-nav-list');

		return shiftItems ? navList.appendChild(relatedContent) : headerTop.appendChild(relatedContent);
	}

	/**
	 * Set aria attributes specific to presence of drawer
	 */
	_toggleAriaAttributes(expand) {
		this.nav.setAttribute('aria-hidden', !expand);
		this.burger.setAttribute('aria-expanded', expand);
		this.burger.querySelector('span').innerText = expand ? 'Close primary navigation' : 'Open primary navigation';
	}
}

export default Drawer;