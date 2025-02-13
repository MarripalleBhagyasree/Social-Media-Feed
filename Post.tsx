"use client"

import { useState } from "react"

interface PostProps {
  post: {
    id: number
    username: string
    content: string
    likes: number
    comments: string[]
  }
  onLike: () => void
  onComment: (comment: string) => void
}

export default function Post({ post, onLike, onComment }: PostProps) {
  const [newComment, setNewComment] = useState("")

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      onComment(newComment)
      setNewComment("")
    }
  }

  return (
    <div className="border p-4 rounded">
      <h3 className="font-bold">{post.username}</h3>
      <p className="mt-2">{post.content}</p>
      <div className="mt-4 flex items-center">
        <button onClick={onLike} className="bg-blue-500 text-white px-2 py-1 rounded text-sm">
          Like ({post.likes})
        </button>
        <span className="ml-4">{post.comments.length} comments</span>
      </div>
      <div className="mt-4">
        {post.comments.map((comment, index) => (
          <p key={index} className="text-sm text-gray-600">
            {comment}
          </p>
        ))}
      </div>
      <form onSubmit={handleSubmitComment} className="mt-4 flex">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="flex-grow px-2 py-1 border rounded-l"
        />
        <button type="submit" className="bg-blue-500 text-white px-2 py-1 rounded-r">
          Post
        </button>
      </form>
    </div>
  )
}

