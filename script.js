document.addEventListener("DOMContentLoaded", function() {
    // Highlight active menu item
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('#nav-menu a');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].className = "active";
        }
    }

    // Smooth scroll to sections (if any)
    const scrollLinks = document.querySelectorAll('.btn.secondary, #nav-menu a[href^="#"]');
    for (const link of scrollLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetID = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetID);
            if (targetSection) {
                window.scroll({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message. We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Handle Subscribe button click
    const subscribeBtn = document.getElementById('subscribe-btn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function() {
            window.location.href = 'courses.html';
        });
    }

    // Handle horizontal scroll for popular topics
    const scrollContainer = document.querySelector('.scroll-container .topics');
    const scrollLeftBtn = document.querySelector('.scroll-left');
    const scrollRightBtn = document.querySelector('.scroll-right');
    const scrollAmount = 170; // Adjust based on the width of each topic and the gap

    scrollLeftBtn.addEventListener('click', function() {
        scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    scrollRightBtn.addEventListener('click', function() {
        scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
});
