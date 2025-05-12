
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

  // Newsletter subscription
  const newsletterForm = document.querySelector('form[action*="newsletter"]');
  
  if(newsletterForm) {
    newsletterForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Get email value
      const email = newsletterForm.querySelector('input[type="email"]').value;
      
      // Simple validation
      if(email) {
        // In a real application, you would send this data to a server
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
      } else {
        alert('Please enter your email address.');
      }
    });
  }

  // Testimonial slider (if present)
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  
  if(testimonialCards.length > 0) {
    let currentTestimonial = 0;
    
    // Show the first testimonial initially
    testimonialCards[currentTestimonial].style.display = 'block';
    
    // If there are navigation controls
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    
    if(prevBtn && nextBtn) {
      // Previous button click
      prevBtn.addEventListener('click', function() {
        testimonialCards[currentTestimonial].style.display = 'none';
        currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
        testimonialCards[currentTestimonial].style.display = 'block';
      });
      
      // Next button click
      nextBtn.addEventListener('click', function() {
        testimonialCards[currentTestimonial].style.display = 'none';
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        testimonialCards[currentTestimonial].style.display = 'block';
      });
    }
  }

  // Feature tabs (if present)
  const featureTabs = document.querySelectorAll('.feature-tab');
  const featureContents = document.querySelectorAll('.feature-content');
  
  if(featureTabs.length > 0 && featureContents.length > 0) {
    featureTabs.forEach((tab, index) => {
      tab.addEventListener('click', function() {
        // Remove active class from all tabs and content
        featureTabs.forEach(t => t.classList.remove('active'));
        featureContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to current tab and content
        tab.classList.add('active');
        featureContents[index].classList.add('active');
      });
    });
  }
});
