import { Component, Host, h, State, Prop } from "@stencil/core";
import { TicTacToeGame } from "./tic-tac-toe-game";

@Component({
  tag: "app-game-tic-tac-toe",
  styleUrl: "app-game-tic-tac-toe.css",
  scoped: true,
})
export class AppGameTicTacToe {
  // TODO should not to use static property
  static game: TicTacToeGame;

  @Prop() isHost: boolean;
  @Prop({ mutable: true }) gameUpdate: { type: 'move' | 'update', update: [number, number] | { gameBoard: string[][], nextPlayer: string, winner?: string } };
  @Prop() notifyMoveCallback: (coordinate: [number, number]) => void;
  @Prop() broadcastGameUpdateCallback: (gameUpdate: any) => void;

  @State() isPlaying: boolean = false;
  @State() board: string[] = ['', '', '', '', '', '', '', '', ''];
  @State() currentPlayer: string;

  componentWillRender() {
    if (AppGameTicTacToe.game) {
      AppGameTicTacToe.game.updateHandler = this.gameUpdateHandler;
    }

    if (!this.isHost && this.gameUpdate?.type === 'update') {
      const update = this.gameUpdate.update as { gameBoard: string[][], nextPlayer: string, winner?: string };
      this.gameUpdateHandler(
        update.gameBoard,
        update.nextPlayer,
        update.winner
      );
    } else if (this.isHost && this.gameUpdate?.type === 'move') {
      const update = this.gameUpdate.update as [number, number];
      AppGameTicTacToe.game.play(update);
      this.gameUpdate = undefined;
    }

  }

  render() {
    const height = 100;
    const width = 100;

    return (
      <Host>
        <svg
          height="calc(100% - 50px)"
          width="100%"
          viewBox={`0 0 ${width} ${height}`}
          preserveAspectRatio="xMidYMid meet"
        >
          <g id="guidelines">
            <line
              class="guideline"
              x1={width / 3}
              y1={0}
              x2={width / 3}
              y2={height}
              stroke="black"
              stroke-width={height / 100}
            ></line>
            <line
              class="guideline"
              x1={width / 3 * 2}
              y1={0}
              x2={width / 3 * 2}
              y2={height}
              stroke="black"
              stroke-width={width / 100}
            ></line>
            <line
              class="guideline"
              x1={0}
              y1={height / 3}
              x2={width}
              y2={height / 3}
              stroke="black"
              stroke-width={height / 100}
            ></line>
            <line
              class="guideline"
              x1={0}
              y1={height / 3 * 2}
              x2={width}
              y2={height / 3 * 2}
              stroke="black"
              stroke-width={width / 100}
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
                    if (this.isHost) {
                      AppGameTicTacToe.game.play([parseInt((index / 3).toString()), index % 3]);
                    } else {
                      this.notifyMoveCallback([parseInt((index / 3).toString()), index % 3]);
                    }
                  }}
                ></circle>
              ))
            }
          </g>
        </svg>
        {
          this.isHost &&
          <ion-button onClick={() => {
            this.isPlaying = true;
            AppGameTicTacToe.game = new TicTacToeGame(this.gameUpdateHandler);
          }}>Start/Restart</ion-button>
        }
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
      this.isPlaying = true;
      this.currentPlayer = nextPlayer;
    }

    if (this.isHost) {
      this.broadcastGameUpdateCallback({
        gameBoard,
        nextPlayer,
        winner
      });
    }
  }
}
