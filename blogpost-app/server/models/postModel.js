import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      trim: true,
      maxlength: 2000,
    },
    image: {
      type: String, // URL for image if included
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        text: {
          type: String,
          required: true,
          trim: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

// When you populate user info, you can still have a placeholder for profilePic
postSchema.virtual("userInfo", {
  ref: "User",
  localField: "userId",
  foreignField: "_id",
  justOne: true,
});

postSchema.set("toObject", { virtuals: true });
postSchema.set("toJSON", { virtuals: true });

// Default placeholder for users without a profile pic
const DEFAULT_AVATAR =
  "https://ui-avatars.com/api/?name=User&background=0D8ABC&color=fff";

postSchema.methods.getPopulatedUser = function (user) {
  return {
    firstName: user?.firstName || "Unknown",
    surname: user?.surname || "",
    profilePic: user?.profilePic || DEFAULT_AVATAR,
  };
};

export default mongoose.model("Post", postSchema);
