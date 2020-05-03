import axios from 'axios'

let baseURL

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  baseURL = 'http://127.0.0.1:3000/'
} else {
  baseURL = 'http://127.0.0.1:3000/'
}

export const API = axios.create(
  {
    baseURL: baseURL
  }
)
