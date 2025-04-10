// Mostrar solo 4 inicialmente
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, i) => {
      if (i < 4) {
        card.classList.add('visible');
      }
    });
  });
  
  // Efecto scroll reveal progresivo
  window.addEventListener('scroll', () => {
    document.querySelectorAll('.card').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100 && !el.classList.contains('visible')) {
        el.classList.add('visible');
      }
    });
  });