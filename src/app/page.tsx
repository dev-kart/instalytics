"use client"
import Footer from "@/components/core/Footer";
import Header from "@/components/core/Header";
import Hero from "@/components/core/Hero";
import PostHero from "@/components/core/PostHero";
import Testimonials from "@/components/core/Testimonials";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAccessToken } from "@/utils/auth";

export default function Home() {

  const token = getAccessToken();
  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.push("/profile");
    }
  }, [token, router]);

  return (
    <body className="bg-black w-full h-full">
      <Header />
      <Hero />
      <PostHero />
      <Testimonials />
      <Footer />
    </body>
  );
}
