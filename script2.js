                        // ΦΟΡΜΑ //

let form = document.getElementById('form');
let onoma = document.getElementById('onoma');
let email = document.getElementById('email');
let kodikos = document.getElementById('kodikos');

form.addEventListener('submit', e => { 
    e.preventDefault();

    validateInputs();
});

let setError = (element, message) => {
    let input = element.parentElement;
    let errorDisplay = input.querySelector('.error');

    errorDisplay.innerText = message;
    input.classList.add('error');
    input.classList.remove('success')
}

let setSuccess = element => {
    let input = element.parentElement;
    let errorDisplay = input.querySelector('.error');

    errorDisplay.innerText = '';
    input.classList.add('success');
    input.classList.remove('error');
};

let isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

let validateInputs = () => {
    let onomaValue = onoma.value.trim();
    let emailValue = email.value.trim();
    let kodikosValue = kodikos.value.trim();

    if(onomaValue === '') {
        setError(onoma, 'ΠΡΕΠΕΙ ΝΑ ΒΑΛΕΤΕ ΟΝΟΜΑ');
    } else {
        setSuccess(onoma);
    }

    if(emailValue === '') {
        setError(email, 'ΠΡΕΠΕΙ ΝΑ ΒΑΛΕΤΕ EMAIL');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'ΒΑΛΤΕ ΜΙΑ ΣΩΣΤΗ ΔΙΕΥΘΥΝΣΗ EMAIL');
    } else {
        setSuccess(email);
    }

    if(kodikosValue === '') {
        setError(kodikos, 'ΠΡΕΠΕΙ ΝΑ ΒΑΛΕΤΕ ΚΩΔΙΚΟ');
    } else if (kodikosValue.length < 8 ) {
        setError(kodikos, 'Ο ΚΩΔΙΚΟΣ ΠΡΕΠΕΙ ΝΑ ΠΕΡΙΕΧΕΙ ΤΟΥΛΑΧΙΣΤΟΝ 8 ΧΑΡΑΚΤΗΡΕΣ.')
    } else {
        setSuccess(kodikos);
    }

    
};


