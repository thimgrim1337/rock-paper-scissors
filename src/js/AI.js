class AI {
  constructor(possibleChoices) {
    this.possibleChoices = possibleChoices;
  }

  makeChoice() {
    const aiChoice = Math.floor(Math.random() * this.possibleChoices.length);
    return this.possibleChoices[aiChoice];
  }
}

export default AI;
