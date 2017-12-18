


function play() {
    var userChoice = document.getElementById("userchoice").value;
    var choices = ["paper", "rock", "scissors"];
    var random = Math.floor(Math.random() * 3) + 0;
    var botChoice = choices[random];
    var result = "";

    if(userChoice == botChoice){
        result = "Draw Nobody Wins";
	}
    else if (userChoice == "rock" && botChoice == "scissors") {
        result = "Wahooo you actually won!"
    }
    else if (userChoice == "paper" && botChoice == "rock") {
        result = "Wahooo you actually won!"
    }
    else if (userChoice == "paper" && botChoice == "scissors") {
        result= "Wahooo you actually won!"
    }
    else if (userChoice == "scissors" && botChoice == "rock") {
        result = "You loose Boooya!"
    }
    else if (userChoice == "scissors" && botChoice == "paper") {
        result = "OMG you actually won!"
    }
	else {result = "You did not choose a valid choice. Please type exactly rock, paper, or scissors! NO CHEATING...Thank you for playing. Have a great day!"
    }
	document.getElementById("bot").innerHTML = botChoice;
    document.getElementById("result").innerHTML=result;

}
