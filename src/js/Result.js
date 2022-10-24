class Result {
  static checkWinner(playerChoice, aiChoice) {
    if (playerChoice === aiChoice)
      return {
        result: 'draw',
        msg: `It's draw ${playerChoice} is equal ${aiChoice}`,
      };
    else if (
      (playerChoice === 'sword' && aiChoice === 'axe') ||
      (playerChoice === 'axe' && aiChoice === 'spear') ||
      (playerChoice === 'spear' && aiChoice === 'sword')
    )
      return { result: true, msg: `You win ${playerChoice} beats ${aiChoice}` };
    else
      return {
        result: false,
        msg: `You loss ${aiChoice} beats ${playerChoice}`,
      };
  }
}
export default Result;
