// src/components/Comment.js

import React, { useState } from 'react';

// Recursive component to render comments and their replies
const Comment = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);

  const handleToggleReplies = () => {
    setShowReplies(!showReplies);
  };

  return (
    <div className="ml-4 border-l-2 border-gray-300 pl-4 mb-4 flex items-start gap-2 bg-white p-3 rounded-md shadow-sm">
      <div className="flex-shrink-0 p-1">
        <lord-icon
          src="https://cdn.lordicon.com/hrjifpbq.json"
          trigger="hover"
          style={{ width: "24px", height: "24px", }}
        ></lord-icon>
      </div>
      <div>
        <p className="text-gray-800 font-semibold">{comment.name}:</p>
        <p className="text-gray-600">{comment.text}</p>
        {comment.replies && comment.replies.length > 0 && (
          <div className="mt-2">
            <button
              className="text-blue-500 focus:outline-none"
              onClick={handleToggleReplies}
            >
              {showReplies ? 'Hide Replies' : 'Show Replies'}
            </button>
            {showReplies && (
              <div className="mt-2">
                {comment.replies.map((reply, index) => (
                  <Comment key={index} comment={reply} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
