// Console log a welcome message with instructions to mad libs
console.log ("welcome to the story of your life")


// Prompt the user to enter parts of speech for mad libs

// You should be asking for at least 4 words
let adjective = prompt("give me an adjective")
let pluralnoun = prompt("give a plural noun")
let verb = prompt ("give me a verb")
let adjective2 = prompt ("give me another adjective")
// Create an array that stores the values the user entered
let array = []
array.push (adjective)
array.push (pluralnoun)
array.push (verb)
array.push (adjective2)

// Console log the story with the array values passed into the blanks

// Make sure you are referencing the values of the array (rather than the user inputs themselves)
// You can use any type of string manipulation that feels more intuitive
console.log ("In a small", array[0]," school in the Bronx, there was a problem with too many",array[1],". These",  array[2]," loved to ",array[3], "which caused Mr. P so many headaches. However, no one wanted to remove them because they were too ", array[4] ," so they stayed there forever."
)







