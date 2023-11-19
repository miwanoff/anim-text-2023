function add_text(id, text) {
    let timer;
    const elem = document.getElementById(id);
    let pos = 0;
    function addLetter() {
        elem.innerHTML = text[pos];
    }
    timer = setInterval(addLetter, 1000);
    //addLetter();
}