import Footer from "@/components/core/Footer";
import Header from "@/components/core/Header";
import React from "react";

const Terms = () => {
  return (
    <>
      <Header />
      <br />
      <div className="max-w-[800px] text-white mt-[120px] m-auto p-10">
        <h1 className="text-3xl font-bold mb-6">Terms &amp; Conditions</h1>
        <p className="text-gray-300 mb-4">Effective Date: January 3, 2025</p>
        
        <p className="mb-6">
          Welcome to InstaLytics (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access to and use of our social media analytics tool (&ldquo;Tool&rdquo;). By accessing or using InstaLytics, you agree to these Terms. If you do not agree, please refrain from using our Tool.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Use of InstaLytics</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">1.1 Eligibility</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>You must be at least 13 years old to use InstaLytics.</li>
          <li>By using InstaLytics, you represent and warrant that you have the legal capacity to agree to these Terms.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">1.2 Account Registration</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>To access certain features of InstaLytics, you must create an account.</li>
          <li>You are responsible for maintaining the confidentiality of your login credentials and are fully responsible for all activities that occur under your account.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. User Responsibilities</h2>
        <p className="mb-3">When using InstaLytics, you agree to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Use the Tool only for lawful purposes and in compliance with all applicable laws.</li>
          <li>Provide accurate and up-to-date information during registration and while using the Tool.</li>
          <li>Refrain from engaging in any unauthorized or harmful activities, including:
            <ul className="list-disc pl-6 mt-2">
              <li>Attempting to access accounts, systems, or data without authorization.</li>
              <li>Using InstaLytics to distribute harmful or malicious content.</li>
              <li>Reverse engineering, decompiling, or otherwise attempting to extract the source code of InstaLytics.</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Subscription and Payment</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Paid Features</h3>
        <p className="mb-3">Certain features of InstaLytics may require a subscription or one-time payment.</p>
        <ul className="list-disc pl-6 mb-4">
          <li>By subscribing, you agree to pay all applicable fees, which are non-refundable unless otherwise stated.</li>
          <li>Failure to pay may result in suspension or termination of your account.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Billing</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>You are responsible for providing accurate billing information.</li>
          <li>We reserve the right to modify subscription fees upon providing reasonable notice.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Ownership</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>All content, features, and functionalities of InstaLytics, including but not limited to text, graphics, logos, and software, are the intellectual property of InstaLytics or its licensors.</li>
          <li>You are granted a limited, non-exclusive, and non-transferable license to use InstaLytics solely for its intended purpose.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Restrictions</h3>
        <p className="mb-3">You may not:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Copy, modify, distribute, or create derivative works of the Tool.</li>
          <li>Use InstaLytics for commercial purposes without prior written consent.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Access and Usage</h2>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">5.1 Social Media Authorization</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>By connecting your social media accounts to InstaLytics, you grant us access to retrieve and analyze your data to provide insights.</li>
          <li>You may revoke access to your social media accounts at any time through your account settings.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">5.2 Data Usage</h3>
        <p className="mb-4">We do not claim ownership of the data you provide but reserve the right to use anonymized and aggregated data to improve our services.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>InstaLytics is provided on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis.</li>
          <li>We do not guarantee the accuracy, reliability, or completeness of the analytics provided.</li>
          <li>To the fullest extent permitted by law, InstaLytics and its team shall not be held liable for:
            <ul className="list-disc pl-6 mt-2">
              <li>Any indirect, incidental, or consequential damages.</li>
              <li>Loss of data, profits, or business opportunities arising from your use of the Tool.</li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Termination</h2>
        <p className="mb-3">We reserve the right to suspend or terminate your account if:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>You violate these Terms.</li>
          <li>Your account remains inactive for an extended period.</li>
          <li>We discontinue the Tool for any reason.</li>
        </ul>
        <p className="mb-4">Upon termination, your access to InstaLytics will be revoked, and any data associated with your account may be deleted.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Updates to These Terms</h2>
        <p className="mb-4">We may update these Terms periodically to reflect changes in our practices or applicable laws. The updated Terms will be posted with the &ldquo;Effective Date&rdquo; at the top, and continued use of InstaLytics constitutes your acceptance of the changes.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Governing Law</h2>
        <p className="mb-4">These Terms are governed by the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of India.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about these Terms, please contact us:
        </p>
        <p className="mb-6">Email: contact@techsolace.in</p>
        
        <p className="mt-8 text-gray-300">Thank you for using InstaLytics!</p>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
