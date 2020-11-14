import axios from "axios";

export const olango = axios.create({
  baseURL: "/api/v1",
});

export const setAuthorizationHeader = async (token) => {
  olango.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
