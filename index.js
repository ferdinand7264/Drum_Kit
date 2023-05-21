function buttonAnimation(currKey) {
    var activeButton = document.querySelector("." + currKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}

function check(key)
{
    switch (key) {
        case "w":
            var crash  = new Audio("sounds/crash.mp3");
            crash.play();
            buttonAnimation(key);
            break;
        case "a":
            var kick  = new Audio("sounds/kick-bass.mp3");
            kick.play();
            buttonAnimation(key);
            break;
        case "s":
            var snare  = new Audio("sounds/snare.mp3");
            snare.play();
            buttonAnimation(key);
            break;
        case "d":
            var tom1  = new Audio("sounds/tom-1.mp3");
            tom1.play();
            buttonAnimation(key);
            break;
        case "j":
            var tom2  = new Audio("sounds/tom-2.mp3");
            tom2.play();
            buttonAnimation(key);
            break;
        case "k":
            var tom3  = new Audio("sounds/tom-3.mp3");
            tom3.play();
            buttonAnimation(key);
            break;
        case "l":
            var tom4  = new Audio("sounds/tom-4.mp3");
            tom4.play();
            buttonAnimation(key);
            break;
    
        default:
            break;
    }
}


for (var i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // alert("I got clicked " + i);
        var buttonHTML = this.innerHTML;
        check(buttonHTML);
    });
}
document.addEventListener("keypress",function(event)
{
    check(event.key);
});