// ΦΟΡΜΑ //
let form = document.getElementById('form');
let onoma = document.getElementById('onoma');
let email = document.getElementById('email');
let kodikos = document.getElementById('kodikos');

form.addEventListener('submit', e => { 
    // Καλούμε τη validateInputs και αποθηκεύουμε αν είναι όλα οκ
    if (!validateInputs()) {
        e.preventDefault(); // Σταματάει τη φόρμα ΜΟΝΟ αν υπάρχουν λάθη
    }
});

let setError = (element, message) => {
    let inputContainer = element.parentElement;
    let errorDisplay = inputContainer.querySelector('.error');

    errorDisplay.innerText = message;
    inputContainer.classList.add('error');
    inputContainer.classList.remove('success');
}

let setSuccess = element => {
    let inputContainer = element.parentElement;
    let errorDisplay = inputContainer.querySelector('.error');

    errorDisplay.innerText = '';
    inputContainer.classList.add('success');
    inputContainer.classList.remove('error');
};

let isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

let validateInputs = () => {
    let onomaValue = onoma.value.trim();
    let emailValue = email.value.trim();
    let kodikosValue = kodikos.value.trim();
    
    let isAllValid = true; // Υποθέτουμε ότι όλα είναι σωστά στην αρχή

    // Έλεγχος Ονόματος
    if(onomaValue === '') {
        setError(onoma, 'ΠΡΕΠΕΙ ΝΑ ΒΑΛΕΤΕ ΟΝΟΜΑ');
        isAllValid = false;
    } else {
        setSuccess(onoma);
    }

    // Έλεγχος Email
    if(emailValue === '') {
        setError(email, 'ΠΡΕΠΕΙ ΝΑ ΒΑΛΕΤΕ EMAIL');
        isAllValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'ΒΑΛΤΕ ΜΙΑ ΣΩΣΤΗ ΔΙΕΥΘΥΝΣΗ EMAIL');
        isAllValid = false;
    } else {
        setSuccess(email);
    }

    // Έλεγχος Κωδικού
    if(kodikosValue === '') {
        setError(kodikos, 'ΠΡΕΠΕΙ ΝΑ ΒΑΛΕΤΕ ΚΩΔΙΚΟ');
        isAllValid = false;
    } else if (kodikosValue.length < 8 ) {
        setError(kodikos, 'Ο ΚΩΔΙΚΟΣ ΠΡΕΠΕΙ ΝΑ ΠΕΡΙΕΧΕΙ ΤΟΥΛΑΧΙΣΤΟΝ 8 ΧΑΡΑΚΤΗΡΕΣ.');
        isAllValid = false;
    } else {
        setSuccess(kodikos);
    }

    return isAllValid; // Επιστρέφει true αν δεν υπήρξε κανένα σφάλμα
};
