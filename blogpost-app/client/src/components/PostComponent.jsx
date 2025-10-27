export default function Post({ post }) {
  const { userId, content, createdAt } = post;

  const profilePic =
    userId.profilePic ||
    "https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff";

  const fullName = userId.fullName || "User";

  const formattedDate = new Date(createdAt).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="bg-white w-full max-w-lg rounded-2xl shadow-md p-5 mb-6">
      {/* Header - User info */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={profilePic}
          alt={fullName}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-gray-900">{fullName}</p>
          <p className="text-sm text-gray-500">{formattedDate}</p>
        </div>
      </div>

      {/* Post content */}
      <p className="text-gray-800 whitespace-pre-line">{content}</p>
    </div>
  );
}
