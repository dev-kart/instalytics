import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Heart, MessageCircle, Trash } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { getAccessToken } from "@/utils/auth";

interface Post {
  _id: string | null;
  comments: [];
  comments_count: number;
  content: string;
  created_at: string;
  likes: number;
  post_type: string;
  updated_at: string;
  username: string;
}

const GetPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = getAccessToken();
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/v1/posts/all`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        setPosts(response.data);
      } catch (err) {
        setError("Failed to load posts");
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleDeletePost = async (postId: string | null) => {
    if (!postId) return;

    // Add confirmation dialog
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (!confirmDelete) return; // Exit if the user cancels

    try {
        const token = getAccessToken();
        await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/v1/post/delete/${postId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        setPosts(posts.filter(post => post._id !== postId));
    } catch (err) {
        console.error("Error deleting post:", err);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6 p-4">
      {posts.map((post, index) =>
        <Card key={post._id || index} className="w-full">
          <CardHeader className="flex flex-row items-center space-x-4 p-4">
            <Avatar>
              <AvatarFallback>
                {post.username[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">
                {post.username}
              </p>
              <p className="text-sm text-gray-500">
                {formatDistanceToNow(new Date(post.created_at), {
                  addSuffix: true
                })}
              </p>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <Image
              src={post.content}
              alt={`Post by ${post.username}`}
              className="w-full object-cover max-h-[500px]"
              width={500}
              height={500}
              layout="responsive"
            />
          </CardContent>

          <CardFooter className="p-4 flex justify-between">
            <div className="flex space-x-4">
              <Button variant="ghost" className="flex items-center space-x-1">
                <Heart className="h-5 w-5" />
                <span>
                  {post.likes}
                </span>
              </Button>
              <Button variant="ghost" className="flex items-center space-x-1">
                <MessageCircle className="h-5 w-5" />
                <span>
                  {post.comments_count}
                </span>
              </Button>
              <Button variant="secondary" className="flex items-center space-x-1" onClick={() => handleDeletePost(post._id)}>
                <Trash className="h-5 w-5" />
                <span>Delete</span>
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default GetPosts;
