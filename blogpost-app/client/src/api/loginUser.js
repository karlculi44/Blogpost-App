import axios from 'axios';

export const loginUser = async (url, body) => {
  try {
    const res = await axios.post(url, body);

    return res.data;
  } catch (error) {
    const err = error.response?.data?.msg || "Login request failed.";
    console.error("Axios Error:", err);
    throw new Error(err);
  }
};