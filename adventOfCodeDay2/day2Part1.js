//Variable declarations
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
function game (opponent, player) {

}
