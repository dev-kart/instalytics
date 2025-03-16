"use client";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { FaRegComments, FaRegHeart } from "react-icons/fa";
import { IoMdPaperPlane } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import Shape7 from "@/../public/shape7.png";
import Image from "next/image";
const reviews = [
  {
    name: "Analytics Dashboard",
    username: "@analytics",
    body: "Track your social media performance with our comprehensive analytics dashboard. Monitor engagement, reach, and growth.",
    icon: (
      <FaRegComments
        className="text-white p-2 bg-purple-700 rounded-lg"
        size="38"
      />
    )
  },
  {
    name: "Engagement Metrics",
    username: "@engagement",
    body: "Measure audience interactions and engagement rates across all your social media platforms in real-time.",
    icon: (
      <FaRegHeart className="text-white p-2 bg-red-700 rounded-lg" size="38" />
    )
  },
  {
    name: "Content Strategy",
    username: "@strategy",
    body: "Optimize your content strategy with data-driven insights and recommendations for better performance.",
    icon: (
      <IoMdPaperPlane
        className="text-white p-2 bg-blue-700 rounded-lg"
        size="38"
      />
    )
  },
  {
    name: "Audience Insights",
    username: "@audience",
    body: "Understand your audience demographics and behavior patterns to create more targeted content.",
    icon: (
      <IoShareSocialOutline
        className="text-white p-2 bg-orange-700 rounded-lg"
        size="38"
      />
    )
  },
  {
    name: "Growth Analytics",
    username: "@growth",
    body: "Monitor your account growth and identify trends that drive follower acquisition and retention.",
    icon: (
      <FaRegComments
        className="text-white p-2 bg-purple-700 rounded-lg"
        size="38"
      />
    )
  },
  {
    name: "Performance Data",
    username: "@performance",
    body: "Access detailed performance metrics and generate comprehensive reports for your social media accounts.",
    icon: (
      <FaRegHeart className="text-white p-2 bg-red-700 rounded-lg" size="38" />
    )
  }
];

const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({
  icon,
  name,
  username,
  body
}: {
  icon: React.ReactNode;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-[320px] cursor-pointer overflow-hidden rounded-xl border p-6",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15] bg-zinc-950",
        "mx-4"
      )}
    >
      <div className="flex flex-row items-center gap-4 text-white">
        <div className="flex-shrink-0">{icon}</div>
        <div className="flex flex-col">
          <figcaption className="text-base font-semibold text-white">
            {name}
          </figcaption>
          <p className="text-sm text-gray-400">{username}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-sm leading-relaxed text-gray-300">
        {body}
      </blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden bg-black py-8">
      <Marquee pauseOnHover className="[--duration:40s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
    </div>
  );
}

const Testimonials = () => {
  return (
    <div className="bg-black w-full pt-20">
      <div id="features" className="pt-[120px]"></div>
      <div className="relative max-w-[480px] m-auto">
        <h1 className="text-white text-3xl lg:text-4xl font-semibold text-center">
          Features That We Love
        </h1>
        <Image
          src={Shape7}
          width={200}
          height={200}
          alt="Shape7"
          className="absolute right-20 lg:right-0 rotate-[20deg] z-10"
        />
      </div>
      <MarqueeDemo />
    </div>
  );
};

export default Testimonials;
