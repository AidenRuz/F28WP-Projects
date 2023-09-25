'use strict';

const hex = [0, 1, 2 , 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const text = document.getElementById("value");
const select = document.getElementById("selector")
var type;

select.addEventListener('input', function() {
     type = select.options[select.selectedIndex].text;
     console.log(type);
})

btn.addEventListener('click', function() {
    var color = getHue(type);
    document.body.style.backgroundColor = color;
    text.innerText = color;
})

function getHue(type) {
    if (type === "Hex") {
        var hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hex[Math.floor(Math.random() * hex.length)];
        }
        return hexColor;
    } else {
        var c = function () {
            return Math.floor(Math.random() * 256);
        };
        return "rgb(" + c() + "," + c() + "," + c() + ")";
    }
}
