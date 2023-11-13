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

function update(text) {
    review.innerText = text;
}

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function sentence() {
    let text = "";
    let periodCounter = 0;
    let insertAt = randomBetween(6,10);
    let newSentence = true;
    for (let i = 0; i < 45; i++) {
        // Insert period at random intervals
        if (periodCounter === insertAt) {
            // Prevent a last sentence from being too short
            if (i >= 43) {
                break;
            } else {
                text += ".";
                periodCounter = 0;
                insertAt = randomBetween(6,10);
                newSentence = true;
            }
          
        };

        // Store a word from the dictionary at a random location
        let index = Math.floor(Math.random() * dictionary.length);

        // Capitalize at each new sentence
        if (newSentence === true) {
            text += " " + capitalize(dictionary[index]);
        } else {
            text += " " + dictionary[index];
        }

        // newSentence remains false if no period has been inserted
        newSentence = false;
        // Increment if no period is inserted
        periodCounter++;
    };
    // If the last character isn't a period, insert one.
    if (text.slice(-1) != ".") {
        text += "."
    }

    return text;
}

// Insert random review automatically
window.onload() = function() {
    update(sentence());
}

previous.addEventListener('click', function() {
    
});

next.addEventListener('click', function() {
    
});

random.addEventListener('click', function() {
    update(sentence());
});