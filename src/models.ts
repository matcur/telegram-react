export type User = {
  id: number
  firstName: string
  lastName: string
  chats: Chat[]
  avatarUrl: string
}

export type Message = {
  id: number
  author: User
  content: string
  chatId: number
  creationDate: string
}

export type Chat = {
  id: number
  name: string
  messages: Message[]
  members: User[]
}