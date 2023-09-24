import {
    BASE_URL_REST,
  } from "../env.json";
  import axios from "axios";

  export const api = axios.create({
    baseURL: BASE_URL_REST,
    timeout: 150000,
  });