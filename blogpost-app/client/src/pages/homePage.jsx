import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar.jsx";
import Post from "../components/PostComponent.jsx";
import CreatePostModal from "../components/CreatePostModal.jsx";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  // Fetch posts on page load
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/api/posts", { withCredentials: true });
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };
    fetchPosts();
  }, [isModalOpen]);

  // Handle new post creation
  const handleCreatePost = async (content) => {
    try {
      const res = await axios.post(
        "/api/posts",
        { content },
        { withCredentials: true }
      );

      // Prepend new post to the list
      setPosts((prev) => [res.data, ...prev]);
      setIsModalOpen(false);
    } catch (err) {
      console.error("Error creating post:", err);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-6 pt-20">
        {/* Create Post Button */}
        <div className="max-w-lg mx-auto mb-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-blue-600 text-white font-medium py-2.5 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Write a post
          </button>
        </div>

        {/* Create Post Modal */}
        <CreatePostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleCreatePost}
        />

        {/* Posts Feed */}
        <div className="flex flex-col items-center">
          {posts.length > 0 ? (
            posts.map((post) => <Post key={post._id} post={post} />)
          ) : (
            <p className="text-gray-500 mt-10">No posts yet.</p>
          )}
        </div>
      </div>
    </>
  );
}
