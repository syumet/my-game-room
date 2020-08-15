export class TicTacToeGame {
    private gameBoard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];
    private currentPlayer: string = "o";
    private updateHandler: (
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
            const winner = this.determineWinner();
            this.currentPlayer = this.currentPlayer == "o" ? "x" : "o";
            this.updateHandler(this.gameBoard, this.currentPlayer, winner);
        }
    }

    determineWinner() {
        let isGameEnd = false;
        let winner = '';
        for (let row = 0; row < 3; row++) {
            isGameEnd = isGameEnd ||
                this.determinePiecesFromSamePlayer(
                    'o',
                    [
                        this.gameBoard[row][0],
                        this.gameBoard[row][1],
                        this.gameBoard[row][2]
                    ]
                ) ||
                this.determinePiecesFromSamePlayer(
                    'x',
                    [
                        this.gameBoard[row][0],
                        this.gameBoard[row][1],
                        this.gameBoard[row][2]
                    ]
                );
        }
        for (let column = 0; column < 3; column++) {
            isGameEnd = isGameEnd ||
                this.determinePiecesFromSamePlayer(
                    'o',
                    [
                        this.gameBoard[0][column],
                        this.gameBoard[1][column],
                        this.gameBoard[2][column]
                    ]
                ) ||
                this.determinePiecesFromSamePlayer(
                    'x',
                    [
                        this.gameBoard[0][column],
                        this.gameBoard[1][column],
                        this.gameBoard[2][column]
                    ]
                );
        }
        isGameEnd = isGameEnd ||
            this.determinePiecesFromSamePlayer(
                'o',
                [
                    this.gameBoard[0][0],
                    this.gameBoard[1][1],
                    this.gameBoard[2][2]
                ]
            ) ||
            this.determinePiecesFromSamePlayer(
                'x',
                [
                    this.gameBoard[0][0],
                    this.gameBoard[1][1],
                    this.gameBoard[2][2]
                ]
            );
        isGameEnd = isGameEnd ||
            this.determinePiecesFromSamePlayer(
                'o',
                [
                    this.gameBoard[0][2],
                    this.gameBoard[1][1],
                    this.gameBoard[2][0]
                ]
            ) ||
            this.determinePiecesFromSamePlayer(
                'x',
                [
                    this.gameBoard[0][2],
                    this.gameBoard[1][1],
                    this.gameBoard[2][0]
                ]
            );
        if (isGameEnd) {
            winner = this.currentPlayer;
        }
        if (this.gameBoard.flatMap(d => d).every(Boolean)) {
            winner = 'tie';
        }
        return winner;
    }

    determinePiecesFromSamePlayer(player: string, pieces: string[]) {
        for (const piece of pieces) {
            if (piece !== player) {
                return false;
            }
        }
        return true;
    }
}
