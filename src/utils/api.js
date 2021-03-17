import axios from "axios"

const API = {
  request(url, data = {}, method = "get", headers = {}) {
    const config = {
      url,
      method,
      headers,
    }
    if (method === "get") {
      config.params = data
    } else {
      config.data = data
    }

    return axios(config)
  },
  get({ url, query, id }) {
    return this.request(id ? `${url}/${id}` : url, query)
  },
  post({ url, data }) {
    return this.request(url, data, "post")
  },
  update({ url, id, data }) {
    return this.request(`${url}/${id}`, data, "post")
  },
  delete({ url, id, data }) {
    return this.request(`${url}/${id}`, data, "delete")
  },
}

export default API
