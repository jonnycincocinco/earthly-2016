	<footer class="site-footer anim-in-out anim-slide-below-fade below-hero" data-anim-speed="2000">
		<div class="cta-ribbon section-strip">
				<h2 class="text-align-center white">Ready to make a difference?</h2>
				<p class="cta-ribbon__subhead text-align-center light-green">Start your investment plan.</p>
					<button ui-sref="sign-up" class="cta">Get Started</button>
		</div>
		<div class="container">

			<div class="grid">
				<div class="grid__item">
					<span class="site-footer-brand__ident">Earthly</span>
				</div>
				<div class="grid__item">
					<ul class="site-footer-list">
							<!--li><span class="site-footer-list__title">Features</span></li-->
							<li><a class="site-footer-list__link" ui-sref="services" ng-class="{active: $state.current.activetab == 'services'}">Services</a></li>
							<li><a class="site-footer-list__link" ui-sref="earthly-dna" ng-class="{active: $state.current.activetab == 'earthly-dna'}">Earthly(DNA)</a></li>
							<li><a class="site-footer-list__link" ui-sref="portfolio" ng-class="{active: $state.current.activetab == 'portfolio'}">Portfolio</a></li>
							<li><a class="site-footer-list__link" ui-sref="security" ng-class="{active: $state.current.activetab == 'security'}">Security</a></li>
					</ul>
				</div>
				<div class="grid__item">
					<ul class="site-footer-list">
						<li><a class="site-footer-list__link" ui-sref="fees" ng-class="{active: $state.current.activetab == 'fees'}">Fees</a></li>
						<li><a class="site-footer-list__link" ui-sref="faqs" ng-class="{active: $state.current.activetab == 'faqs'}">FAQs</a></li>
						<li><a class="site-footer-list__link" ui-sref="library" ng-class="{active: $state.current.activetab == 'library'}">Library</a></li>
						<li><a class="site-footer-list__link" ui-sref="about" ng-class="{active: $state.current.activetab == 'about'}">About</a></li>
					</ul>
				</div>
				<div class="grid__item">
					<ul class="site-footer-list">
							<li><a class="site-footer-list__link" ui-sref="privacy-policy" ng-class="{active: $state.current.activetab == 'privacy-policy'}">Privacy Policy</a></li>
							<li><a class="site-footer-list__link" ui-sref="client-agreement" ng-class="{active: $state.current.activetab == 'client-agreement'}">Client Agreement</a></li>
							<li><a class="site-footer-list__link" ui-sref="terms" ng-class="{active: $state.current.activetab == 'terms'}">Terms of Use</a></li>
					</ul>
				</div>
				<div class="grid__item">
					<ul class="site-footer-list site-footer-list--social">
					<li><a class="site-footer-list__icon site-footer-list__icon--facebook" href="https://www.facebook.com/earthlypbc">Facebook</a></li>
					<li><a class="site-footer-list__icon site-footer-list__icon--twitter" href="https://twitter.com/earthlypbc">Twitter</a></li>
					<li><a class="site-footer-list__icon site-footer-list__icon--linkedin" href="https://www.linkedin.com/company/10879024">Linkedin</a></li>
				</ul>
				<ul class="site-footer-list">
					<li><a class="site-footer-list__link orange" ui-sref="contact">Contact Us</a></li>
				</ul>
				</div>

			</div>
		</div>

		<div class="container">
			<div class="grid">
				<hr class="site-footer-divider">
				</div>
		</div>

		<div class="container">
			<div class="grid">
				<div class="grid__item legal white">
					<p>Past performance is no guarantee of future results. Investments are not FDIC insured, and securities and investments may lose value. Any historical returns, expected returns, or probability projections may not reflect actual future performance. All securities involve risk and may result in loss. All information herein as well as any communications on social media is not an offer, solicitation of an offer, or advice to buy or sell securities or services.</p>
				</div>

				<div class="grid__item legal white">
					<p>Earthly is a Public Benefit Corporation and is an SEC registered investment advisor.  Brokerage services are provided by Folio Investments, Inc.</p>
					<p>By using this website, you hereby consent to our <a ui-sref="terms" class="white">Terms of Use</a> and <a  class="white" ui-sref="privacy-policy">Privacy Policy</a>.</p>
					<p>Securities in your account are protected up to $500,000. See <a href="http://sipc.org" class="white">sipc.org</a> for more details.</p>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="grid">
				<hr class="site-footer-divider">
				</div>
		</div>

		<div class="container">
			<div class="grid">
				<div class="grid__item copyright text-align-center">
					<p class="white">&copy; Earthly 2017</p>
				</div>
	</footer>
</body>
</html>
