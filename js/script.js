// script.js — Custom JS logic for portfolio

document.addEventListener("DOMContentLoaded", () => {
  // Dark mode toggle (optional enhancement)
  const toggleDark = document.querySelector('#theme-toggle');
  if (toggleDark) {
    toggleDark.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    });
  }

  // Resume download button (smooth download effect)
  const resumeBtn = document.querySelector('#resume-download');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', () => {
      const link = document.createElement('a');
      link.href = 'assets/fidha_resume.pdf';
      link.download = 'Fidha_Resume.pdf';
      link.click();
    });
  }

  // Form validation or AJAX handling for contact form (optional)
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      const email = contactForm.querySelector('input[name="email"]');
      if (!email.value.includes('@')) {
        e.preventDefault();
        alert('Please enter a valid email address.');
      }
    });
  }
});