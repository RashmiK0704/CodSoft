// Get all navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Highlight the active link
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.style.color = 'yellow'; // Highlight color
    link.style.fontWeight = 'bold';
  }
});


// Contact form validation
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Thank you for your message!');
});

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}


// Smooth scrolling for internal links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      if (this.href.includes('#')) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
  