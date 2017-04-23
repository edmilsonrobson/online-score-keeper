var p1Name = "";
var p2Name = "";
var maxScore = 0;
var p1Score = 0;
var p2Score = 0;
var gameOver = false;

var p1AddScoreButton = document.querySelector("#p1-add-score");
var p2AddScoreButton = document.querySelector("#p2-add-score");

p1AddScoreButton.addEventListener("click", function(){
    if (p1Score < maxScore && gameOver == false){
        p1Score++;
    }

    updateScores();
});

p2AddScoreButton.addEventListener("click", function(){
    if (p2Score < maxScore && gameOver == false){
        p2Score++;
    }
    updateScores();
});

document.querySelector("#reset-button").addEventListener("click", function(event){
    resetScores();
});

document.querySelector(".score-tracker-form").addEventListener("submit", function(event){
    event.preventDefault();
    startTrack();

});


function startTrack(){
    var form = $('.score-tracker-form');
    form.fadeOut(400, function(){
        p1Name = document.getElementById("p1-name-input").value;
        p2Name = document.getElementById("p2-name-input").value;
        maxScore = document.getElementById("max-score-input").value;
        form.hide();



        var mainColumn2 = $('.main-column2');
        mainColumn2.fadeIn(400)
        mainColumn2.removeClass('invisible')

        updateScores();
    });
}

function updateScores(){
    var p1NameTag = document.getElementById("p1-score-text");
    var p2NameTag = document.getElementById("p2-score-text");
    var maxScoreTag = document.getElementById("max-score-text");

    if (p1Score == maxScore){
        gameOver = true;
        p1NameTag.innerHTML = p1Name + ": " + '<span class="green-text hard-text">' + p1Score + '<span>';
    } else{
        p1NameTag.textContent = p1Name + ": " + p1Score;
    }
    if (p2Score == maxScore){
        gameOver = true;
        p2NameTag.innerHTML = p2Name + ": " + '<span class="green-text hard-text">' + p2Score + '<span>';
    } else{
        p2NameTag.textContent = p2Name + ": " + p2Score;
    }
    maxScoreTag.textContent = "Max Score: " + maxScore;

}

function resetScores(){
    p1Score = 0;
    p2Score = 0;
    gameOver = false;
    updateScores();
}
