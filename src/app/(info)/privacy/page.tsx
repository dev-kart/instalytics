import Footer from "@/components/core/Footer";
import Header from "@/components/core/Header";
import React from "react";

const privacy = () => {
  return (
    <>
      <Header />
      <br />
      <div className="max-w-[800px] text-white mt-[120px] m-auto p-10">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-300 mb-4">Effective Date: January 3, 2025</p>

        <p className="mb-6">
          Thank you for choosing InstaLytics (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). This Privacy Policy explains how we collect, use, share, and protect your information when you use our social media analytics tool (&quot;Tool&quot;). Your privacy is important to us, and we are committed to being transparent about our practices.
        </p>

        <p className="mb-6">
          By accessing or using InstaLytics, you agree to the terms outlined in this Privacy Policy. If you do not agree, please refrain from using our Tool.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
        <p className="mb-4">We collect the following types of information when you use InstaLytics:</p>

        <h3 className="text-xl font-semibold mt-6 mb-3">1.1 Personal Information</h3>
        <p className="mb-3">When you register or log in to use InstaLytics, we may collect the following:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Name</li>
          <li>Email address</li>
          <li>Password (encrypted)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">1.2 Social Media Data</h3>
        <p className="mb-3">To provide analytics, you may authorize InstaLytics to access your social media accounts. This may include:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Profile information (name, username, profile picture, bio)</li>
          <li>Post engagement metrics (likes, comments, shares)</li>
          <li>Audience demographics</li>
          <li>Follower count and growth trends</li>
          <li>Post performance and historical data</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">1.3 Usage Data</h3>
        <p className="mb-3">When you use InstaLytics, we collect information about how you interact with it, including:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>IP address</li>
          <li>Device information (browser type, operating system, device model)</li>
          <li>Log data (timestamps, clicks, features accessed)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">1.4 Cookies and Tracking Technologies</h3>
        <p className="mb-4">We use cookies, pixels, and similar technologies to improve your user experience and track activity on InstaLytics.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="mb-3">We use the information we collect to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide and maintain the functionality of InstaLytics.</li>
          <li>Analyze your social media data and deliver actionable insights.</li>
          <li>Personalize your experience, including dashboard customization.</li>
          <li>Send updates and notifications (only if you&apos;ve opted in).</li>
          <li>Improve the performance, features, and security of InstaLytics.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Sharing Your Information</h2>
        <p className="mb-4">We value your privacy and only share your information in the following circumstances:</p>

        <h3 className="text-xl font-semibold mt-6 mb-3">3.1 With Your Consent</h3>
        <p className="mb-4">We will share your social media data only when you provide explicit authorization.</p>

        <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Service Providers</h3>
        <p className="mb-3">We may share your data with third-party service providers to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Host our Tool and store data securely.</li>
          <li>Provide customer support or analytics services.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">3.3 Legal Requirements</h3>
        <p className="mb-3">We may disclose your information if required by law or to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Protect the rights, property, or safety of our users or the public.</li>
          <li>Prevent fraud or unauthorized access to InstaLytics.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Storage and Security</h2>
        <p className="mb-4">We take data security seriously and implement measures to protect your information, including:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Encryption for sensitive data (e.g., passwords).</li>
          <li>Secure servers with restricted access.</li>
        </ul>
        <p className="mb-4">While we strive to protect your data, no system is completely secure. Use strong passwords and protect your account credentials.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
        <p className="mb-3">You have the right to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Access your data: Request a copy of the personal data we hold about you.</li>
          <li>Correct your data: Update or rectify any inaccurate information.</li>
          <li>Delete your data: Request deletion of your account and associated data.</li>
          <li>Withdraw consent: Revoke access to your social media accounts at any time.</li>
        </ul>
        <p className="mb-4">To exercise these rights, contact us at contact@techsolace.in.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Retention</h2>
        <p className="mb-3">We retain your data for as long as necessary to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide the services outlined in this policy.</li>
          <li>Comply with legal obligations or resolve disputes.</li>
        </ul>
        <p className="mb-4">You can delete your account at any time, and we will remove your data within 30 days unless legally required to retain it.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Cookies Policy</h2>
        <p className="mb-3">We use cookies to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Enhance functionality (e.g., remembering preferences).</li>
          <li>Measure performance and analyze usage.</li>
        </ul>
        <p className="mb-4">You can manage or disable cookies through your browser settings. Note that disabling cookies may impact your experience.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Children&apos;s Privacy</h2>
        <p className="mb-4">InstaLytics is not intended for children under the age of 13, and we do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, contact us immediately.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Updates to This Privacy Policy</h2>
        <p className="mb-4">We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. The updated policy will be posted with the &quot;Effective Date&quot; at the top.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
        <p className="mb-4">If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us:</p>
        <p className="mb-6">Email: contact@techsolace.in</p>

        <p className="mt-8 text-gray-300">Thank you for trusting InstaLytics.</p>
      </div>
      <Footer />
    </>
  );
};

export default privacy;
