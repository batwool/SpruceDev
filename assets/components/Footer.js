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
                                <li><a href="./contact.html">Contact</a></li>
                            </ul>
                        </div>
                        <div class="footer-column">
                            <h3>Contact Us</h3>
                            <ul>
                                <li><i class="fas fa-phone"></i> (555) 123-4567</li>
                                <li><i class="fas fa-envelope"></i> info@sprucedev.com</li>
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
                        <img src="../assets/images/logo-small.png">
                        <p>&copy; 2025 Spruce Development. All rights reserved.</p>
                    </div>
                </div>
            </footer>`;
    }
}

customElements.define("site-footer", SiteFooter);
