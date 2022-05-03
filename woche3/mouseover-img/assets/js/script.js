let matches = document.querySelectorAll(".change");
matches.forEach(function(el, key) {
        el.addEventListener('mouseover', changeImg);
    }

);

function changeImg() {
    let newimg = this.getAttribute('data-src-other');
    let oldimg = this.getAttribute('src');

    this.src = newimg;
    this.setAttribute('data-src-other', oldimg);
}


function changeImgOnce() {
    let newimg = this.getAttribute('data-src-other');
    this.src = newimg;
    this.classList.remove("change")

}