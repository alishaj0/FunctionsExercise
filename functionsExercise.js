// FUNCTIONS EXERCISE


//1)
// function fozziBear(){
//     console.log("Wocka Wocka!");
// }
// fozziBear();
                                // Wocka Wocka!

    fozziBear = () => {
        console.log(`Wocka Wocka!`);
    }
    fozziBear();


//2)
// function beaker(speak){
//     console.log(`${speak}, ${speak}, ${speak}, ${speak}`);
// }
// beaker("Meep");
                                // Meep, Meep, Meep, Meep

function beaker(speak){
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
}
beaker("Meep");
                                    // Meep
                                    // Meep
                                    // Meep
                                    // Meep


//3)
function werewolf(a, b){
    if (a === "Muppet" && b === "Show"){
        console.log("It's time to play the music. It's time to light the lights.");
    }
}
werewolf(`Muppet`, `Show`);
                                // It's time to play the music. It's time to light the lights.


//4)
// function kermit(){
//     return `Kermit The Frog`;
// }
// console.log(kermit());
                                // Kermit The Frog

    kermit = () => `Kermit The Frog`;
    console.log(kermit());
                                    // Kermit The Frog


//5)
function muppetShowSeasons(seasons){
    if (seasons === 5){
        return`true`;
    } 
    return`false`;
        // Do not need an 'else if' statement, because if the first statement (return `true`;) runs, the second statement (return `false`;) will never run but if the first statement does not run, it will move on to the next code (return `false`;)
        // And the return function ends the function after code is run. 
    }

console.log(muppetShowSeasons(1));
                                // false
console.log(muppetShowSeasons(5));
                                // true
                                

//6a)
const muppets = [
    `Kermit The Frog`, 
    `Miss Piggy`, 
    `Fozzie Bear`, 
    `The Great Gonzo`
];

//6b)
function showMuppets(names){
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
}
showMuppets(muppets);
                                // Kermit The Frog
                                // Miss Piggy
                                // Fozzie Bear
                                // The Great Gonzo

// function showMuppets(names){
//     console.log(names);
// }
// muppets.forEach(showMuppets);
                                // Kermit The Frog
                                // Miss Piggy
                                // Fozzie Bear
                                // The Great Gonzo


//7)
const manOrMuppet = function(){
    console.log("Am I a man or am I a Muppet?");
}
manOrMuppet();
                            // Am I a man or am I a Muppet?
        // i guess i forgot to finish this one. (function expressiom)


//8)
rainbowConnection = () => "Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me.";

console.log(rainbowConnection());
                // Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me.


//9) No - (local) variable created inside a function cannot be accessed outside of the function


//10) Yes - if (global) variable created outside function, can access within function and upon running may update the value of variable.
        let num = 1;
        function changeNum(){
            num = 2;
        }
        changeNum();
        console.log(num);



//11a)
const newMuppetMovies = [
    "The Muppets",
    "Muppets Most Wanted"
]

//11b)
function toUpperMovie(movie){
    return movie.toUpperCase();
}

const upperMovies = newMuppetMovies.map(toUpperMovie);
console.log(upperMovies);
                    // [ 'THE MUPPETS', 'MUPPETS MOST WANTED' ]
                    

    /* OR WITH ARROW FUNCTION
const upperMovies = newMuppetMovies.map(movie => movie.toUpperCase());
console.log(upperMovies);

        */



//12a)
const oldMuppetMovies = [
    "The Muppet Movie",
    "The Muppets Take Manhattan",
    "The Great Muppet Caper",
    "The Muppet Christmas Carol",
    "Muppet Treasure Island",
    "Muppets From Space"
];

//12b)
function findMovies(movie){
    return movie === "The Great Muppet Caper" || movie === "Muppet Treasure Island";
}
const twoMovies = oldMuppetMovies.filter(findMovies);
console.log(twoMovies);
                        // [ 'The Great Muppet Caper', 'Muppet Treasure Island' ]


        // OR WITH ARROW FUNCTION
        /*
const twoMovies = oldMuppetMovies.filter(title => title === `The Great Muppet Caper` || title === `Muppet Treasure Island`);
console.log(twoMovies);

    // Filter Method will populate a new array based on true statements according to function test assigned. 
        // IN THIS EXAMPLE there is no function name, just using function parameter - parameter is 'title'. Will run anonymous function with parameter and filter through the oldMuppetMovies array and pull the ones === to 'title' parameter and place them into new array of 'twoMovies' variable. 
        // WITH 'OR' only need 1 to return a true value, for it to be added to the array in this example
*/





// BONUSES 

//13a)
const charactersOne = [
    `Statler`, 
    `Waldorf`
];

//13b)
const charactersTwo = [
    `The Swedish Chef`,
    `Animal`,
    `Rowlf`, 
];

//13c)

/*
function randomMuppet(characters){
    console.log(characters[Math.floor(Math.random() * characters.length)]);
}
*/ 
// OR --

function randomMuppet(characters){
    const randomIndex = Math.floor(Math.random() * characters.length)
    const muppet = characters[randomIndex];
    console.log(muppet);
}
//13d)

randomMuppet(charactersOne);
randomMuppet(charactersTwo);


//14)
function isLetter(str){
    return str.length === 1 && str.match(/[a-z]/i)
            // to filter out all "non-letter" characters
}

function caps(string){
    let newString = "";
    let n = 0;
    for (letter of string){
        if (isLetter(letter)){
            if (n % 2 === 0){
                newString += letter.toUpperCase();
                n++;
            }
            else {newString += letter.toLowerCase();
                n++;
            }
        }
        else {newString += letter;
        }
    } 
    return newString;
}
console.log(caps(`I Love The Muppets`));

// IN ABOVE EXAMPLE::

//  `I Love The Muppets` used as string in example 
//  each letter passedf in  individually to see if it is a string that is a letter ( a-z upper case or lower case) if "I" is true then run 1st IF statement... then onto 2nd IF statement 0 % 2 === 0, true would change to uppercase & changing value of 'newString' then add 1 to 'n' and move back to next character. 
// space is next character into 'is letter; function & passing in empty string which is false bc it isnt a letter , move to 2nd else statement and adding a space onto the 'n' value and moving onto next letter starting at first function

// Main thing is using modulo "n % 2" to have every other letter uppercase.
