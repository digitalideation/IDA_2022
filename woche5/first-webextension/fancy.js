let randomRed = Math.floor(Math.random() * 255);
let randomGreen = Math.floor(Math.random() * 255);
let randomBlue = Math.floor(Math.random() * 255);

let randomBG = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";

document.body.style.backgroundColor = randomBG;


/* --- exchange images with random ones from unsplash --- */
let images = document.getElementsByTagName('img');
let suchbegriff = "cat";
for (let n = 0; n < images.length; n++) {
    images[n].src = "https://source.unsplash.com/random/?" + suchbegriff + "&sig=" + n;
}

/*--- replace all text --*/

function replaceNodeText(node) {

    let hasText = /\w/; //Suchmuster, Reguläre Expression: https://www.w3schools.com/jsref/jsref_obj_regexp.asp
    for (let x = 0; x < node.childNodes.length; x++) {
        if (node.childNodes[x].nodeType === 3 && hasText.test(node.childNodes[x].textContent)) {
            node.childNodes[x].textContent += " HIJACK";
            // oder um ganz zu ersetzen:
            // node.childNodes[x].textContent = "HIJACK";
        }
        replaceNodeText(node.childNodes[x])
    }



}

replaceNodeText(document.body);