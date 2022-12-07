//Variable declarations
playerTotal = 0;

const opponentRock = A;
const opponentPaper = B;
const thisScissors = C;

const otherRock = X;
const otherPaper = Y;
const otherScissors = Z;


function lose {
    switch (opponent, player) {
        case opponent === A && player === Z:
            return true;    
            break;
        case opponent === B && player === X:
            return true;
            break;
        case opponent === C && player === Y:
            return true;
            break;  
        default:
            break;
    }
}

//Each game contains many rounds
function gameRound (opponent, player) {
    if (lose(opponent, player) === true) {
        playerTotal += 0;
    } else if (C, Y || B, X || A, Z) {
        playerTotal += 3;
    }
}
