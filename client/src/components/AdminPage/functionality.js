export function shakingInputAnimation(inputFields) {
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

export function addAnimation(animationName, gifAddress, description, linkToPage) {
    console.log(animationName.value, gifAddress.value, description.value, linkToPage.value)
    if (!animationName.value || !gifAddress.value || !description.value || !linkToPage.value) {
        shakingInputAnimation([animationName, gifAddress, description, linkToPage]);
        setTimeout(() => {
            alert('You must fill in all fields');
        }, 800);
    } else {
        // send data to db to make new animation new animation

        (async() => {
            // await fetch(`${(process.env.URL + '/' + process.env.PORT) || 'http://localhost:8080'}/animations`, {
            await fetch('http://localhost:8080/animations', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: animationName.value,
                    description: description.value,
                    gifAddress: gifAddress.value,
                    linkToPage: linkToPage.value
                })
            });
        })();
        setTimeout(() => {
            window.location.reload();
        }, 300);
    }
}

export function updateAnimation(linkToFind, name, gifAddress, description, linkToUpdate) {
    console.log('usao');
    console.log(linkToFind.value, name.value, gifAddress.value, description.value, linkToUpdate.value);
    if (!linkToFind.value || !name.value || !gifAddress.value || !description.value || !linkToUpdate.value) {
        shakingInputAnimation([linkToFind, name, gifAddress, description, linkToUpdate]);
        setTimeout(() => {
            alert('You must fill in all fields');
        }, 800);
    } else {
        // update animation by sending data to animations db

        (async() => {
            //await fetch(`${(process.env.URL + '/' + process.env.PORT) || 'http://localhost:8080'}/animations`, {
            await fetch('http://localhost:8080/animations', {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    linkToFind: linkToFind.value,
                    name: name.value,
                    description: description.value,
                    gifAddress: gifAddress.value,
                    linkToUpdate: linkToUpdate.value
                })
            });
        })();
        setTimeout(() => {
            window.location.reload();
        }, 300);
    }
}

export function deleteAnimation(linkToDeleteBy) {
    console.log('usao sam u deleter');
    if (!linkToDeleteBy.value) {
        shakingInputAnimation([linkToDeleteBy]);
        setTimeout(() => {
            alert('You must fill in the field');
        }, 800);
    } else {
        // delete data from animations db

        (async() => {
            //await fetch(`${(process.env.URL + '/' + process.env.PORT) || 'http://localhost:8080'}/animations`, {
            await fetch('http://localhost:8080/animations', {
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
            window.location.reload();
        }, 300);
    }
}

export function changePassword(username, oldPassword, newPassword) {
    if (!username.value || !oldPassword.value || !newPassword.value) {
        shakingInputAnimation([username, oldPassword, newPassword]);
        setTimeout(() => {
            alert('You must fill in the field');
        }, 800);
    } else {
        // update user's data

        (async() => {
            //await fetch(`${(process.env.URL + '/' + process.env.PORT) || 'http://localhost:8080'}/animations`, {
            await fetch('http://localhost:8080/animations', {
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
            window.location.reload();
        }, 300);
    }
}