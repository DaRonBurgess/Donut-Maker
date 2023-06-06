var makeDonuts = document.getElementById("make-donuts"),
count = 0;
makeDonuts.onclick = function() {
    count += 1;
    makeDonuts.innerHTML = "Donuts Made: " + count;
};