export interface Message {
    type: 'greeting' | 'chat' | 'set-game' | 'game-move' | 'game-update',
    player?: string,
    content?: string
}