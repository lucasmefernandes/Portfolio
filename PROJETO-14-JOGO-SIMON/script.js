
var buttonColourse = ["red", "blue", "green", "yellow"]
var gamePattern = [];
var userClickedPattern = [];

$('.btn').click(function() {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour)
});

function playSound(name) {
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}


function nextSequence() {
    var randomNumber = Math.round(Math.random()* 3);
    var randomChosenColour = buttonColourse[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern)
    $('#' + randomChosenColour).fadeOut(150).fadeIn(150);
    playSound(randomChosenColour)
};

function animatePress(currentColour) {
    $('#' + currentColour).addClass('pressed');
    setTimeout(function(){ 
        $('#' + currentColour).removeClass('pressed'); 
}, 100);
}

$(document).keypress('click', function(event){

    
    var a = event.key
    if (a != false ) {
        $('h1').text('Level 0')
    }
    
    
})


