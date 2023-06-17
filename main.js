var donuts = 0;
var autoCount = 0;
var autoClickerCost = 100;
var intervalId;

buttonDisable()

function donutImgClick() {
    donuts ++;
    document.getElementById("donut-count").innerHTML = 'Donuts: ' + donuts;
    buttonDisable();
}



function autoClicker() {
        donuts -= autoClickerCost;
        // autoClickerCost += 0.1;
        autoCount += 1;
        document.getElementById('auto-clickers-owned').innerHTML = 'Auto Clickers Owned: ' + autoCount;
            intervalId = setInterval(() => {
                donutImgClick();
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