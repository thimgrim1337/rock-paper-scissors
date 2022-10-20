class Result {
  static checkWinner(playerChoice, aiChoice) {
    if (playerChoice === aiChoice)
      return { result: 'remis', msg: `${playerChoice} jest równy ${aiChoice}` };
    else if (
      (playerChoice === 'rock' && aiChoice === 'scissors') ||
      (playerChoice === 'paper' && aiChoice === 'rock') ||
      (playerChoice === 'scissors' && aiChoice === 'paper')
    )
      return { result: true, msg: `${playerChoice} bije ${aiChoice}` };
    else return { result: false, msg: `${aiChoice} bije ${playerChoice}` };
  }
}
export default Result;
