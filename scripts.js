document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            const offset = 50; // Adjust this value for breathing room

            window.scrollTo({
                top: targetSection.offsetTop - offset, 
                behavior: 'smooth',
            });
        });
    });

    // Section active link highlight on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 400; // Breathing room for the top
            const sectionHeight = section.clientHeight;

            // Check if scroll is above first section
            if (scrollPosition < sections[0].offsetTop) {
                current = 'intro';  // Highlight 'Intro' when at the top of the page
            } 
            // Standard logic for highlighting sections
            else if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Expand/Collapse functionality for project items
    const projectItems = document.querySelectorAll('.project-item');

    projectItems.forEach(item => {
        const readMore = item.querySelector('.read-more-icon');
        const projectDetails = item.querySelector('.project-details');

        readMore.addEventListener('click', () => {
            if (projectDetails.style.display === 'none' || !projectDetails.style.display) {
                projectDetails.style.display = 'block';
                item.classList.add('expanded'); // Adds the expanded class
                readMore.innerHTML = 'Read Less &#x2191;';
            } else {
                projectDetails.style.display = 'none';
                item.classList.remove('expanded'); // Removes the expanded class
                readMore.innerHTML = 'Read More &#x2193;';
            }
        });
    });
});