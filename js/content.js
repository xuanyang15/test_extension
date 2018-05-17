// Add bubble to the top of the page.
let suggestionDOM = document.createElement('div');
suggestionDOM.setAttribute('class', 'suggestion_window')
$("body").append(suggestionDOM);
// document.body.appendChild(suggestionDOM);

let lastX = 0;
let lastY = 0;


function show_data(e) {
    if(!e){
        e = window.event;
    }

    let data = e.target.value;
    let top = lastY + 40 + 'px';
    let left = lastX + 'px';

    suggestionDOM.innerText = data;
    suggestionDOM.style.top = top;
    suggestionDOM.style.left = left;
    suggestionDOM.style.visibility = 'visible';
}

function record_mouse_postion(e) {
    if(!e){
        e = window.event;
    }

    lastX = e.clientX;
    lastY = e.clientY;
}

function hide_data() {
    suggestionDOM.style.visibility = 'hidden';
}

$(document).mousedown(record_mouse_postion);
$("#lst-ib").blur(hide_data).keyup(show_data);
// document.getElementById('lst-ib').onkeyup = show_data;
// document.getElementById('lst-ib').onblur = hide_data;
// document.onmousedown = record_mouse_postion;