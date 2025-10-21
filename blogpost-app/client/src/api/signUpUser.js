import axios from "axios";

export const signUpUser = async (url, body) => {
  try {
    const res = await axios.post(url, body);
    const user = res;
    return user.data;
  } catch (error) {
    const err = error.response?.data?.msg || "Failed to create a user.";
    console.error("Axios Error:", err);
    throw new Error(err);
  }
};