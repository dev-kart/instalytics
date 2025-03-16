import Image from "next/image";
import React from "react";
import Logo from "@/../public/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="border-t-[1px] border-t-zinc-900 mt-8">
      <div className="max-w-[1200px] m-auto p-10 sm:p-10">
        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-8 sm:gap-4">
          <div className="flex flex-col gap-4">
            <Image src={Logo} alt="Logo" width={120} height={120} />
            <p className="text-white text-sm max-w-[250px]">
              Scale your social media with InstaLytics.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-white">General</h1>
            <Link
              href="/terms"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
