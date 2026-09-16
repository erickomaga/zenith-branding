document.addEventListener('DOMContentLoaded', () => {
    // Inicialização do AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 700,
            easing: 'ease-out',
            once: true
        });
    }

    // Menu Mobile
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // FAQ Accordion
    const faqBoxes = document.querySelectorAll('.faq-box');
    faqBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const isOpen = box.classList.contains('open');
            faqBoxes.forEach(b => b.classList.remove('open'));
            if (!isOpen) {
                box.classList.add('open');
            }
        });
    });
});