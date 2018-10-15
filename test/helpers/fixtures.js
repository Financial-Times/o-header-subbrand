const	titleOnly = `
	<header class='o-header-services' data-o-component='o-header'>
		<div class='o-header-services__top o-header-services__container'>
			<div class='o-header-services__ftlogo'></div>
			<div class='o-header-services__title'>
				<h1 class='o-header-services__product-name'><a href="/">Tool or Service name</a></h1><span class='o-header-subrand__product-tagline '>Tagline to explain the product here</span>
			</div>
		</div>
	</header>
`;

const	withPrimaryNav = `
	<header class='o-header-services' data-o-component='o-header-services'>
		<div class='o-header-services__top o-header-services__container'>
			<div class="o-header-services__hamburger">
				<a class="o-header-services__hamburger-icon" href="#" aria-controls="o-header-drawer" role="button" data-o-toggle--js="true" aria-expanded="false"><span class="o-header__visually-hidden">Menu</span></a>
			</div>
			<div class='o-header-services__ftlogo'></div>
			<div class='o-header-services__title'>
				<h1 class='o-header-services__product-name'><a href="/">Tool or Service name</a></h1><span class='o-header-subrand__product-tagline'>Tagline to explain the product here</span>
			</div>
			<ul class="o-header-services__related-content">
				<li class="o-header-services__related-content-list-item">
					<a class="o-header-services__related-content-link" href="#">XXXX</a>
				</li>
				<li class="o-header-services__related-content-list-item">
					<a class="o-header-services__related-content-link" href="#">Sign in</a>
				</li>
			</ul>
		</div>
		<nav class='o-header-services__primary-nav'>
			<div class='o-header-services__nav-container'>
				<ul class='o-header-services__nav-list'>
					<li class='o-header-services__nav-item'>
						<a class='o-header-services__nav-link o-header-services__nav-link--selected' href='#item-1'>
							Nav item 1
						</a>
					</li>
					<li class='o-header-services__nav-item'>
						<a class='o-header-services__nav-link' href='#'>
							Nav item 2
						</a>
					</li>
					<li class='o-header-services__nav-item'>
						<a class='o-header-services__nav-link' href='#'>
							Nav item 3
						</a>
					</li>
					<li class='o-header-services__nav-item'>
						<a class='o-header-services__nav-link' href='#'>
							Nav item 4
						</a>
					</li>
				</ul>
				<button class="o-header-services__scroll-button o-header-services__scroll-button--left" aria-hidden="true" disabled></button>
				<button class="o-header-services__scroll-button o-header-services__scroll-button--right" aria-hidden="true" disabled></button>
			</div>
		</nav>
	</header>
`;

const withSubNav = '';

export {
	titleOnly,
	withPrimaryNav,
	withSubNav
};