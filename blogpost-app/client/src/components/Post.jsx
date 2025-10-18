
const UserPost = ({ avatar, name, timestamp, content }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-4 max-w-md mx-auto">
      {/* Header: avatar + name + timestamp */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{timestamp}</p>
        </div>
      </div>

      {/* Content */}
      <p className="text-gray-700 leading-relaxed">{content}</p>
    </div>
  );
};

export default UserPost;
