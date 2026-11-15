const loginContainer = document.querySelector('.login-container');
const signup = document.querySelector('.show-signup');
const login = document.querySelector('.show-login');

signup.onclick = event => {
    event.preventDefault();
    loginContainer.classList.add('signup-mod');
};

login.onclick = event => {
    event.preventDefault();
    loginContainer.classList.remove('signup-mod');
};

