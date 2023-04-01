var totalDrumKeys = document.querySelectorAll('.drum').length;
for (i = 0; i < totalDrumKeys; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}
document.addEventListener('keypress', function (event) {
    makeSound(event.key)
    buttonAnimation(event.key);
});
function makeSound(key) {
    switch (key) {
        case 'w':
            var audio = new Audio('1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('1.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('2.mp3');
            audio.play();
            break;
        default:
            console.log('Invalid');
            break;
    }
}
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add('pressed');
    setTimeout(function () {
        activeButton.classList.remove('pressed');
    }, 100);
}