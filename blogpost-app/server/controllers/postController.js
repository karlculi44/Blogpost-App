import Post from "../models/postModel.js";
/**
 * @desc   Create a new post
 * @route  POST /api/posts
 * @access Private
 */
export const createPost = async (req, res) => {
  try {
    const { content, image = null } = req.body;

    if (!content?.trim()) {
      return res.status(400).json({ msg: "Post content cannot be empty." });
    }

    const savedPost = await Post.create({
      userId: req.user.id,
      content,
      image,
    });

    await savedPost.populate("userId", "firstName surname profilePic");

    const postWithAvatar = {
      ...savedPost.toObject(),
      userId: {
        ...savedPost.userId.toObject(),
        profilePic:
          savedPost.userId.profilePic ||
          "https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff",
      },
    };

    res.status(201).json(postWithAvatar);
  } catch (err) {
    console.error("Error creating post:", err);
    res.status(500).json({ error: "Server error while creating post." });
  }
};

/**
 * @desc   Get all posts
 * @route  GET /api/posts
 * @access Private
 */
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("userId", "firstName surname profilePic")
      .sort({ createdAt: -1 });

    const postsWithAvatar = posts.map((p) => ({
      ...p.toObject(),
      userId: {
        ...p.userId.toObject(),
        profilePic:
          p.userId.profilePic ||
          "https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff",
      },
    }));
    console.log(postsWithAvatar);
    res.status(200).json(postsWithAvatar);
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).json({ error: "Server error while fetching posts." });
  }
};

/**
 * @desc   Like or unlike a post
 * @route  PUT /api/posts/:id/like
 * @access Private
 */
export const toggleLikePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.user.id;

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ msg: "Post not found." });

    // Check if user already liked
    const alreadyLiked = post.likes.includes(userId);

    if (alreadyLiked) {
      // Unlike
      post.likes = post.likes.filter((id) => id.toString() !== userId);
    } else {
      // Like
      post.likes.push(userId);
    }

    await post.save();

    res.status(200).json({
      msg: alreadyLiked ? "Post unliked." : "Post liked.",
      likesCount: post.likes.length,
      likedByUser: !alreadyLiked,
    });
  } catch (err) {
    console.error("Error toggling like:", err);
    res.status(500).json({ error: "Server error while liking post." });
  }
};
