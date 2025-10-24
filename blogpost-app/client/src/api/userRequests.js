import axios from "axios";

// get user profile
// @ /api/auth/profile
export const getProfile = async () => {
  try {
    const res = await axios.get("/api/auth/profile", {
      withCredentials: true, // include cookies
    });
    if (!res) throw new Error("No token provided, authorization denied.");
    return res.data;
  } catch (error) {
    console.error(
      "Error fetching profile:",
      error.response?.data?.msg || error.message
    );
  }
};

// logout user
// POST @ /api/auth/logout
export const logoutUser = async () => {
  try {
    const logout = await axios.post(
      "/api/auth/logout",
      {},
      { withCredentials: true }
    );
    console.log(logout.data.msg);
    localStorage.removeItem("token");
    return logout.data;
  } catch (error) {
    const err = error.response?.data?.msg || "Logout request failed.";
  }
};

// login user
// POST @ /api/auth/login
export const loginUser = async (url, body) => {
  try {
    const res = await axios.post(url, body, { withCredentials: true });
    return res.data;
  } catch (error) {
    const err = error.response?.data?.msg || "Login request failed.";
    alert(err);
    throw new Error(err);
  }
};

// signup user
// POST @ /api/auth/signup
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
