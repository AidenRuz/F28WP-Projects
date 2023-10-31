'use strict';

// Define locations of elements in the DOM
const reviewerImage = document.getElementById("image");
const reviewerName = document.getElementById("name");
const reviewerJob = document.getElementById("job");
const review = document.getElementById("review");
const previous= document.getElementById("previous");
const next = document.getElementById("next");
const random = document.getElementById("random");

// Dictionary to generate random sentences
var dictionary = [
    "apple", "banana", "chocolate", "dog", "elephant", "fountain", "giraffe", "house", "igloo", "jazz",
    "kangaroo", "lemon", "mango", "notebook", "orange", "penguin", "quilt", "raccoon", "saxophone", "tiger",
    "umbrella", "violin", "watermelon", "xylophone", "yacht", "zebra", "astronomy", "butterfly", "carousel", "dolphin",
    "eagle", "flamingo", "garden", "harp", "island", "jigsaw", "koala", "lighthouse", "monarch", "nougat", "ocean",
    "parrot", "quasar", "rattlesnake", "sunflower", "trampoline", "unicorn", "volcano", "whale", "xylograph", "yodel",
    "zeppelin", "architecture", "broccoli", "caterpillar", "daffodil", "eclipse", "fireworks", "glacier", "horizon",
    "insect", "jackal", "kaleidoscope", "limousine", "macaroon", "nectar", "octopus", "parachute", "quokka", "rhubarb",
    "sapphire", "telescope", "utopia", "vortex", "willow", "xerox", "yogurt", "zealot", "acorn", "blossom", "cactus",
    "daisy", "enigma", "fandango", "gizmo", "hologram", "illusion", "jamboree", "ketchup", "lyrics", "marathon", "ninja",
    "ostrich", "pajamas", "quicksand", "ravioli", "salsa", "tornado", "umbilical", "vampire", "whirlpool", "xylograph",
    "yacht", "zeppelin", "amethyst", "biscuit", "caramel", "doodle", "echo", "fizzle", "gobsmacked", "hijinks", "infinitesimal",
    "juxtaposition", "kaleidoscope", "loquacious", "mellifluous", "noodle", "onomatopoeia", "plethora", "quizzical", "ricochet",
    "serendipity", "tintinnabulation", "ubiquitous", "vex", "whimsical", "xenon", "yonder", "zymurgy"
]




previous.addEventListener('click', function() {
    
});

next.addEventListener('click', function() {
    
});

random.addEventListener('click', function() {
    let text = "";
    let periodCounter = 0;
    let max = Math.floor(Math.random() * 10);
    for (let i = 0; i < 65; i++) {
        if (periodCounter === max) {
            text += ".";
            periodCounter = 0;
            max = Math.floor(Math.random() * 10);
        };
        let selection = Math.floor(Math.random() * dictionary.length);
        text += " " + dictionary[selection];
        periodCounter++;
    };
    if (text.slice(-1) != ".") {
        text += "."
    }
    review.innerText = text;
});