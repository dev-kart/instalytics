"use client"
import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import { getAccessToken } from '@/utils/auth';

// Define an interface for the expected error response structure
interface ErrorResponse {
    message: string;
}

const AddPost: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async () => {
    if (!image) {
      toast.error("Please select an image");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('image', image);
    formData.append('type', 'post');

    try {
        const token = getAccessToken()
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/post/create`,
        formData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
    const responseData = response.data
    console.log(responseData)
      toast.success("Post created successfully");
      
      setOpen(false);
      setImage(null);
    } catch (error: unknown) {
      const axiosError = error as AxiosError<ErrorResponse>;
      toast.error(axiosError.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Post</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create New Post</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="image">Upload Image</Label>
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full cursor-pointer rounded-lg border border-gray-200 p-2"
              />
            </div>
            
            {image && (
              <div className="relative aspect-video w-full">
                <Image
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="rounded-lg object-cover w-full h-full"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            )}
            
            <Button 
              onClick={handleSubmit} 
              disabled={loading} 
              className="w-full"
            >
              {loading ? "Creating..." : "Create Post"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddPost;