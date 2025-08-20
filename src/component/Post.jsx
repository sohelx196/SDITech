import React from "react";
import { FaRegComment, FaRegHeart } from "react-icons/fa";

function Post({ profileImg, username, time, text, postImg }) {
  return (

    <div className=" text-white p-4 rounded-xl shadow mb-6 border border-gray-700">
      {/* Top Section */}
      <div className="flex items-center mb-3">
        <img
          src={profileImg}
          alt={username}
          className="h-10 w-10 rounded-full object-cover mr-3"
        />
        <div className="flex-1">
          <span className="font-semibold">{username}</span>
          <span className="text-gray-400 text-sm ml-2">· {time}</span>
        </div>
      </div>

      {/* Text */}
      <p className="text-sm mb-3">{text}</p>

      {/* Post Image */}
      {postImg && (
        <img
          src={postImg}
          alt="post"
          className="w-full rounded-lg mb-3 border border-gray-800"
        />
      )}

      {/* Actions */}
      <div className="flex items-center space-x-6 text-gray-400">
        <button className="flex items-center space-x-2 hover:text-blue-400 transition">
          <FaRegComment className="h-5 w-5" />
          <span className="text-sm">Comment</span>
        </button>
        <button className="flex items-center space-x-2 hover:text-red-400 transition">
          <FaRegHeart className="h-5 w-5" />
          <span className="text-sm">Like</span>
        </button>
      </div>
    </div>
  );
}

export default Post;
