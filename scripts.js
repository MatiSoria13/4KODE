document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    
    const options = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    sections.forEach(section => {
        observer.observe(section);
    });

    // Interactivity for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 80, // Adjust for fixed header
                behavior: 'smooth'
            });
        });
    });

    // Form submission handler
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted! We will get back to you soon.');
        contactForm.reset();
    });

    // Add hover effects to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.05)';
            button.style.backgroundColor = '#1abc9c';
        });

        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
            button.style.backgroundColor = '#2c3e50';
        });
    });
});
