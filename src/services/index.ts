import axios from "axios";

export const API = axios.create({
  baseURL: "https://corebiz-test.herokuapp.com/api/v1",
});
