                    // ΡΟΛΟΙ //

let wra = document.getElementById('wra');
let lepta = document.getElementById('lepta');
let deyt = document.getElementById('deyt');

setInterval(()=>{
    
let currentTime = new Date();
   
wra.innerHTML = currentTime.getHours()<10?"0":"" + currentTime.getHours();
lepta.innerHTML = currentTime.getMinutes()<10?"0":"" + currentTime.getMinutes();
deyt.innerHTML = currentTime.getSeconds()<10?"0":"" + currentTime.getSeconds();

},1000);

console.log(currentTime);
