import Axios from "axios";

// create an axios instance
const service = Axios.create({
  baseURL: process.env.VUE_APP_API_ENDPOINT // url = base url + request url
});

const RESOURCE_NAME = "/urldata";

export default {
  getAll() {
    return Axios.get(RESOURCE_NAME);
  },

  get(id) {
    return Axios.get(`${RESOURCE_NAME}/${id}`);
  },

  create(data) {
    return service.post(RESOURCE_NAME, data);
  },

  update(id, data) {
    return Axios.put(`${RESOURCE_NAME}/${id}`, data);
  },

  delete(id) {
    return Axios.delete(`${RESOURCE_NAME}/${id}`);
  }
};
