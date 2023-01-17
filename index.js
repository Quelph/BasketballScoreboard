let counthome = 0
let countguest = 0

let updatecounthome = document.getElementById("score-home")
let updatecountguest = document.getElementById("score-guest")

function PlusOneH() {
    counthome += 1
    updatecounthome.textContent = counthome
}

function PlusTwoH() {
    counthome += 2
    updatecounthome.textContent = counthome
}

function PlusThreeH() {
    counthome += 3
    updatecounthome.textContent = counthome
}

function PlusOneG() {
    countguest += 1
    updatecountguest.textContent = countguest 
}

function PlusTwoG() {
    countguest += 2    
    updatecountguest.textContent = countguest 
}

function PlusThreeG() {
    countguest += 3
    updatecountguest.textContent = countguest     
}