class Result {
  static checkWinner(playerChoice, aiChoice) {
    if (playerChoice === aiChoice) return 'remis';
    else if (
      (playerChoice === 'rock' && aiChoice === 'scissors') ||
      (playerChoice === 'paper' && aiChoice === 'rock') ||
      (playerChoice === 'scissors' && aiChoice === 'paper')
    )
      return true;
    else return false;
  }
}
export default Result;
