import HTTP from "../http";

const resource = "pokemon/";

export default {
  getList: (limit = 0, offset = 0) =>
    HTTP.get(`${resource}?limit=${limit}&offset=${offset}`),
  getByName: (name) => HTTP.get(`${resource}${name}`),
};
