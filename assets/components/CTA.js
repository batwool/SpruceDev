class SiteCTA extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="dark-gradient-section" id="contact">
                <div class="container">
                    <div class="section-title">
                        <h2>Ready to Grow Your Business?</h2>
                        <p>Contact us today for a free consultation and estimate. Let's discuss how we can help your business thrive online.</p>
                        <a href="#contact" class="cta-button mtop50 inline-block">Get Your Free Estimate</a>
                    </div>
                </div>
            </section>`;
    }
}

customElements.define("site-cta", SiteCTA);
