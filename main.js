var makeDonuts = document.getElementById("make-donuts"),
count = 0;
makeDonuts.onclick = function() {
    count += 1;
    makeDonuts.innerHTML = "Donuts Made: " + count;
};

var autoClicker = document.getElementById("auto-clicker"),
autoCount = 0;
autoCountMax = 3;
autoClicker.onclick = function() {
    if(autoCount <= autoCountMax){
    autoCount += 1;
    autoClicker.innerHTML = "Auto Clickers Owned: " + autoCount;
        setInterval(() => {
            makeDonuts.click();
            count ++;
        }, 1000);
    }
};