// ΡΟΛΟΙ //

let wra = document.getElementById('wra');
let lepta = document.getElementById('lepta');
let deyt = document.getElementById('deyt');

setInterval(() => {
    let currentTime = new Date();

    // Χρησιμοποιούμε παρενθέσεις για να γίνει σωστά η πρόσθεση του "0" με τον αριθμό
    wra.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    lepta.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    deyt.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
    
    // Αν θέλεις να βλέπεις την ώρα στην κονσόλα, πρέπει να το βάλεις ΕΔΩ ΜΕΣΑ:
    // console.log(currentTime); 

}, 1000);

// Διέγραψε ή βάλε σε σχόλιο την παρακάτω γραμμή, γιατί προκαλεί το Error:
// console.log(currentTime);
