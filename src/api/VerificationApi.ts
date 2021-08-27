import {ApiClient} from "api/ApiClient";
import {Phone} from "models";

export class VerificationApi {
  api = new ApiClient()

  async byPhone(number: string): Promise<{success: boolean, result: unknown}> {
    return this.api.post(`verification/by-phone?number=${number}`)
  }

  async fromTelegram(phone: Phone): Promise<{success: boolean, result: unknown}> {
    return this.api.post('verification/from-telegram', phone)
  }
}