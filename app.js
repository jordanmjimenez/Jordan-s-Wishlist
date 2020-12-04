
let video = document.getElementById("dance")
let background = document.getElementById("bg");
let button = document.getElementById("button");
let you = document.getElementById("you")

function bgChange(){
    video.style.display = 'block'
    background.style.display = 'none'
    you.style.display="block"
    var audio = document.getElementById("audio");
    audio.play();
    

}

button.addEventListener('click', bgChange);