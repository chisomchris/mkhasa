import axios from "axios";
import { env } from "./env";

export const axiosClient = axios.create({
  baseURL: env.NEXT_PUBLIC_BASE_URL,
});

// export const axiosServer = axios.create({
//   baseURL: env.API_BASE_URL,
// });
