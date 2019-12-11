import axios from "axios";

const token = localStorage.getItem('authenticationToken');
const Api = axios.create({
  baseURL: "https://obscure-lowlands-95572.herokuapp.com/",
  timeout: 5000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "authorization": token ? token : ""
  }
});

export default Api;
