const form = document.getElementById('form');
const firstnameTxt = document.getElementById('firstname');
const lastnameTxt = document.getElementById('lastname');
const emailTxt = document.getElementById('email');
const passwordTxt = document.getElementById('password');

form.addEventListener('submit', (e) => {

    if (!validate()) {
        e.preventDefault();
    }

});

function validate() {

    let firstname = firstnameTxt.value.trim();
    let lastname = lastnameTxt.value.trim();
    let email = emailTxt.value.trim();
    let password = passwordTxt.value.trim();

    let set = new Set()

    if (firstname === "") {
        alertError(firstnameTxt, "First Name cannot be empty");
        set.add(1);
    } else {
        set.delete(1);
        valid(firstnameTxt);
    }

    if (lastname === "") {
        alertError(lastnameTxt, "Last Name cannot be empty");
        set.add(2);
    } else {
        set.delete(2);
        valid(lastnameTxt);
    }

    if (email === "") {
        alertError(emailTxt, "Email cannot be empty");
        emailTxt.setAttribute('placeholder', 'name@host.tld');
        set.add(3);
    } else if (!isEmail(email)) {
        alertError(emailTxt, "Looks like this is not an email");
        set.add(3);
    } else {
        set.delete(3);
        valid(emailTxt);
    }

    if (password === "") {
        alertError(passwordTxt, "Password cannot be empty");
        set.add(4);
    } else {
        set.delete(4);
        valid(password);
    }

    if (set.size == 0){
        return true;
    }else{
        return false;
    }
}

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
//remove alert
function valid(ele) {
    let parent = ele.parentElement;
    parent.classList.remove('error');
}