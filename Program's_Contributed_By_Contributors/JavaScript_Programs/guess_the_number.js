    var min = 0;
    var max = 10;
    var random = Math.floor(Math.random() * (max - min +1)) + min;
    document.write(random);
    var tryCount = 0;
    function takeMynumber() {
        ++tryCount;
        if (tryCount > 5) {
            alert("You already used your 5 tries");
            return;
        }
        var myRandom = parseInt(document.getElementById("numberInput").value);
        if (myRandom == random){
        document.getElementById("textOutput").innerHTML = "Good Job <br/> Now try guess number between 0-100";
        }
        if (myRandom < random){   
        document.getElementById("textOutput").innerHTML = "Greater than:  " + myRandom;      
        }
        if (myRandom > random){
        document.getElementById("textOutput").innerHTML = "Less than:  " + myRandom;   
       }
    }
