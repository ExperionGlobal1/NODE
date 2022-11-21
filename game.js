let readlineSync = require('readline-sync');
process.stdout.write("Player1:")
let Player1 =readlineSync.question("")
process.stdout.write("Player2:")
let Player2 =readlineSync.question("")

let paper,stone,cissors;

if(Player1=="stone" && Player2=="paper") {
    console.log("waoo..player2 is win")
}
else if(Player1=="stone" && Player2=="cissors"){
    console.log("waoo..player1 is win")
}

else if(Player1=="paper" && Player2=="cissors") {
    console.log("waoo..player2 is win")
}
else if(Player1=="paper" && Player2=="stone"){
    console.log("waoo..player1 is win")
}

else if(Player1=="cissors" && Player2=="paper") {
    console.log("waoo..player1 is win")
}
else if(Player1=="cissors" && Player2=="stone"){
    console.log("waoo..player2 is win")
}

else{
    console.log("please choose right material")
}