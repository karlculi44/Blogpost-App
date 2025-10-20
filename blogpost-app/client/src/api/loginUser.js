import axios from 'axios';

export const loginUser = async (url, body) => {
  try {
    const res = await axios.post(url, body);
    console.log('res', res);
    console.log('res data', res.data);

    return res.data;
  } catch (error) {
    const err = error.response?.data?.msg || "Login request failed.";
    console.error("Axios Error:", msg);
    throw new Error(err);
  }
};