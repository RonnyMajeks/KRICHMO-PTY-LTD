document.addEventListener('DOMContentLoaded', () => {
  injectSharedLayout();
  initNavigation();
  initBackToTop();
  updateCopyrightYear();
  
  if (document.getElementById('services-grid')) initServicesPage();
  if (document.getElementById('projects-grid')) initProjectsPage();
  if (document.getElementById('quote-form')) initQuoteForm();
});

function injectSharedLayout() {
  const headerHTML = `
    <header class="site-header">
      <div class="container header-inner">
        <a href="index.html" class="logo">
          <img src="assets/images/krichmo-logo.jpeg" alt="KRICHMO (PTY) LTD" class="logo-img">
        </a>
        <a href="tel:+27838985029" class="header-phone">
          <i class="fas fa-phone"></i> +27 (0)83 898 5029
        </a>
        <button class="mobile-menu-toggle" aria-label="Toggle navigation" aria-expanded="false">
          <span class="hamburger"></span>
        </button>
        <nav class="main-nav">
          <ul class="nav-list">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="values.html">Our Values</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
          <a href="quote.html" class="btn btn-primary nav-cta">Get a Quote</a>
        </nav>
      </div>
    </header>
  `;

  const footerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-col">
          <h3>KRICHMO (PTY) LTD</h3>
          <p>We offer residential and commercial electrical services throughout the Northern Cape. 100% Black-owned and managed, established in 2021.</p>
          <div class="footer-social">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="https://wa.me/27838985029" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div class="footer-col">
          <h3>Company</h3>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>Services</h3>
          <ul>
            <li><a href="services.html">Installation</a></li>
            <li><a href="services.html">Maintenance</a></li>
            <li><a href="services.html">Solar</a></li>
            <li><a href="services.html">COC</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>Newsletter</h3>
          <p style="color:#94a3b8; font-size:0.9rem; margin-bottom:1rem;">Subscribe to get the latest news from us.</p>
          <div class="footer-newsletter">
            <input type="email" placeholder="Email">
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div class="footer-bottom container">
        <p>&copy; <span id="current-year"></span> KRICHMO (PTY) LTD. All rights reserved.</p>
        <div class="footer-legal">
          <a href="privacy.html">Privacy Policy</a>
          <a href="terms.html">Terms of Use</a>
        </div>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
}

function updateCopyrightYear() {
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
}

function initBackToTop() {
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  btn.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 300);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}