// Blog Post Shared JavaScript
// Header scroll effect and mobile menu functionality

document.addEventListener('DOMContentLoaded', function() {
  // Header scroll effect
  const header = document.getElementById('site-header');
  
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
});

// Mobile menu toggle (placeholder - would need more complex implementation for full functionality)
function toggleMobileMenu() {
  alert('Mobile menu functionality would be implemented here');
}
