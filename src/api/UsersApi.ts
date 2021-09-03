import {ApiClient} from "api/ApiClient";
import {User} from "models";
import {initialState} from "app/slices/chatsSlice";

export class UsersApi {
  api = new ApiClient()

  async find(phoneNumber: string): Promise<User> {
    return {
      id: 5,
      firstName: 'Jin',
      lastName: 'Lin',
      avatarUrl: '',
      chats: initialState.list,
      friends: [
        {
          id: 6,
          firstName: 'Lin',
          lastName: 'Sing',
          avatarUrl: '',
          chats: initialState.list,
        },
        {
          id: 7,
          firstName: 'William',
          lastName: 'Singer',
          avatarUrl: '',
          chats: initialState.list,
        },
      ],
    }
  }
}