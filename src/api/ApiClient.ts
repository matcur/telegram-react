export class ApiClient {
  private readonly baseUri = 'http://localhost:5000/api/'

  constructor(version: string = '1.0') {
    this.baseUri += (version + '/')
  }

  async get<TResult>(resource: string) {
    return await fetch(this.baseUri + resource)
      .then(res => res.json() as Promise<TResult>)
  }
}