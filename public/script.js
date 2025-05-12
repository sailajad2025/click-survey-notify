
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if(mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
  
  // Set active nav link based on current page
  const currentLocation = window.location.pathname;
  const navItems = document.querySelectorAll('.nav-links a');
  
  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if(currentLocation.includes(href) && href !== '/' || 
       (href === '/' && (currentLocation === '/' || currentLocation === '/index.html'))) {
      item.classList.add('active');
    }
  });
  
  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  
  if(contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Simple validation
      if(name && email && subject && message) {
        // In a real application, you would send this data to a server
        // For now, we'll just show a success message
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
      } else {
        alert('Please fill in all fields.');
      }
    });
  }
});
