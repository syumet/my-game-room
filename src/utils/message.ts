export interface Message {
    type: 'greeting' | 'chat' | 'set-game',
    player?: string,
    content?: string
}