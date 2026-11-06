function initServicesPage() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;

  KRICHMO_CONFIG.services.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.dataset.category = service.category;
    card.innerHTML = `
      <div class="service-icon"><i class="fas ${service.icon}"></i></div>
      <h3>${service.name}</h3>
      <p>${service.description}</p>
      <a href="quote.html" class="learn-more">REQUEST QUOTE <i class="fas fa-arrow-right"></i></a>
    `;
    grid.appendChild(card);
  });

  const filters = document.querySelectorAll('.filter-btn');
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.dataset.category;
      
      const cards = grid.querySelectorAll('.service-card');
      cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}