function initProjectsPage() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  KRICHMO_CONFIG.projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-page-card';
    card.dataset.category = project.category;
    card.innerHTML = `
      <div class="project-image">
        <i class="fas fa-image" style="font-size: 3rem; color: var(--color-border);"></i>
      </div>
      <div class="project-info">
        <span class="project-category">${project.category.toUpperCase()}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="quote.html" class="learn-more" style="margin-top: 1rem; display: inline-block;">ENQUIRE <i class="fas fa-arrow-right"></i></a>
      </div>
    `;
    grid.appendChild(card);
  });

  const filters = document.querySelectorAll('.filter-btn');
  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.dataset.category;
      
      const cards = grid.querySelectorAll('.project-page-card');
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