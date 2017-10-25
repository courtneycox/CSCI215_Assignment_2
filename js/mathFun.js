var num = 0;
var numArray = [];
var i = 0;

function mathFun() {
    while (num !== -1) {
        num= prompt("Enter a number (Entering -1 terminates the program): ");
        numArray[i] = num;
        i++;
    }

        var max = 0;

        for(i=0; i<numArray.length; i++) {
            if(max < numArray[i])
                max = numArray[i];
        }
        document.write("Max: " + max + "</br>");

        var min = max;

        for(i = 0; i < numArray.length; i++) {
            if (min > numArray[i])
                min = numArray[i];
        }
    document.write("Min: " + min + "</br>");
}