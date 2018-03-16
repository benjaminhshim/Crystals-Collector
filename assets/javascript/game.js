$(document).ready(function () {

    // SET GLOBAL VARIABLES

    // COMPUTER GENERATES RANDOM NUMBER
    var computer = Math.floor((Math.random() * 120) + 19);
    console.log('Computer: ' + computer);
    $('.computer').html(computer);

    // EACH CRYSTAL GENERATES ITS OWN RANDOM NUMBER
    var bluePoints = Math.floor((Math.random() * 12) + 1);
    var orangePoints = Math.floor((Math.random() * 12) + 1);
    var whitePoints = Math.floor((Math.random() * 12) + 1);
    var greenPoints = Math.floor((Math.random() * 12) + 1);

    // SUM OF USER'S CRYSTAL'S POINTS
    var userPoints = 0;

    // STORE WINS AND LOSSES
    var wins = 0;
    $('#wins').html('Wins: ' + wins);

    var losses = 0;
    $('#losses').html('Losses: ' + losses);


    // CREATE A FUNCTION TO RESET THE GAME AFTER A WIN OR A LOSS
        // COMPUTER SHOULD RE-GENERATE A RANDOM NUMBER
        // EACH CRYSTAL SHOULD RE-GENERATE ITS OWN RANDOM NUMBER
        // TOTAL POINTS OF CRYSTALS SHOULD RESET TO 0
    function resetGame() {
        computer = Math.floor((Math.random() * 120) + 19);
        $('.computer').html(computer);

        bluePoints = Math.floor((Math.random() * 12) + 1);
        orangePoints = Math.floor((Math.random() * 12) + 1);
        whitePoints = Math.floor((Math.random() * 12) + 1);
        greenPoints = Math.floor((Math.random() * 12) + 1);

        userPoints = 0
        $('.user-points').html(userPoints);

    }

    // IF USER MATCHES COMPUTER'S NUMBER
        // WINS +1
        // PRINT TO WINDOW
        // RESET GAME
    function ifWin() {
        wins++;
        $('#wins').html('Wins: ' + wins);
        console.log('You win!');
        resetGame();
    }

    // IF USER MATCHES COMPUTER'S NUMBER
        // WINS +1
        // PRINT TO WINDOW
        // RESET GAME 
    function ifLose() {
        losses++;
        $('#losses').html('Losses: ' + losses);
        console.log('You lose!');   
        resetGame();  
    }

    // ASSIGN CLICK FUNCTIONALITY
        // EACH CRYSTAL ADDS TO THE TOTAL OF userPoints

        $('#blue').click(function(event){
            userPoints = userPoints + bluePoints;
            $('.user-points').html(userPoints);
            console.log('Blue: ' + bluePoints)

            if (userPoints == computer) {
                ifWin();
            } else if (userPoints > computer) {
                ifLose();
            }

         })
     
         $('#orange').click(function(){
             userPoints = userPoints + orangePoints;
             $('.user-points').html(userPoints);   
             console.log('Orange: ' + orangePoints);   

             if (userPoints == computer) {
                ifWin();
            } else if (userPoints > computer) {
                ifLose();
            }

         })
     
         $('#white').click(function(){
             userPoints = userPoints + whitePoints;
             $('.user-points').html(userPoints); 
             console.log('White: ' + whitePoints);

             if (userPoints == computer) {
                ifWin();
            } else if (userPoints > computer) {
                ifLose();
            }
     
         })
         $('#green').click(function(){
             userPoints = userPoints + greenPoints;
             $('.user-points').html(userPoints); 
             console.log('Green: ' + greenPoints);

             if (userPoints == computer) {
                ifWin();
            } else if (userPoints > computer) {
                ifLose();
            }
     
         })


        




})