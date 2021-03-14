// FUNCTIONS EXERCISE


//1)
function fozziBear(){
    console.log("Wocka Wocka!");
}
fozziBear();
                                // Wocka Wocka!


//2)
function beaker(speak){
    console.log(`${speak}, ${speak}, ${speak}, ${speak}`);
}
beaker("Meep");
                                // Meep, Meep, Meep, Meep


//3)
function werewolf(a, b){
    if (a === "Muppet" && b === "Show"){
        console.log("It's time to play the music. It's time to light the lights.");
    }
}
werewolf(`Muppet`, `Show`);
                                // It's time to play the music. It's time to light the lights.


//4)
function kermit(){
    return `Kermit The Frog`;
}
console.log(kermit());
                                // Kermit The Frog


//5)
function muppetShowSeasons(seasons){
    if (seasons === 5){
        return`true`;
    } 
    else if (seasons !== 5){
        return`false`;
    }
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
const manOrMuppet = console.log("Am I a man or am I a Muppet?");


//8)
rainbowConnection = () => console.log("Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me.");


//9) No


//10) Yes


//11a)
const newMuppetMovies = [
    "The Muppets",
    "Muppets Most Wanted"
]

//11b)
function movies(a){
    return `${a.toUpperCase()}`
}
const upperMovies = newMuppetMovies.map(movies);
console.log(upperMovies);
                        // [ 'THE MUPPETS', 'MUPPETS MOST WANTED' ]


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
// ???

