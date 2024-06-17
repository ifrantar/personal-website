document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 80) {
      nav.classList.add('sticky-header');
    } else if (scrollPosition < 500) {
      nav.classList.remove('sticky-header');
    }
});