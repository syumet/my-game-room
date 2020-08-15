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
        isGameFinished?: boolean,
    ) => void;

    constructor(
        updateHandler: (
            gameBoard: string[][],
            nextPlayer: string,
            isGameFinished?: boolean,
        ) => void,
    ) {
        this.updateHandler = updateHandler;
        this.updateHandler(this.gameBoard, this.currentPlayer);
    }

    play(coordinate: [number, number]) {
        const [x, y] = coordinate;
        if (!this.gameBoard[x][y]) {
            this.gameBoard[x][y] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer == "o" ? "x" : "o";
            const isGameFinished = this.determineEndGame();
            this.updateHandler(this.gameBoard, this.currentPlayer, isGameFinished);
        }
    }

    determineEndGame() {
        let result = false;
        for (let row = 0; row < 3; row++) {
            result = result ||
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
            result = result ||
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
        result = result ||
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
        result = result ||
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
        return result;
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
