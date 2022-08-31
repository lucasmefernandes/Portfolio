var buttonColourse = ["red", "blue", "green", "yellow"]
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$('.btn').click(function () {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

function playSound(name) {
    var audio = new Audio('sounds/' + name + '.mp3');
    audio.play();
}

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.round(Math.random() * 3);
    var randomChosenColour = buttonColourse[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
    $('#' + randomChosenColour).fadeOut(150).fadeIn(150);
    playSound(randomChosenColour);
};

function animatePress(currentColour) {
    $('#' + currentColour).addClass('pressed');
    setTimeout(function () {
        $('#' + currentColour).removeClass('pressed');
    }, 100);
}

$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log('CERTO!');
        if (userClickedPattern.length === gamePattern.length) {
            console.log('CERTO!');
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        startOver();
        playSound("wrong");

        $('body').addClass('game-over');
        setTimeout(function () {
            $('body').removeClass('game-over');
        }, 200);

        $("h1").text("Game Over, Press Any Key to Restart");

        console.log('ERRO!');
    }
}

function startOver() {
    level = 0;
    started = false;
    gamePattern = [];
}
