import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { createPost } from "../api/postsRequest.js";

export default function CreatePostModal({ isOpen, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) requestAnimationFrame(() => setVisible(true));
    else setVisible(false);
  }, [isOpen]);

  const handleSubmit = async (e) => {
    const formData = new FormData(e.target);
    const content = formData.get("content");

    try {
      const url = "/api/posts";
      const body = { content };
      const res = await createPost(url, body);
      console.log("Post created:", res.data);
      e.target.reset();
      onClose();
    } catch (err) {
      console.error("Failed to create post:", err.response?.data || err);
    }
  };

  if (!isOpen && !visible) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/30 flex justify-center items-center z-50 transition-opacity duration-100 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className="bg-white text-gray-900 w-full max-w-lg rounded-2xl shadow-2xl p-6 transition-transform duration-300 transform"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Create Post</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition"
          >
            <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <textarea
            name="content"
            placeholder="What's on your mind?"
            className="w-full h-40 bg-gray-50 text-gray-900 placeholder-gray-500 resize-none rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white font-medium px-5 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
