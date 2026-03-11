// SLIDE //
let epomeni = document.querySelector('.epomeni');

epomeni.addEventListener('click', function(){
    // Επιλέγουμε όλα τα στοιχεία με την κλάση .imag
    let items = document.querySelectorAll('.imag');
    
    // Έλεγχος αν υπάρχουν στοιχεία για να μην βγάζει error
    if (items.length > 0) {
        // Παίρνει το πρώτο στοιχείο [0] και το βάζει στο τέλος της λίστας
        document.querySelector('.slide').appendChild(items[0]);
    }
});
