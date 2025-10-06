class SiteNavbar extends HTMLElement {
    connectedCallback() {
        const current = this.getAttribute("current");

        this.innerHTML = `
            <div class="container">
                <nav>
                    <div class="logo" onclick="window.location.href='./index.html'">
                        <i class="fas fa-tree"></i>
                        <span class="logo-text">SPRUCE DEV</span>
                    </div>
                    <ul class="nav-links">
                        <li><a href="./about.html">About Us</a></li>
                        <li><a href="./services.html">Services</a></li>
                        <li><a href="./portfolio.html">Portfolio</a></li>
                        <li>
                            <a 
                                href="#contact" 
                                class="cta-button" 
                                onclick="
                                    document.getElementById('contact-overlay').classList.add('active');
                                    document.body.classList.add('no-scroll');
                                "
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>

                    <!-- Burger menu -->
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="35" height="35" 
                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="burger-menu-icon"
                        id="open-burger-menu-icon"
                        onclick="
                            document.getElementById('burger-menu-overlay').classList.add('active');
                            document.body.classList.add('no-scroll')
                        "
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 8l16 0" />
                        <path d="M4 16l16 0" />
                    </svg>
                    <div 
                        class="overlay" 
                        id="burger-menu-overlay"
                        onclick="
                            document.getElementById('burger-menu-overlay').classList.remove('active');
                            document.body.classList.remove('no-scroll');
                        "
                    >
                        <div class="burger-menu" onclick="event.stopPropagation()">
                            <div>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="35" height="35" viewBox="0 0 24 24" 
                                    fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-x"
                                    onclick="
                                        document.getElementById('burger-menu-overlay').classList.remove('active');
                                        document.body.classList.remove('no-scroll')
                                    "
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M18 6l-12 12" />
                                    <path d="M6 6l12 12" />
                                </svg>
                            </div>
                            
                            <ul class="burger-nav-links">
                                <li><a href="./about.html">About Us</a></li>
                                <li><a href="./process.html">Process</a></li>
                                <li><a href="./portfolio.html">Portfolio</a></li>
                                <li style="margin-top: 25px;">
                                    <a href="#contact" class="cta-button">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            `;

        // Highlight the active page depending on what the current property is
        if (current) {
            this.querySelectorAll("a").forEach(link => {
                if (link.textContent.trim().toLowerCase() === current.toLowerCase()) {
                    link.style.fontWeight = "bold";
                }
            });
        }
    }
}

customElements.define("site-navbar", SiteNavbar);
