class SiteCTA extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section class="dark-section" id="contact">
                <div class="container">
                    <div class="section-title">
                        <h2>Ready to Grow Your Business?</h2>
                        <p style="color: white;">Contact us today for a free consultation and estimate. Let's discuss how we can help your business thrive online.</p>
                        <a class="dark-cta-button mtop50 inline-block" onclick="document.getElementById('contact-overlay').classList.add('active');document.body.classList.add('no-scroll');">
                        Get Your Free Estimate
                        </a>
                    </div>
                </div>
            </section>`;
    }
}

customElements.define("site-cta", SiteCTA);
