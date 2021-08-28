import {ApiClient} from "api/ApiClient";
import {Code, Phone} from "models";

export class VerificationApi {
  api = new ApiClient()

  async byPhone(number: string): Promise<{success: boolean, result: unknown}> {
    // return this.api.post(`verification/by-phone?number=${number}`)
    return {success: true, result: ''}
  }

  async fromTelegram(phone: Pick<Phone, 'number'>): Promise<{success: boolean, result: unknown}> {
    // return this.api.post('verification/from-telegram', phone)
    return {success: true, result: ''}
  }

  async token(code: Code) {
    return ''
  }
}