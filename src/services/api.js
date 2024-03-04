import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://backendfood-7068.onrender.com',
  withCredentials: true
})
