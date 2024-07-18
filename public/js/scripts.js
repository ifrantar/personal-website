document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    
    // Create the placeholder element
    const navPlaceholder = document.createElement('div');
    navPlaceholder.classList.add('nav-placeholder');
    navPlaceholder.style.height = `${nav.offsetHeight}px`;
    navPlaceholder.style.display = 'none';
    
    // Insert the placeholder before the nav element
    nav.parentNode.insertBefore(navPlaceholder, nav);

    document.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 80) {
            nav.classList.add('sticky-header');
            navPlaceholder.style.display = 'block';
        } else {
            nav.classList.remove('sticky-header');
            navPlaceholder.style.display = 'none';
        }
    });
});