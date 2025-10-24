import axios from "axios";

// get all posts
// GET @ /api/posts
export const getPosts = async (url) => {
  try {
    const res = await axios.get(url, { withCredentials: true });
    return res.data;
  } catch (error) {
    const err = error.response?.data?.msg || "Failed to fetch posts.";
    console.error(err);
    throw new Error(err);
  }
};

// create a new post
// POST @ /api/posts
export const createPost = async (url, body) => {
  try {
    const res = await axios.post(url, body, { withCredentials: true });
    return res.data;
  } catch (error) {
    const err = error.response?.data?.msg || "Create post request failed.";
    alert(err);
    throw new Error(err);
  }
};
