class Player {
  constructor() {
    let _playerChoice = '';
    this.getPlayerChoice = () => _playerChoice;

    this.setPlayerChoice = (choice) => (_playerChoice = choice);
  }
}
export default Player;
