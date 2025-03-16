import React from "react";
import { FaRegComments } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoMdPaperPlane } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import ChartOne from "./charts/ChartOne";
import ChartTwo from "./charts/ChartTwo";
import ChartThree from "./charts/ChartThree";
import Image from "next/image";
import Shape1 from "@/../public/shape1.png";
import Shape2 from "@/../public/shape2.png";
import Shape3 from "@/../public/shape3.png";
import Shape4 from "@/../public/shape4.png";
import Shape8 from "@/../public/shape8.png";
import { useUser } from "@/actions/UserContext";
const Hero = () => {
  const user = useUser();

  if (!user) {
    window.location.href = "/";
    return null;
  }

  const username = user.user?.username || "Guest";

  return (
    <div className="max-w-[1000px] m-auto">
      <div className="flex gap-8 flex-col items-center justify-center w-full mb-2">
        <Image src={Shape1} width={120} height={120} alt="Shape1" />
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
        <div className="relative">
          <h1 className="text-5xl lg:text-7xl font-bold text-white">
            Welcome {username} {username === "Guest" ? "..." : ","}
          </h1>
          <Image
            src={Shape4}
            width={500}
            height={400}
            alt="Shape4"
            className="m-auto lg:absolute lg:right-0 lg:bottom-[-60px] opacity-80 lg:w-[500px] w-[300px]"
          />
        </div>
        <div className="w-full overflow-y-scroll  p-8 h-[400px] bg-zinc-800 rounded-lg border-[1px] border-zinc-950 mt-[40px] m-5">
          <p className="text-xs text-white">
            📊 <strong>Post Performance Analysis:</strong> Review your posts’
            engagement metrics (likes, comments, shares, etc.) to see which one
            had the highest interaction rate.
            <br />
            <strong>Identify Patterns:</strong> Was it a video, a high-quality
            image, or an interactive post like a poll? Understanding the type of
            content that resonates with your audience helps replicate success.
            <br />
            <br />
            📅 <strong>Optimizing Posting Time:</strong> Check when your
            audience is most active. Use your platform&quot;s analytics tools
            (like Facebook Insights, Instagram Analytics, etc.) to see what
            times your followers are online the most. Post during peak
            times—usually early mornings (7-9 AM) or evenings (6-9 PM) based on
            your audience&quot;s time zone.
            <br />
            <br />
            📈 <strong>Using Analytics to Increase Reach:</strong> Track post
            reach, engagement, and follower growth. Look at the types of posts
            with high reach and engagement. For instance, posts with high
            engagement could signal that your audience prefers specific topics,
            formats, or hashtags.
            <br />
            Use tools like Instagram Insights, Twitter Analytics, or Google
            Analytics to understand your audience&quot;s behavior and interests.
            Experiment with hashtags, geotags, and cross-promotions to increase
            your visibility.
            <br />
            <br />
            ❤️ <strong>Average Engagement Rate:</strong>
            <em>Formula:</em> (Total Engagements ÷ Total Followers) x 100 =
            Engagement Rate %. A typical engagement rate is around 1-5% for most
            accounts, but this can vary based on your niche, content, and
            audience size. Track this over time to understand whether engagement
            is increasing or decreasing. If it&quot;s low, consider adjusting
            content strategy or testing new content types.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-8">
          <FaRegComments
            className="text-white p-2 bg-purple-700 rounded-lg transform transition-all duration-300 hover:scale-110 hover:bg-purple-800 cursor-pointer"
            size="38"
          />
          <FaRegHeart
            className="text-white p-2 bg-red-700 rounded-lg transform transition-all duration-300 hover:scale-110 hover:bg-red-800 cursor-pointer"
            size="38"
          />
          <IoMdPaperPlane
            className="text-white p-2 bg-blue-700 rounded-lg transform transition-all duration-300 hover:scale-110 hover:bg-blue-800 cursor-pointer"
            size="38"
          />
          <IoShareSocialOutline
            className="text-white p-2 bg-orange-700 rounded-lg transform transition-all duration-300 hover:scale-110 hover:bg-orange-800 cursor-pointer"
            size="38"
          />
        </div>
      </div>
      <div className="flex flex-wrap flex-col gap-8 lg:flex-row mt-20 p-10">
        <div className="flex-[1.2]">
          <ChartOne />
        </div>
        <div className="flex-[1]">
          <ChartTwo />
        </div>
      </div>
      <div className="px-10">
        <ChartThree />
      </div>
      <h1 className="text-white bottom-[150px] right-[40px] fixed text-xl pacifico-regular">
        Use our AI Chat to See Stats...
      </h1>
      <Image
        src={Shape8}
        width={100}
        height={100}
        alt="Shape4"
        className="m-auto right-[40px] fixed bottom-[50px] opacity-80 lg:w-[100px] w-[100px]"
      />
    </div>
  );
};

export default Hero;
