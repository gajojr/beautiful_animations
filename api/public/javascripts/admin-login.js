const check_user_login = sessionStorage.getItem('user_loged_in');
if (check_user_login) {
    location.href = '/admin-page';
}

const logInBtn = document.getElementById('login-button')
logInBtn.addEventListener('click', (e) => {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    if (!username.value || !password.value) {
        e.preventDefault();
        shakingInputAnimation([username, password]);

        setTimeout(() => {
            alert('You must fill in the fields');
        }, 800);
    } else {
        fetch('/admin-login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    username: username.value,
                    password: password.value
                })
            })
            .then((response) => {
                if (response.status === 200) {
                    sessionStorage.setItem('user_loged_in', 'correct');
                    location.href = '/admin-page';
                } else {
                    location.href = '/admin-login';
                    alert('Username or password aren\'t correct');
                }
            });
    }
});

function shakingInputAnimation(inputFields) {
    inputFields.forEach(inputField => {
        if (!inputField.value) {
            // adds red border around input field
            inputField.style.border = `3px solid red`;

            // class that defines animation
            inputField.classList.add('error');

            // removes class and red color on the end of the animation
            setTimeout(() => {
                inputField.classList.remove('error');
                inputField.style.border = '1px solid #000';
            }, 1300);
        }
    })
};