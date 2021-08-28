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
      chats: initialState.list
    }
  }
}