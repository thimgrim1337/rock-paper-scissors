class AI {
  constructor(optionsToChoose) {
    this.possibleChoices = optionsToChoose;

    let _aiChoice = this.makeChoice();
    this.getAIChoice = () => _aiChoice;
  }

  makeChoice() {
    const aiChoice = Math.floor(Math.random() * this.possibleChoices.length);
    return this.possibleChoices[aiChoice].dataset.option;
  }
}

export default AI;
