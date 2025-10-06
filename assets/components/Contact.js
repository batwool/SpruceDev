class SiteContact extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="contact-card">
                <div class="contact-header">
                    <h2>Contact Us</h2>
                </div>
                
                <form class="contact-form">
                    <div class="form-group">
                        <label for="name" class="required">Full Name</label>
                        <input type="text" id="name" name="name" required placeholder="Your full name">
                    </div>
                    
                    <div class="form-group">
                        <label for="email" class="required">Email Address</label>
                        <input type="email" id="email" name="email" required placeholder="your.email@example.com">
                    </div>
                    
                    <div class="form-group">
                        <label for="company">Company Name</label>
                        <input type="text" id="company" name="company" placeholder="Your company (if applicable)">
                    </div>
                    
                    <div class="form-group">
                        <label for="description" class="required">Website Description</label>
                        <textarea id="description" name="description" required placeholder="Please describe your project, goals, timeline, and any specific requirements..."></textarea>
                    </div>
                    
                    <button type="submit" class="submit-btn">Send Inquiry</button>
                </form>
            </div>`;
    }
}

customElements.define("site-contact", SiteContact);