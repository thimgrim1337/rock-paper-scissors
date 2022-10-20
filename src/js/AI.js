class AI {
  constructor() {
    this.possibleChoices = ['rock', 'paper', 'scissors'];
    let _aiChoice = this.makeChoice();
    this.getAIChoice = () => _aiChoice;
  }

  makeChoice() {
    const aiChoice = Math.floor(Math.random() * this.possibleChoices.length);
    return this.possibleChoices[aiChoice];
  }
}

export default AI;
