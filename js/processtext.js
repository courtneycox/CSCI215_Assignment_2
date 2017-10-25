function processText () {
    var text = document.getElementsByName('userInput').value.toLowerCase(); //gets string from html user input and turns the string to all lower case values

    //gets rid of periods

    var splitText = text.split(" "); // turns each word into a single value in array

    var phrase = []; //empty array to hold new string

    // loops through each word in array and adds it to var phrase
    for(var i in splitText) {
        if(splitText[i]==="") {
            delete splitText[i]; // deletes spaces
        }
        else if(phrase.contains(splitText)) {
            var x = phrase.indexOf(splitText[i]);
                phrase.splice(x+1, 1, phrase[x+1]+1); //
        }
        else {
            phrase.push(splitText[i]);
            var x = phrase.indexOf(splitText[i]);
            phrase.splice(x+1, 0, 1);
        }
    }

}