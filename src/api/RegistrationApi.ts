import {ApiClient} from "api/ApiClient";
import {Phone, User} from "models";

export class RegistrationApi {
  api = new ApiClient()

  async register(phone: {number: string}) {
    // return this.api.post('user/register', user)
    return 12
  }
}