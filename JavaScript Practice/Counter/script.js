'use strict';

const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const counter = document.getElementById("counter")

var count = 0;

increase.addEventListener('click', function() {
    count++;
    update(count);
    console.log(count);
});

decrease.addEventListener('click', function() {
    count--;
    update(count);
    console.log(count);
});

reset.addEventListener('click', function() {
    count = 0;
    update(count);
    console.log(count);
});

function update(count) {
    counter.innerText = count;
}
