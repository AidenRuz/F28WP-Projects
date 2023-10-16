'use strict';

// Define locations of elements in the DOM
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const counter = document.getElementById("counter")


// Globals
var count = 0;
var timer;


/* clearTimeout is executed at the start of each button press to clear the timout resetting 
the counter color back from the previous click. This makes clicking the buttons in rapid 
succession not randomly flash black from previous function calls. */
increase.addEventListener('click', function() {
    
    clearTimeout(timer);
    counter.style.color = "green";
    timer = setTimeout(() => {  counter.style.color = "black"; }, 600);
    count++;
    update(count);
    console.log(count);
});


decrease.addEventListener('click', function() {
    clearTimeout(timer);
    counter.style.color = "orange";
    timer = setTimeout(() => {  counter.style.color = "black"; }, 600);
    count--;
    update(count);
    console.log(count);
});

reset.addEventListener('click', function() {
    clearTimeout(timer);
    counter.style.color = "red";
    timer = setTimeout(() => {  counter.style.color = "black"; }, 600);
    count = 0;
    update(count);
    console.log(count);
});

function update(count) {
    counter.innerText = count;
}
