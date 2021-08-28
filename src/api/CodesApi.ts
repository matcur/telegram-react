import {ApiClient} from "api/ApiClient";
import {Code} from "models";

export class CodesApi {
  api = new ApiClient()

  async valid(code: {value: string, phoneNumber: string}) {
    return {success: true, result: true}
  }
}