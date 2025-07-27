"use client";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { EMAILJS_SERVICE_ID } from "../../config/emailjs";
import { EMAILJS_TEMPLATE_ID } from "../../config/emailjsTemplate";
import { EMAILJS_USER_ID } from "../../config/emailjsUser";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";


export const metadata = {
  title: "Contact - Sagar",
  description: "Get in touch",
};

const ContactPage = () => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // TODO: Replace with your actual EmailJS service, template, and user IDs
  const SERVICE_ID = EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = EMAILJS_TEMPLATE_ID;
  const USER_ID = EMAILJS_USER_ID;

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current!, USER_ID)
      .then(() => {
        setSuccess(true);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to send message. Please try again later.");
        setLoading(false);
      });
  };

  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <Header />
        <div className="flex-1 w-full flex flex-col items-center justify-center pt-32">
          <h1 className="text-5xl font-bold mb-6">Contact</h1>
          <p className="text-lg text-gray-400 mb-8">Get in touch with me for collaborations, project inquiries, or just to say hello!</p>
          <form ref={form} onSubmit={sendEmail} className="bg-gray-900 border border-gray-800 rounded-lg p-8 w-full max-w-md shadow-lg flex flex-col gap-4">
            <input name="name" type="text" required placeholder="Your Name" className="bg-black border border-gray-700 rounded px-4 py-2 text-white focus:outline-none focus:border-purple-500" />
            <input name="email" type="email" required placeholder="Your Email" className="bg-black border border-gray-700 rounded px-4 py-2 text-white focus:outline-none focus:border-purple-500" />
            <input name="subject" type="text" required placeholder="Subject" className="bg-black border border-gray-700 rounded px-4 py-2 text-white focus:outline-none focus:border-purple-500" />
            <textarea name="message" required placeholder="Your Message" rows={5} className="bg-black border border-gray-700 rounded px-4 py-2 text-white focus:outline-none focus:border-purple-500" />
            <button type="submit" disabled={loading} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full font-semibold disabled:opacity-60">
              {loading ? "Sending..." : "Send Message"}
            </button>
            {success && <p className="text-green-400 mt-2">Message sent successfully!</p>}
            {error && <p className="text-red-400 mt-2">{error}</p>}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
