let data;
let textString;



function setup() {
    createCanvas(800, 600);
    let url = "chrome_history.json";
    loadJSON(url, showHistory);
}


function draw() {
    noLoop();
}


function showHistory(data) {
    /*console.log(data);*/

    //create new array with titles 
    let documentTitles = new Array();
    for (let i = 0; i < 1000; i++) {
        //console.log(data[i].title);
        documentTitles[i] = data[i].title;
        fill(0, map(data[i].visitCount, 1, 50, 0, 255), random(255));
        textSize(map(data[i].visitCount, 1, 100, 5, 12));
        text(data[i].title, random(width), random(height));
    }

    /*
    //sort alphabetically
    documentTitles.sort();

    for (let i = 0; i < documentTitles.length; i++) {
        textString += documentTitles[i] + " - ";
    }

    textSize(16);
    text(textString, 10, 10, width - 10, height - 10);
    */

}