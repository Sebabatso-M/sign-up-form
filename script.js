const form = document.getElementById('form');
const firstnameTxt = document.getElementById('firstname');
const lastnameTxt = document.getElementById('lastname');
const emailTxt = document.getElementById('email');
const passwordTxt = document.getElementById('password');

form.addEventListener('submit', (e) => {
    if (validate())
        e.preventDefault();
});

form.querySelectorAll('input').forEach((input) => {
    input.addEventListener('input', () => {
        valid(input);
    });
});

emailTxt.addEventListener('invalid', (e) => {;
    if (!isEmail(emailTxt.value.trim())) {
        emailTxt.setAttribute('placeholder', 'name@host.tld');
        alertError(emailTxt, 'Looks like this is not an email');
    }
});

function validate() {

    let firstname = firstnameTxt.value.trim();
    let lastname = lastnameTxt.value.trim();
    let email = emailTxt.value.trim();
    let password = passwordTxt.value.trim();

    if (isEmpty(firstname)) {
        alertError(firstnameTxt, 'First Name cannot be empty');
    }

    if (isEmpty(lastname)) {
        alertError(lastnameTxt, 'Last Name cannot be empty');
    }

    if (isEmpty(password)) {
        alertError(passwordTxt, 'Password cannot be empty');
    }

    if (isEmpty(email)) {
        alertError(emailTxt, 'Look like this is not an email');
        emailTxt.setAttribute('placeholder', 'name@host.tld');
    }

    return hasErrors();
}

//checks if form has errors
function hasErrors() {
    let bool = false;
    form.querySelectorAll('.input').forEach((div) => {
        if (div.classList.contains('error')) {
            console.log(div.classList)
            bool = true;
        }
    })
    return bool;
}

//checks input text
function isEmpty(text) {
    if (text === "") return true;
    return false;
}

//check if email is valid
function isEmail(email) {
    let emailformat = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return emailformat.test(email.value)
}

//element value is invalid
function alertError(ele, err_message) {
    let parent = ele.parentElement;
    let errNode = parent.querySelector('.error-text');

    parent.classList.add('error');
    errNode.textContent = err_message;
}

//element value is valid
//remove alert on element
function valid(ele) {
    let parent = ele.parentElement;
    parent.classList.remove('error');
}