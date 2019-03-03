var i = 1;
var len = 7;
var sourceURL = ['none', '744712488354929958', '649292471250810133', '402368547951037954', '773000723514591932', '254383078926059579', '363454632400455172', '331999803763130937'];

function changeImg(s) {
    i += s;
    Anime(s);
    setTimeout('Pack()', 60);
}

function ban() {
    if (i === 1){
        document.querySelector('#backward').disabled = true;
    }
    else if(i === len){
        document.querySelector('#forward').disabled = true;
    }
    else{
        document.querySelector('.image-viewer__button:disabled').disabled = false;
    }
}

function ChangePreview() {
    document.querySelector('#left').outerHTML = "<img src = 'images/pic"+(i-1)+".jpg' class = 'preimages' id = 'left'>";
    document.querySelector('#right').outerHTML = "<img src = 'images/pic"+(i+1)+".jpg' class = 'preimages' id = 'right'>";
    if (i === 1){
        document.querySelector('#left').outerHTML = "<img  class = 'invisible' id = 'left'>";
    }
    else if (i === len){
        document.querySelector('#right').outerHTML = "<img  class = 'invisible' id = 'right'>";
    }
}
function Anime(s) { 
    document.querySelector('.image-viewer__display').innerHTML = "";
    document.querySelector('#left').outerHTML = "<img src = 'images/pic"+(i-(s+1)/2)+".jpg' class = 'preimages' id = 'left'>";
    document.querySelector('#right').outerHTML = "<img src = 'images/pic"+(i - (s-1)/2)+".jpg' class = 'preimages' id = 'right'>";
}

function Pack() {
    document.querySelector('.image-viewer__display').innerHTML = "<a href = 'https://www.pinterest.com/pin/"+sourceURL[i]+"/'><img src = 'images/pic"+i+".jpg' id = 'display'></a>";
    ChangePreview();
    ban()
}
