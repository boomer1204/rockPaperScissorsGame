var mySelection,
compSelection,
winner;

mySelection = document.getElementById('mySelection');
compSelection = document.getElementById('compSelection');
winner = document.getElementById('winner');
rockButton = document.getElementById('rock');
paperButton = document.getElementById('paper');
scissorButton = document.getElementById('scissors');

rockButton.addEventListener('click', function(){
  play(1);
})

paperButton.addEventListener('click', function(){
  play(2);
})

scissorButton.addEventListener('click', function(){
  play(3);
})

var play = function(e){
    var myResponse = e;
    var compResponse = compSelectionGenerator();

    mySelection.innerHTML = translator(myResponse);
    compSelection.innerHTML = translator(compResponse);

    var winnerDecision = processWinner(myResponse, compResponse);
    var winnerValue = translator(winnerDecision);

    winner.innerHTML = winnerValue;
}

var compSelectionGenerator = function(){
    return Math.floor(Math.random() * 3) + 1;
}

var translator = function(input){
    input = parseInt(input);
    if (input === 0){
        return 'Draw';
    }
    else if (input === 1) {
        return 'Rock';
    } else if (input === 2) {
        return 'Paper';
    } else if (input ===  3) {
        return 'Scissors';
    } else {
        return 'Please choose 1 for Rock, 2 for Paper or 3 for Scissors';
    }
}

var processWinner = function(myResp, compSelect){
    var diff = Math.abs(myResp - compSelect);

    if (diff === 1) {
        if (myResp > compSelect) {
            return myResp;
        } else {
            return compSelect;
        }
    } else if (diff > 1){
        if (myResp < compSelect) {
            return myResp;
        } else {
            return compSelect;
        }
    } else if (diff === 0) {
        return 0;
    }
}

/*var playButton = document.getElementById('playButton');
playButton.addEventListener('click', play);*/