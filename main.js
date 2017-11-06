
console.log ("hi")




// Create an array that contains the words in the sentence


var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

// The addExcitement function should accept the array as the sole argument


function addExcitement (theWordArray) {


   /*


     Write a `for` loop that iterates over the array argument and


     outputs the words.


    */


    let arrString = "";
    let exclamation = "!";

    for (i = 0; i < sentence.length; i++) {

    	sentence[i]

    	if (i % 3 === 2) {


    		arrString += " " + sentence[i] + exclamation;

    		exclamation += "!"


    	} else {


    			arrString = arrString + " " + sentence[i];

    	}
console.log(arrString);
    }


}


// Invoke the function and pass in the array


addExcitement(addExcitement);

