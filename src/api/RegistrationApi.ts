import {ApiClient} from "api/ApiClient";
import {User} from "models";

export class RegistrationApi {
  api = new ApiClient()

  async register(user: Pick<User, 'lastName' | 'firstName' | 'phone'>) {
    return this.api.post('user/register', user)
  }
}