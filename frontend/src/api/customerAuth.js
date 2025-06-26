import axios from "axios";

const API = "http://localhost:4000/api";

export const verifyTokenRequest = () =>
  axios.get(`${API}/profileCustomer`, { withCredentials: true });

export const loginRequest = (user) =>
  axios.post(`${API}/loginCustomer`, user, {
    withCredentials: true,
  });

export const logoutRequest = () =>
  axios.post(`${API}/logout`, null, {
    withCredentials: true,
  });
