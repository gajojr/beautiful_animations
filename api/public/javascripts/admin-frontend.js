const logInDugme = document.getElementById('login-button')
logInDugme.addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector('.wrapper').classList.add('form-success');
});