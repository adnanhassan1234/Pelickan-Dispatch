import axios from "axios";
let baseUrl = "https://api.test.pelickandespatch.com:8443/companyuser";

const register = async (formData) => {
  const response = await axios.post(`${baseUrl}/register`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};
const login = async (formData) => {
  const response = await axios.post(`${baseUrl}/login`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  if (response.data) {
    localStorage.setItem("token", response.data.jwt);
  }
  return response.data;
};
const verifyEmail = async (data) => {
  const response = await axios.post(`${baseUrl}/send-email`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
};

const forgetPass = async (formdata) => {
  const response = await axios.post(`${baseUrl}/forgot_password`, formdata, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
const changePass = async (formdata) => {
  const response = await axios.post(`${baseUrl}/change_password`, formdata, {
    headers: {
      "Content-Type": "multipart/form-data",
      authorization: formdata.token,
    },
  });

  return response.data;
};
const loadUser = async (data) => {
  const response = await axios.post(`${baseUrl}/get-user`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      authorization: localStorage.getItem("token"),
    },
  });
  return response.data;
};

const emailVerified = async (data) => {
  const response = await axios.post(`${baseUrl}/verified-email`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      authorization: data.token,
    },
  });
  return response.data;
};
const logOut = () => {
  localStorage.removeItem("token");
};
const authFunc = {
  register,
  logOut,
  login,
  verifyEmail,
  loadUser,
  forgetPass,
  changePass,
  emailVerified,
};
export default authFunc;
