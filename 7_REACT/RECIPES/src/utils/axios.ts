import axios from "axios";
import { HOST_API } from "./config.ts";

export const Axios = axios.create({ baseURL: HOST_API });
