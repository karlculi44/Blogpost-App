import { Heart, MessageCircle } from "lucide-react";

export default function Post() {
  const post = {
    userId: {
      firstName: "Karl",
      surname: "Culi",
      profilePic:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=500&q=80",
    },
    content:
      "Just finished building my first React component! 🚀 Loving Tailwind so far — styling is actually fun now!",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80",
    likes: ["user1", "user2", "user3"],
    comments: [{ text: "Awesome work!" }, { text: "Looks great, keep going!" }],
    createdAt: "2025-10-23T12:00:00Z",
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 max-w-lg mx-auto my-6">
      {/* Author Info */}
      <div className="flex items-center mb-3">
        <img
          src={post.userId.profilePic}
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover mr-3"
        />
        <div>
          <h3 className="font-semibold text-gray-900">
            {post.userId.firstName} {post.userId.surname}
          </h3>
          <p className="text-xs text-gray-500">
            {new Date(post.createdAt).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Content */}
      <p className="text-gray-800 mb-3 whitespace-pre-wrap">{post.content}</p>

      {post.image && (
        <div className="mb-3">
          <img
            src={post.image}
            alt="Post"
            className="rounded-xl w-full max-h-[400px] object-cover"
          />
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between text-gray-600 mt-2">
        <button className="flex items-center gap-1 hover:text-red-500 transition">
          <Heart size={18} />
          <span>{post.likes.length}</span>
        </button>

        <button className="flex items-center gap-1 hover:text-blue-500 transition">
          <MessageCircle size={18} />
          <span>{post.comments.length}</span>
        </button>
      </div>
    </div>
  );
}
