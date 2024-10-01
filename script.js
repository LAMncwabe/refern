document.querySelectorAll('.accordion-item').forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    const toggle = item.querySelector('.toggle');
  
    header.addEventListener('click', () => {
      // Toggle accordion content visibility
      const isVisible = content.style.display === 'block';
      content.style.display = isVisible ? 'none' : 'block';
  
      // Change the toggle symbol
      toggle.textContent = isVisible ? '+' : '-';
    });
  });


document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
});


