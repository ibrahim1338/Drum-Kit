var buttons = document.querySelectorAll("button");


// detect button click and play sound
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {

        var buttonInnerHtml = this.innerHTML;

        switch (buttonInnerHtml) {
            case ('w'):
                var tom1 = new Audio("./sounds/tom-1.mp3")
                tom1.play();
                break;
            case ('a'):
                var tom2 = new Audio("./sounds/tom-2.mp3")
                tom2.play();
                break;
            case ('s'):
                var tom3 = new Audio("./sounds/tom-3.mp3")
                tom3.play();
                break;
            case ('d'):
                var tom4 = new Audio("./sounds/tom-4.mp3")
                tom4.play();
                break;
            case ('j'):
                var crash = new Audio("./sounds/crash.mp3")
                crash.play();
                break;
            case ('k'):
                var kickBass = new Audio("./sounds/kick-bass.mp3")
                kickBass.play();
                break;
            case ('l'):
                var snare = new Audio("./sounds/snare.mp3")
                snare.play();
                break;

            default:
                console.log(buttonInnerHtml)
                break;
        }


    })
}


// detect key press and play sound
document.addEventListener("keydown",function(event){
    audioPlay(event.key);
})

var audioPlay = function(character){
switch (character) {
            case ('w'):
                var tom1 = new Audio("./sounds/tom-1.mp3")
                tom1.play();
                break;
            case ('a'):
                var tom2 = new Audio("./sounds/tom-2.mp3")
                tom2.play();
                break;
            case ('s'):
                var tom3 = new Audio("./sounds/tom-3.mp3")
                tom3.play();
                break;
            case ('d'):
                var tom4 = new Audio("./sounds/tom-4.mp3")
                tom4.play();
                break;
            case ('j'):
                var crash = new Audio("./sounds/crash.mp3")
                crash.play();
                break;
            case ('k'):
                var kickBass = new Audio("./sounds/kick-bass.mp3")
                kickBass.play();
                break;
            case ('l'):
                var snare = new Audio("./sounds/snare.mp3")
                snare.play();
                break;

            default:
                console.log(buttonInnerHtml)
                break;
        }
}

// var drumAudio= new Audio("/sounds/tom-1.mp3");
// drumAudio.play();

// this is the identity of object that triggered the event

// switch takes the code to different track according to condition
