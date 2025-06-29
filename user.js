
const profileLink = document.querySelector('nav a[href="../profile/profile.html"]');

function checkUserData(event) {
    event.preventDefault();

    const userData = JSON.parse(localStorage.getItem('lastUserData'));

    if (!userData) {
        window.location.href = '../login/login.html';
    } else {
        window.location.href = '../profile/profile.html';
    }
}

profileLink.addEventListener('click', checkUserData);
