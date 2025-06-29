const profileForm = document.getElementById('profile-form');
const nicknameInput = document.getElementById('nickname');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const cancelButton = document.getElementById('cancel-btn');
const signOutLink = document.querySelector('.sign-out');

function loadUserData() {
    const lastUserData = JSON.parse(localStorage.getItem('lastUserData'));
    if (lastUserData) {
        nicknameInput.value = lastUserData.username;
        emailInput.value = lastUserData.email;
        passwordInput.value = lastUserData.password;
    }
}

function saveChanges(event) {
    event.preventDefault();

    const updatedUser = {
        username: nicknameInput.value.trim(),
        email: emailInput.value.trim(),
        password: passwordInput.value
    };

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const index = existingUsers.findIndex(user => user.email === updatedUser.email);
    
    if (index !== -1) {
        existingUsers[index] = updatedUser;
        localStorage.setItem('users', JSON.stringify(existingUsers));
        alert('Changes saved successfully!');
    }
}

function clearFields() {
    loadUserData();
}

function signOut() {
    const lastUserData = JSON.parse(localStorage.getItem('lastUserData'));
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    if (lastUserData) {
        const index = existingUsers.findIndex(user => user.email === lastUserData.email);
        
        if (index !== -1) {
            existingUsers[index] = {
                username: nicknameInput.value.trim(),
                email: emailInput.value.trim(),
                password: passwordInput.value
            };
            localStorage.setItem('users', JSON.stringify(existingUsers));
        }
    }
    
    localStorage.removeItem('lastUserData');
    window.location.href = '../login/login.html';
}

profileForm.addEventListener('submit', saveChanges);
cancelButton.addEventListener('click', clearFields);
signOutLink.addEventListener('click', signOut);

loadUserData();