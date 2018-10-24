import axios from 'axios';
import config from './config'

export default {
  getNewsAll: async () => {
    try {
      return await axios.get(`${config.baseURL}/news`)
    } catch (error) {
      console.log('SERVICE_GETNEWSALL: ', error)
    }
  },
  getOneNews: async (id) => {
    try {
      return await axios.get(`${config.baseURL}/news/${id}`)
    } catch (error) {
      console.log('SERVICE_GETONENEWSALL: ', error)
    }
  },
  deleteNews: async (id) => {
    try {
      return await axios.delete(`${config.baseURL}/news/${id}`)
    } catch (error) {
      console.log('SERVICE_DELETENEWS: ', error)
    }
  },
  addNews: async (data) => {
    try {
      return await axios.post(`${config.baseURL}/news/`, data)
    } catch (error) {
      console.log('SERVICE_ADDNEWS: ', error)
    }
  },
  editNews: async (data) => {
    try {
      return await axios.put(`${config.baseURL}/news/${data.id}/`,data)
    } catch (error) {
      console.log('SERVICE_EDITNEWS: ', error)
    }
  },
  getNews_only_user: async (data) => {
    try {
      return await axios.get(`${config.baseURL}/user/${data}/news`)
    } catch (error) {
      console.log('SERVICE_GETNEWSALL: ', error)
    }
  }
}