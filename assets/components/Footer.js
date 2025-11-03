class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-column">
                            <h3>Spruce Development</h3>
                            <p>Helping local businesses establish a strong online presence and attract more customers.</p>
                        </div>
                        <div class="footer-column">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="./services.html">Services</a></li>
                                <li><a href="./portfolio.html">Portfolio</a></li>
                                <li>
                                    <a onclick="
                                        document.getElementById('contact-overlay').classList.add('active');
                                        document.body.classList.add('no-scroll');
                                    ">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer-column">
                            <h3>Contact Us</h3>
                            <ul>
                                <li><i class="fas fa-phone"></i> (970) 331-4508</li>
                                <li><i class="fas fa-envelope"></i> spruce.webdev@gmail.com</li>
                            </ul>
                        </div>
                        <div class="footer-column">
                            <h3>Follow Us</h3>
                            <div class="social-links">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="copyright">
                        <img src="assets/images/logo-small.png">
                        <p>&copy; 2025 Spruce Development. All rights reserved.</p>
                    </div>
                </div>
            </footer>`;
    }
}

customElements.define("site-footer", SiteFooter);
