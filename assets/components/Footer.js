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
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="copyright">
                        <svg class="tree-icon" viewBox="0 0 24 24">
                            <path d="M12,22V18C12,18 8,16 8,11C8,7 12,4 12,4C12,4 16,7 16,11C16,16 12,18 12,18V22C12,22 16,20 16,16H14C14,18 12,20 12,20C12,20 10,18 10,16H8C8,20 12,22 12,22Z" />
                        </svg>
                        <p>&copy; 2025 Spruce Development. All rights reserved.</p>
                    </div>
                </div>
            </footer>`;
    }
}

customElements.define("site-footer", SiteFooter);
