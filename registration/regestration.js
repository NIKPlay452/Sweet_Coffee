const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const popup = document.querySelector('.popup');
const messageBox = popup.querySelector('.message');

function showMessage(message) {
    messageBox.innerText = message;
    popup.style.display = 'flex';
}

function validateForm(event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    if (existingUsers.some(user => user.username === username)) {
        showMessage('Nickname занят. Пожалуйста, выберите другой.');
        return;
    }

    if (existingUsers.some(user => user.email === email)) {
        showMessage('Пользователь с таким email уже существует.');
        return;
    }

    if (!email.includes('@')) {
        showMessage('Почта введена неправильно.');
        return;
    }

    if (password !== confirmPassword) {
        showMessage('Пароли не совпадают.');
        return;
    }

    const newUser = {
        username: username,
        email: email,
        password: password
    };

    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    localStorage.setItem('lastUserData', JSON.stringify({ username, email, password }));

    console.table(existingUsers);
    showMessage('Аккаунт успешно создан!');

    setTimeout(() => {
        window.location.href = '../profile/profile.html';
    }, 2000);
}

function closePopup() {
    popup.style.display = 'none';
}

document.querySelector('form').addEventListener('submit', validateForm);
