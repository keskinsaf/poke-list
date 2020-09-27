import axios from "axios";

const HTTP = axios.create({
  baseURL: "https://pokeapi.co/api/v2/", // base url to make requests to open api
  timeout: 4000, // 4 secs
});

export default HTTP;
