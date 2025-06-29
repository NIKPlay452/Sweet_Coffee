document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.email === email);

    if (!user) {
        showPopup("Такого аккаунта нет.");
        return;
    }

    if (user.password !== password) {
        showPopup("Неправильный пароль.");
        return;
    }

    localStorage.setItem('lastUserData', JSON.stringify({ username: user.username, email: user.email, password: user.password }));

    showPopup("Успешный вход!");

    setTimeout(() => {
        window.location.href = '../profile/profile.html';
    }, 2000);
});

function showPopup(message) {
    const popup = document.querySelector('.popup');
    const messageDiv = document.getElementById('popup-message');
    messageDiv.textContent = message;
    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.querySelector('.popup');
    popup.style.display = 'none';
}