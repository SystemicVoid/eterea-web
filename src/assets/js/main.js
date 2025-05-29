/**
 * Eteréa Website JavaScript
 * Contains functionality for responsive navigation and UI enhancements
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add active class to current nav item
  const currentPage = window.location.pathname;
  document.querySelectorAll('.menu a').forEach(link => {
    const linkPath = link.getAttribute('href');
    if (currentPage === linkPath || (linkPath !== '/' && currentPage.startsWith(linkPath))) {
      link.classList.add('active');
    }
  });
});