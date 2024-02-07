import { toast } from "react-toastify";
import axios from "axios";
export const register = async (user) => {
  const URL = `https://support-desk-back.onrender.com/api/users`;
  // api/users
  try {
    const res = await axios.post(URL, user);
    if (res.data) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
  } catch (error) {
    throw { message: error?.response?.data?.message };
  }
};

export const login = async (user) => {
  const URL = `https://support-desk-back.onrender.com/api/users/login`;
  // /api/users/login
  try {
    const res = await axios.post(URL, user);
    if (res.data) {
      localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
  } catch (error) {
    throw { message: error?.response?.data?.message };
  }
};
export const authService = { register, login };
