export class TicTacToeGame {
    private gameBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];
    private currentPlayer: string = 'o';

    updateHandler: (
        gameBoard: string[][],
        nextPlayer: string,
        winner?: string,
    ) => void;

    constructor(
        updateHandler: (
            gameBoard: string[][],
            nextPlayer: string,
            winner?: string,
        ) => void,
    ) {
        this.updateHandler = updateHandler;
        this.updateHandler(this.gameBoard, this.currentPlayer);
    }

    play(coordinate: [number, number]) {
        const [x, y] = coordinate;
        if (!this.gameBoard[x][y]) {
            this.gameBoard[x][y] = this.currentPlayer;
            let winner: string = undefined;
            if (this.isWinning(x, y)) {
                winner = this.currentPlayer;
            } else if (this.isFull()) {
                winner = 'tie'
            }
            this.currentPlayer = this.currentPlayer == 'o' ? 'x' : 'o';
            this.updateHandler(this.gameBoard, this.currentPlayer, winner);
        }
    }

    isWinning(x: number, y: number): boolean {
        return this.checkHorizontal(x, y) ||
            this.checkVertical(x, y) ||
            this.checkLeftDiagonal(x, y) ||
            this.checkRightDiagonal(x, y);
    }

    isFull(): boolean {
        return this.gameBoard.flatMap(d => d).every(Boolean)
    }

    checkVertical(x: number, y: number): boolean {
        let occupy = this.gameBoard[x][y];
        for (let i = 0; i < this.gameBoard.length; i++) {
            if (this.gameBoard[i][y] != occupy) {
                return false;
            }
        }
        return true;
    }

    checkHorizontal(x: number, y: number): boolean {
        let occupy = this.gameBoard[x][y];
        for (let j = 0; j < this.gameBoard[0].length; j++) {
            if (this.gameBoard[x][j] != occupy) {
                return false;
            }
        }
        return true;
    }

    checkLeftDiagonal(x: number, y: number): boolean {
        let criteria = 2, count = 0;
        let occupy = this.gameBoard[x][y];
        for (
            let i = x - 1, j = y - 1;
            i >= 0 && j >= 0;
            i--, j--
        ) {
            if (this.gameBoard[i][j] === occupy) {
                count++;
            }
        }
        for (
            let i = x + 1, j = y + 1;
            i < this.gameBoard.length && j < this.gameBoard[0].length;
            i++, j++
        ) {
            if (this.gameBoard[i][j] === occupy) {
                count++;
            }
        }
        return count >= criteria;
    }

    checkRightDiagonal(x: number, y: number): boolean {
        let criteria = 2, count = 0;
        let occupy = this.gameBoard[x][y];
        for (
            let i = x - 1, j = y + 1;
            i >= 0 && j < this.gameBoard[0].length;
            i--, j++
        ) {
            if (this.gameBoard[i][j] === occupy) {
                count++;
            }
        }
        for (
            let i = x + 1,
            j = y - 1; i < this.gameBoard.length && j >= 0;
            i++, j--
        ) {
            if (this.gameBoard[i][j] === occupy) {
                count++;
            }
        }
        return count >= criteria;
    }

}
