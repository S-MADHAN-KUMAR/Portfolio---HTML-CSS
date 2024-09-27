document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    let isValid = ValidateInputs();

    if (isValid) {
        sendEmail();
    } 
});

function ValidateInputs() {
    let isValid = true;

    const username = document.getElementById('username');
    const useremail = document.getElementById('useremail');
    const usermsg = document.getElementById('usermsg');

    const usernameVal = username.value.trim();
    const useremailVal = useremail.value.trim();
    const usermsgVal = usermsg.value.trim();

    if (usernameVal === '') {
        setError(username, 'Name is required');
        isValid = false;
    } else {
        setSuccess(username);
    }

    if (useremailVal === '') {
        setError(useremail, 'Email is required');
        isValid = false;
    } else if (!validateEmail(useremailVal)) {
        setError(useremail, 'Enter a valid email');
        isValid = false;
    } else {
        setSuccess(useremail);
    }

    if (usermsgVal === '') {
        setError(usermsg, 'Message is required');
        isValid = false;
    } else {
        setSuccess(usermsg);
    }

    return isValid;
}

function setError(element, message) {
    const parent = element.parentElement;
    const errorDisplay = parent.querySelector('.error-text');

    errorDisplay.innerText = message;
    parent.classList.add('error');
    parent.classList.remove('success');
}

function setSuccess(element) {
    const parent = element.parentElement;
    const errorDisplay = parent.querySelector('.error-text');

    errorDisplay.innerText = 'Successs !';
    parent.classList.add('success');
    parent.classList.remove('error');
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

function sendEmail() {
    const username = document.getElementById('username').value;
    const useremail = document.getElementById('useremail').value;
    const usermsg = document.getElementById('usermsg').value;

    const mailtoLink = `mailto:madhankumar4195@gmail.com?subject=Message from ${encodeURIComponent(username)}&body=Name: ${encodeURIComponent(username)}%0AEmail: ${encodeURIComponent(useremail)}%0AMessage: ${encodeURIComponent(usermsg)}`;

    window.location.href = mailtoLink;

    alert('Your email has been sent!');
}
