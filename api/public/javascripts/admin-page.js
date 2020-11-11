const addNewAnimationDiv = document.querySelector('.add');
const updateAnimation = document.querySelector('.update');
const deleteAnimation = document.querySelector('.delete');
const changePasswordDiv = document.querySelector('.change-password-form');

const addPanel = document.getElementById('add-panel');
const updatePanel = document.getElementById('update-panel');
const deletePanel = document.getElementById('delete-panel');
const changePasswordPanel = document.querySelector('.change-password-panel');

// We are hiding all panel because we want user to select first
const panels = [addNewAnimationDiv, updateAnimation, deleteAnimation, changePasswordDiv];

const navBtns = [addPanel, updatePanel, deletePanel, changePasswordPanel];

addPanel.addEventListener('click', () => {
    toggleDiv(addNewAnimationDiv, addPanel);

    const sendDataToMakeAnimation = document.querySelector('.add-new-animation');
    sendDataToMakeAnimation.addEventListener('click', (e) => {
        const name = document.getElementById('add-name');
        const gifAdrress = document.getElementById('add-gifAdrress');
        const description = document.getElementById('add-description');
        const linkToPage = document.getElementById('add-link-to-page');
        if (!name.value || !gifAdrress.value || !description.value || !linkToPage.value) {
            e.preventDefault();
            shakingInputAnimation([name, gifAdrress, description, linkToPage]);
            setTimeout(() => {
                alert('You must fill in all fields');
            }, 800);
        } else {
            // send data to db to make new animation new animation

            (async() => {
                await fetch('/animations', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name.value,
                        description: description.value,
                        gifAdrress: gifAdrress.value,
                        linkToPage: linkToPage.value
                    })
                });
            })();
            setTimeout(() => {
                location.reload();
            }, 300);
        }
    });
});

updatePanel.addEventListener('click', () => {
    toggleDiv(updateAnimation, updatePanel);

    const sendDataUpdateAnimation = document.querySelector('.update-animation');
    sendDataUpdateAnimation.addEventListener('click', (e) => {
        const linkToFind = document.getElementById('search-by-link');
        const name = document.getElementById('update-name');
        const gifAdrress = document.getElementById('update-gifAdrress');
        const description = document.getElementById('update-description');
        const linkToUpdate = document.getElementById('update-link-to-page');
        if (!linkToFind.value || !name.value || !gifAdrress.value || !description.value || !linkToUpdate.value) {
            e.preventDefault();
            shakingInputAnimation([linkToFind, name, gifAdrress, description, linkToUpdate]);
            setTimeout(() => {
                alert('You must fill in all fields');
            }, 800);
        } else {
            // update animation by sending data to animations db

            (async() => {
                await fetch('/animations', {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        linkToFind: linkToFind.value,
                        name: name.value,
                        description: description.value,
                        gifAdrress: gifAdrress.value,
                        linkToUpdate: linkToUpdate.value
                    })
                });
            })();
            setTimeout(() => {
                location.reload();
            }, 300);
        }
    });
});

deletePanel.addEventListener('click', () => {
    toggleDiv(deleteAnimation, deletePanel);

    const sendDataToDeleteAnimation = document.querySelector('.delete-animation');
    sendDataToDeleteAnimation.addEventListener('click', (e) => {
        const linkToDeleteBy = document.getElementById('delete-by-link');
        if (!linkToDeleteBy.value) {
            e.preventDefault();
            shakingInputAnimation([linkToDeleteBy]);
            setTimeout(() => {
                alert('You must fill in the field');
            }, 800);
        } else {
            // delete data from animations db

            (async() => {
                await fetch('/animations', {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        linkToDeleteBy: linkToDeleteBy.value
                    })
                });
            })();
            setTimeout(() => {
                location.reload();
            }, 300);
        }
    });
});

changePasswordPanel.addEventListener('click', () => {
    toggleDiv(changePasswordDiv, changePasswordPanel);

    const submitButton = document.getElementById('change-password-submit');
    submitButton.addEventListener('click', (e) => {
        const username = document.getElementById('username');
        const oldPassword = document.getElementById('old-password');
        const newPassword = document.getElementById('new-password');
        if (!username.value || !oldPassword.value || !newPassword.value) {
            e.preventDefault();
            shakingInputAnimation([username, oldPassword, newPassword]);
            setTimeout(() => {
                alert('You must fill in the field');
            }, 800);
        } else {
            // update user's data

            (async() => {
                await fetch('/admin-login/change-password', {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: username.value,
                        oldPassword: oldPassword.value,
                        newPassword: newPassword.value
                    })
                });
            })();
            setTimeout(() => {
                location.reload();
            }, 300);
        }
    });
});

const toggleDiv = (div, navBtn) => {
    // check if div is already displayed, if yes hide it, if no show it
    div.style.display = (div.style.display === 'none') ? 'flex' : 'none';
    // check if panel has active class, because we don't want to leave active class on panel if use other panel
    navBtn.classList.contains('active-panel') ? navBtn.classList.remove('active-panel') : navBtn.classList.add('active-panel');
    // Here we loop trough navBtns and panels array so we are using for loop because they are same length
    for (let i = 0; i < navBtns.length; i++) {
        if (panels[i] !== div && panels[i].style.display !== 'none') {
            panels[i].style.display = 'none';
            navBtns[i].classList.remove('active-panel');
        }
    }
};

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