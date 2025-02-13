"use client"

import { useState } from "react"
import Post from "./Post"

// Sample data structure for posts
const initialPosts = [
  {
    id: 1,
    username: "user1",
    content: "This is my first post!",
    likes: 5,
    comments: ["Great post!", "Welcome to the platform!"],
  },
  {
    id: 2,
    username: "user2",
    content: "Hello, world!",
    likes: 10,
    comments: ["Hello!", "Nice to meet you!"],
  },
]

export default function Feed() {
  const [posts, setPosts] = useState(initialPosts)

  const handleLike = (postId: number) => {
    setPosts(posts.map((post) => (post.id === postId ? { ...post, likes: post.likes + 1 } : post)))
  }

  const handleComment = (postId: number, comment: string) => {
    setPosts(posts.map((post) => (post.id === postId ? { ...post, comments: [...post.comments, comment] } : post)))
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onLike={() => handleLike(post.id)}
          onComment={(comment) => handleComment(post.id, comment)}
        />
      ))}
    </div>
  )
}

