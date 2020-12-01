const check_user_login = sessionStorage.getItem('loged_in');
if (check_user_login === 'user') {
    location.href = '/user-page';
} else if (check_user_login === 'admin') {
    location.href = '/admin-page';
}

const registerUser = document.getElementById('register-user');
registerUser.addEventListener('click', (e) => {
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    if (!username.value || !password.value) {
        e.preventDefault();
        shakingInputAnimation([username, password]);
        setTimeout(() => {
            alert('You must fill in the field');
        }, 800);
    } else {
        // register user
        fetch('/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username.value,
                    password: password.value
                })
            })
            .then((response) => {
                if (response.status === 200) {
                    document.write('<h1>There is already user with this username, please try again!</h1><button id="login-failed">OK</button>');
                    document.getElementById('login-failed').addEventListener('click', () => {
                        location.reload();
                    });
                } else {
                    document.write('<h1>Succesfully registered!</h1><button id="register-success">Go to profile</button>');
                    sessionStorage.setItem('loged_in', 'user');
                    document.getElementById('register-success').addEventListener('click', () => {
                        location.href = "/user-page";
                    });
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