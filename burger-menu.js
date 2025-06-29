document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('show');
        mobileMenu.setAttribute('aria-hidden', mobileMenu.classList.contains('show') ? "false" : "true");
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
        mobileMenu.setAttribute('aria-hidden', "true");
    });

    const profileLink = document.querySelector('nav a[href="../profile/profile.html"]');
    profileLink.addEventListener('click', checkUserData);

    const mobileProfileLink = document.querySelector('.mobile-menu a[href="../profile/profile.html"]');
    mobileProfileLink.addEventListener('click', checkUserData);
});

function checkUserData(event) {
    event.preventDefault();

    const userData = JSON.parse(localStorage.getItem('lastUser Data'));

    if (!userData) {
        window.location.href = '../login/login.html';
    } else {
        window.location.href = '../profile/profile.html';
    }
}
