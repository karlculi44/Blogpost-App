import { Heart, MessageCircle } from "lucide-react";

export default function Post({ post }) {
  const createdAt = new Date(post.createdAt).toLocaleString();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 max-w-lg w-full mx-auto mb-6">
      {/* Author Info */}
      <div className="flex items-center mb-3">
        <img
          src={
            post.userId.profilePic ||
            "https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff"
          }
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover mr-3"
        />
        <div>
          <h3 className="font-semibold text-gray-900">
            {post.userId.firstName} {post.userId.surname}
          </h3>
          <p className="text-xs text-gray-500">{createdAt}</p>
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
          <span>{post.likes?.length || 0}</span>
        </button>

        <button className="flex items-center gap-1 hover:text-blue-500 transition">
          <MessageCircle size={18} />
          <span>{post.comments?.length || 0}</span>
        </button>
      </div>
    </div>
  );
}
