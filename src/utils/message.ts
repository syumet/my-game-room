export interface Message {
    type: 'greeting' | 'chat',
    player?: string,
    content?: string
}