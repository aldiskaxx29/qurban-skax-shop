import axios from "axios";

const http = (token) => {
  const headers = {};

  if(token){
    headers.authorization = token;
  }

  return axios.create({
    headers,
    baseURL: import.meta.env.VITE_API_URL
  })
} 

export default http;