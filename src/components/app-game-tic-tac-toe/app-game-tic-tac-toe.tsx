import { Component, Host, h, State, Prop } from "@stencil/core";
import { TicTacToeGame } from "./tic-tac-toe-game";

@Component({
  tag: "app-game-tic-tac-toe",
  styleUrl: "app-game-tic-tac-toe.css",
  scoped: true,
})
export class AppGameTicTacToe {
  game: TicTacToeGame;

  @State() isPlaying: boolean = false;
  @State() board: string[] = ['', '', '', '', '', '', '', '', ''];
  @State() currentPlayer: string;

  render() {
    const height = 600;
    const width = 600;

    return (
      <Host>
        <svg height={height} width={width}>
          <g id="guidelines">
            <line
              class="guideline"
              x1={width / 3}
              y1={0}
              x2={width / 3}
              y2={height}
              stroke="black"
              stroke-width={5}
            ></line>
            <line
              class="guideline"
              x1={width / 3 * 2}
              y1={0}
              x2={width / 3 * 2}
              y2={height}
              stroke="black"
              stroke-width={5}
            ></line>
            <line
              class="guideline"
              x1={0}
              y1={height / 3}
              x2={width}
              y2={height / 3}
              stroke="black"
              stroke-width={5}
            ></line>
            <line
              class="guideline"
              x1={0}
              y1={height / 3 * 2}
              x2={width}
              y2={height / 3 * 2}
              stroke="black"
              stroke-width={5}
            ></line>
          </g>
          <g id="circles">
            {
              this.board.map((value, index) => (
                <circle
                  fill={value === 'x' ? 'red' : 'blue'}
                  opacity={value ? 1 : 0}
                  cx={index % 3 * (width / 3) + (width / 6)}
                  cy={parseInt((index / 3).toString()) * (height / 3) + (height / 6)}
                  r={width / 6 * .8}
                  cursor='pointer'
                  onClick={() => {
                    this.game.play([parseInt((index / 3).toString()), index % 3]);
                  }}
                ></circle>
              ))
            }
          </g>
        </svg>
        <ion-button onClick={() => {
          this.isPlaying = true;
          this.game = new TicTacToeGame(this.gameUpdateHandler);
        }}>Start/Restart</ion-button>
        <ion-text>{this.isPlaying ? `${this.currentPlayer}'s turn.` : 'Please start a game.'}</ion-text>
      </Host>
    );
  }

  gameUpdateHandler = (gameBoard: string[][], nextPlayer: string, winner?: string) => {
    this.board = gameBoard.flatMap(cell => cell);
    if (winner) {
      setTimeout(() => {
        alert(`${winner} wins!`);
      }, 0);
      this.isPlaying = false;
      this.currentPlayer = undefined;
    } else {
      this.currentPlayer = nextPlayer;
    }
  }

}
