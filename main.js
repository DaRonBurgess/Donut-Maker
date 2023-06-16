var donuts = 0;
var autoCount = 0;
var autoClickerCost = 10;
var intervalId;

buttonDisable()

function makeDonuts() {
    donuts ++;
    document.getElementById("donut-count").innerHTML = 'Donuts: ' + donuts;
    buttonDisable();
}



function autoClicker() {
        autoCount += 1;
        donuts -= 10;
        document.getElementById('auto-clickers-owned').innerHTML = 'Auto Clickers Owned: ' + autoCount;
            intervalId = setInterval(() => {
                makeDonuts();
            }, 1000);
}

function buttonDisable() {
    if(donuts >= autoClickerCost) {
        document.getElementById('auto-clicker').disabled = false;
    } else {
        document.getElementById('auto-clicker').disabled = true;
    }
}

function reset() {
    donuts = 0;
    autoCount = 0;
    autoClickerCost = 10;
    document.getElementById("donut-count").innerHTML = 'Donuts: 0';
    document.getElementById('auto-clickers-owned').innerHTML = 'Auto Clickers Owned';
    buttonDisable();
    clearInterval((intervalId));
}