import axios from 'axios'

const config = require('../config.json')
config.endpoints = process.env.NODE_ENV==='production' ? config.endpoints.prod : config.endpoints.dev

export class APIService {
  protected endpoint = config.endpoints.backend

  request = axios.create({
    baseURL: this.endpoint,
    timeout: 5000
  })

  constructor() {
    this.setEndpoint(config.endpoints.backend)
  }

  addPathRoute(setPath:string) {
    this.endpoint += setPath
  }

  setEndpoint(setUrl:string) {
    this.endpoint = setUrl
    
    this.request = axios.create({
      baseURL: this.endpoint,
      timeout: 5000
    })
  }

  async sendContactFormMessage(data:any){
    return this.request.post(
      this.endpoint + '/_contact', {
        data
      }
    )
  }

  async register(data:any){
    return this.request.post(
      this.endpoint + '/_register/', {
        data
      }
    )
  }

  async fetchMatrix(committee:string){
    return this.request.get(
      this.endpoint + `/matrix/${committee}`
    )
  }

  async portfolioAvailablity(committee:string, portfolio:string){
    return this.request.get(
      this.endpoint + `/matrix/${committee}/${portfolio}`
    )
  }
}
  
