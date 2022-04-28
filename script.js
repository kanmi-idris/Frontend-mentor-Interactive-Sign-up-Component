const form = document.querySelector('.form');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const name = document.querySelector('.name');
const inputs = document.querySelectorAll('.details')


form.addEventListener('submit', (e) => {     /*to activate a submit request on the form*/
    e.preventDefault();
    inputs.forEach((input) => {
        if (!input.value) {
            input.parentElement.classList.add('error');
        } else {
            input.parentElement.classList.remove('error');
            if (input.type == 'email') {
                if (validateEmail(input.value)) {
                    input.parentElement.classList.remove('error');
                } else {
                    input.parentElement.classList.add('error');
                }
            };
            if (input.type == 'text') {
                if (validateUsername(input.value)) {
                    input.parentElement.classList.remove('error');
                } else {
                    input.parentElement.classList.add('error');
                }
            };
            if (input.type == 'password') {
                if (checkPassword(input.value)) {
                    input.parentElement.classList.remove('error');
                } else {
                    input.parentElement.classList.add('error');
                }
            };

        };
    });

});

/*to validate the names*/
const validateUsername = (name) => {
    var regex = /^[a-z][a-z0-9_]{4,20}$/gi;
    return regex.test(name);
}

/*to validate the email*/
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

/*to validate the password*/
const checkPassword = (password) => {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
}

