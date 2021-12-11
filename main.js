function Start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/WMbJiBTiK/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        randomR = Math.floor(Math.random() * 255) + 1;
        randomB = Math.floor(Math.random() * 255) + 1;
        randomG = Math.floor(Math.random() * 255) + 1;

        if (results[0].label == "Barking") {
            document.getElementById("dogScore").innerHTML = "Dog (Barking) - " + (results[0].confidence * 100).toFixed(2) + "%";
            document.getElementById("catScore").innerHTML = "Cat (Meowing) - ";
            document.getElementById("cowScore").innerHTML = "Cow (Mooing) - ";
            document.getElementById("pigScore").innerHTML = "Pig (Oinking) - ";
            document.getElementById("img").src = "dog.gif";
        } else if (results[0].label == "Meowing") {
            document.getElementById("dogScore").innerHTML = "Dog (Barking) - ";
            document.getElementById("catScore").innerHTML = "Cat (Meowing) - " + (results[0].confidence * 100).toFixed(2) + "%";
            document.getElementById("cowScore").innerHTML = "Cow (Mooing) - " ;
            document.getElementById("pigScore").innerHTML = "Pig (Oinking) - " ;
            document.getElementById("img").src = "cat.gif";
        } else if (results[0].label == "Mooing") {
            document.getElementById("dogScore").innerHTML = "Dog (Barking) - ";
            document.getElementById("catScore").innerHTML = "Cat (Meowing) - ";
            document.getElementById("cowScore").innerHTML = "Cow (Mooing) - " + (results[0].confidence * 100).toFixed(2) + "%";
            document.getElementById("pigScore").innerHTML = "Pig (Oinking) - ";
            document.getElementById("img").src = "cow.gif";
        } else if (results[0].label == "Oinking") {
            document.getElementById("dogScore").innerHTML = "Dog (Barking) - ";
            document.getElementById("catScore").innerHTML = "Cat (Meowing) - ";
            document.getElementById("cowScore").innerHTML = "Cow (Mooing) - " ;
            document.getElementById("pigScore").innerHTML = "Pig (Oinking) - " + (results[0].confidence * 100).toFixed(2) + "%";
            document.getElementById("img").src = "pig.gif";
        }
        else {
            document.getElementById("dogScore").innerHTML = "Dog (Barking) - ";
            document.getElementById("catScore").innerHTML = "Cat (Meowing) - ";
            document.getElementById("cowScore").innerHTML = "Cow (Mooing) - ";
            document.getElementById("pigScore").innerHTML = "Pig (Oinking) - ";
            document.getElementById("img").src = "EarIcon.png";
        }
    }
}