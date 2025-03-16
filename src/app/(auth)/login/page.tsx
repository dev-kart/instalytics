"use client"
import Header from "@/components/core/Header";
import React, { useEffect, useState } from "react";
import Shape2 from "@/../public/shape2.png";
import Shape3 from "@/../public/shape3.png";
import Shape4 from "@/../public/shape4.png";
import Image from "next/image";
import Link from "next/link";
import { FaRegComments, FaRegHeart } from "react-icons/fa6";
import { IoMdPaperPlane } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import Footer from "@/components/core/Footer";
import { BsArrowRight } from "react-icons/bs";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAccessToken, setTokens } from "@/utils/auth";

interface LoginFormInputs {
  email: string;
  password: string;
}

interface ErrorResponse {
  message: string;
}


const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const getToken = getAccessToken()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (getToken) {
      window.location.href = "/";
    }
  }, [getToken]);

  const onSubmit = async (data: LoginFormInputs) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/auth/login`,
        data,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response)
      toast.success("Login successful!");
      setTokens(`${response.data.token}` , "")

    } catch (error: unknown) {
      const axiosError = error as AxiosError<ErrorResponse>;

      const errorMessage =
      axiosError.response?.data?.message || "Something went wrong. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

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
            <h1 className="text-white text-4xl font-bold">
              Dive into Your Social Success!
            </h1>
            <Image
              src={Shape4}
              width={500}
              height={400}
              alt="Shape4"
              className="m-auto lg:absolute lg:left-0 opacity-80 lg:w-[200px] w-[100px]"
            />
          </div>

          <p className="text-zinc-400 mt-8 text-sm">
            Unlock insights, track trends, and master your social media game.
            Let me know if you want more flair or a different style!
          </p>

          <form
            className="flex flex-col gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              {...register("email", { required: "Email is required" })}
              type="text"
              placeholder="Email"
              maxLength={40}
              className={`w-full p-2 rounded-lg bg-zinc-900 text-white transition-all duration-300 hover:bg-zinc-800 focus:outline-none focus:ring-2 ${
                errors.email ? "focus:ring-red-600" : "focus:ring-violet-600"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              placeholder="Password"
              maxLength={25}
              className={`w-full p-2 rounded-lg bg-zinc-900 text-white transition-all duration-300 hover:bg-zinc-800 focus:outline-none focus:ring-2 ${
                errors.password ? "focus:ring-red-600" : "focus:ring-violet-600"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            <button 
              className="transition w-full p-2 rounded-lg mt-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold flex flex-wrap items-center justify-center gap-2 hover:gap-4"
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"} <BsArrowRight />
            </button>
          </form>
          <p className="text-zinc-400 text-sm">
            Want an account?{" "}
            <Link href="/register" className="text-white">
              Register
            </Link>
          </p>

          <div className="flex flex-wrap items-center justify-between gap-8">
            <FaRegComments
              className="text-white p-2 bg-purple-700 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-purple-600 cursor-pointer"
              size="38"
            />
            <FaRegHeart
              className="text-white p-2 bg-red-700 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-red-600 cursor-pointer"
              size="38"
            />
            <IoMdPaperPlane
              className="text-white p-2 bg-blue-700 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-blue-600 cursor-pointer"
              size="38"
            />
            <IoShareSocialOutline
              className="text-white p-2 bg-orange-700 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-orange-600 cursor-pointer"
              size="38"
            />
          </div>
        </div>
      </div>
      <p className="transition absolute bottom-0 left-[40px] text-white text-9xl font-semibold pacifico-regular opacity-50 hover:opacity-0">
        login.
      </p>
      <div>
        <Footer />
      </div>
      <ToastContainer position="top-center" />
    </>
  );
};

export default LoginPage;
