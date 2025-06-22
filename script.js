// Add smooth scrolling for sidebar navigation
document.querySelectorAll('.sidebar nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight active sidebar link on click
document.querySelectorAll('.sidebar nav a').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.sidebar nav a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Section transition in/out effect on scroll
function revealSections() {
  const sections = document.querySelectorAll('main.content section');
  const trigger = window.innerHeight * 0.85;
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < trigger && rect.bottom > 60) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('resize', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);

// Carousel functionality
document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const dotsContainer = document.querySelector('.carousel-dots');
  let current = 0;

  function showItem(idx) {
    items.forEach((item, i) => {
      item.classList.toggle('active', i === idx);
      if (dotsContainer.children[i]) {
        dotsContainer.children[i].classList.toggle('active', i === idx);
      }
    });
  }

  // Create dots
  items.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.addEventListener('click', () => {
      current = i;
      showItem(current);
    });
    dotsContainer.appendChild(dot);
  });

  // Initial state
  showItem(current);

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + items.length) % items.length;
    showItem(current);
  });

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % items.length;
    showItem(current);
  });
});