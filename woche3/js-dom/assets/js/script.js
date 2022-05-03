let n = 0; /*schlüsselwort let und variablenname. zuweisung des werts von rechts nach links */
function buttonPressed() {
    n++;
    document.getElementById("element").style.left = n + "px";
}

function neuesElement() {
    let div = document.createElement("div");
    div.classList.add('random');
    div.style.left = Math.random() * window.innerWidth + "px";
    div.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(div);
}


function neuesBild() {
    n++;
    let versatz = 20; /* um wieviel das bild jedesmal nach rechts rückt*/
    let myImage = new Image(100, 100);
    myImage.src = 'assets/images/jackson.png';
    myImage.classList.add('bild');
    myImage.style.left = n * versatz + "px";
    document.body.appendChild(myImage);
}

let matches = document.querySelectorAll("button");
let firstbtn = matches[0];
firstbtn.addEventListener("click", neuesElement); /* erster Parameter Event, zweiter welche Funktion aufgerufen werden soll*/


document.addEventListener('keypress', whichKey);

function whichKey(event) {
    console.log(event.key); //rausfinden, welcher key auf der Tastatur gedrückt wurde
    if (event.key == 'm') {
        //do something, z.Bsp. move forward
        n++;
        document.getElementById("element").style.left = n + "px";
    }
}