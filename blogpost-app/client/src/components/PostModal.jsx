import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function CreatePostModal({ isOpen, onClose, onSubmit }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // small delay to allow mounting before fade-in
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const postContent = formData.get("content");
    onSubmit(postContent);
    e.target.reset();
    onClose();
  };

  // Keep the modal mounted slightly longer for fade-out
  if (!isOpen && !visible) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/60 flex justify-center items-center z-100 transition-opacity duration-100 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className="bg-neutral-900 text-gray-100 w-full max-w-lg rounded-2xl shadow-2xl p-6 transition-transform duration-300 transform"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Create Post</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-neutral-800 transition"
          >
            <X className="w-5 h-5 text-gray-400 hover:text-gray-200" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <textarea
            name="content"
            placeholder="What's on your mind?"
            className="w-full h-40 bg-neutral-800 text-gray-100 placeholder-gray-400 resize-none rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          {/* Footer */}
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
