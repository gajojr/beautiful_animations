// check if user is already logged in in this session
const check_user_login = sessionStorage.getItem('loged_in');
if (check_user_login === 'admin') {
    location.href = '/admin-page';
} else if (check_user_login === 'user') {
    location.href = '/user-page';
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
        fetch('/login', {
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
                    sessionStorage.setItem('loged_in', 'admin');
                    location.href = '/admin-page';
                } else if (response.status === 201) {
                    sessionStorage.setItem('loged_in', 'user');
                    location.href = '/user-page';
                } else {
                    document.write('<h1>Wrong password or username, please try again!</h1><button id="login-failed">OK</button>');
                    document.getElementById('login-failed').addEventListener('click', () => {
                        location.reload();
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