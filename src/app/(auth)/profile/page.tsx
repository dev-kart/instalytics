"use client"
import React, { useEffect } from "react";
import PopupChat from "./Popup";
import Header from "@/components/core/Header";
import Content from "./Content";
import { getAccessToken } from "@/utils/auth";
import { useRouter } from "next/navigation";

const Page = () => {
  const token = getAccessToken();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/");
    }
  }, [token, router]);


  return (
    <>
      <Header />
      <Content />
      <PopupChat />
    </>
  );
};

export default Page;
