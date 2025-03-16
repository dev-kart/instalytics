"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";
import { BsArrowRight } from "react-icons/bs";
import { FaRegComments, FaRegHeart } from "react-icons/fa6";
import { IoMdPaperPlane } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import Shape2 from "@/../public/shape2.png";
import Shape3 from "@/../public/shape3.png";
import Shape4 from "@/../public/shape4.png";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { getAccessToken } from "@/utils/auth";

interface FormValues {
  username: string;
  email: string;
  password: string;
}

interface ErrorResponse {
  message: string;
}

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const router = useRouter()
  const getToken = getAccessToken()
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    if (getToken) {
      window.location.href = "/";
    }
  }, [getToken]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/v1/auth/register`, data);
      console.log(response.data);
      toast.success("Registration successful! Login", { position: "top-center" });
      router.push("/login")
    } catch (error: unknown) {
      const axiosError = error as AxiosError<ErrorResponse>;
      const errorMessage = axiosError?.response?.data?.message || "Something went wrong!";
      toast.error(errorMessage, { position: "top-center" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <Image
        src={Shape2}
        width={120}
        height={120}
        alt="Shape2"
        className="absolute right-0 top-40 hidden lg:block"
      />
      <Image
        src={Shape3}
        width={120}
        height={120}
        alt="Shape3"
        className="absolute left-0 top-[400px] hidden lg:block"
      />
      <div className="w-full h-screen bg-black flex items-center justify-center">
        <div className="w-full max-w-[480px] flex flex-col gap-5 m-auto p-10">
          <div className="relative">
            <h1 className="text-white text-4xl font-bold">Join the Revolution!</h1>
            <Image
              src={Shape4}
              width={500}
              height={400}
              alt="Shape4"
              className="m-auto lg:absolute lg:left-0 opacity-80 lg:w-[200px] w-[100px]"
            />
          </div>

          <p className="text-zinc-400 mt-8 text-sm">
            Sign up to unlock the power of social media analytics and take control of your growth.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
            <div>
              <input
                {...register("username", { required: "Username is required" })}
                type="text"
                maxLength={30}
                placeholder="Username"
                className="w-full p-2 rounded-lg bg-zinc-900 text-white transition-all hover:bg-zinc-800 focus:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>
              )}
            </div>
            <div>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                maxLength={45}
                placeholder="Email"
                className="w-full p-2 rounded-lg bg-zinc-900 text-white transition-all hover:bg-zinc-800 focus:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                type="password"
                maxLength={30}
                placeholder="Password"
                className="w-full p-2 rounded-lg bg-zinc-900 text-white transition-all hover:bg-zinc-800 focus:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-violet-600"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="transition w-full p-2 rounded-lg mt-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold flex flex-wrap items-center justify-center gap-2 hover:gap-4"
              disabled={loading}
            >
              {loading ? "Loading..." : "Get Started"} <BsArrowRight />
            </button>
          </form>
          <p className="text-zinc-400 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-white hover:text-violet-400 transition-colors">
              Login
            </Link>
          </p>

          <div className="flex flex-wrap items-center justify-between gap-8">
            <FaRegComments
              className="text-white p-2 bg-purple-700 rounded-lg transition-all hover:scale-110 hover:bg-purple-600 cursor-pointer"
              size="38"
            />
            <FaRegHeart
              className="text-white p-2 bg-red-700 rounded-lg transition-all hover:scale-110 hover:bg-red-600 cursor-pointer"
              size="38"
            />
            <IoMdPaperPlane
              className="text-white p-2 bg-blue-700 rounded-lg transition-all hover:scale-110 hover:bg-blue-600 cursor-pointer"
              size="38"
            />
            <IoShareSocialOutline
              className="text-white p-2 bg-orange-700 rounded-lg transition-all hover:scale-110 hover:bg-orange-600 cursor-pointer"
              size="38"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
