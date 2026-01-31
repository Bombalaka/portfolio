"use client";

import { useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";

export default function Contact() {
  const searchParams = useSearchParams();
  const showForm = searchParams.get("contact") === "form";

  // Update these to your real links whenever you want.
  const EMAIL_HREF = "mailto:yotaka.bombalaka@gmail.com";
  const GITHUB_URL = "https://github.com/Bombalaka";
  const LINKEDIN_URL = "https://www.linkedin.com/in/yotaka-khaowgomol/";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  let content: ReactNode;

  if (!showForm) {
    content = (
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={EMAIL_HREF}
          className="flex items-center justify-center gap-3 bg-yellow-300 px-6 py-4 rounded-xl font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-gray-900"
        >
          <span className="text-xl">📧</span>
          <span>Email Me</span>
        </a>

        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-3 bg-gray-900 px-6 py-4 rounded-xl font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-800 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-white"
        >
          <span className="text-xl">🧑‍💻</span>
          <span>GitHub</span>
        </a>

        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-3 bg-sky-300 px-6 py-4 rounded-xl font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-sky-400 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-gray-900"
        >
          <span className="text-xl">💼</span>
          <span>LinkedIn</span>
        </a>
      </div>
    );
  } else if (success) {
    content = (
      <div className="text-center py-8">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-600">Thanks for reaching out! I&apos;ll get back to you soon.</p>
        <button onClick={() => setSuccess(false)} className="mt-4 text-yellow-600 font-medium hover:underline">
          Send another message
        </button>
      </div>
    );
  } else {
    content = (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          void submitMessage();
        }}
        className="space-y-6"
      >
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className="block font-bold text-gray-900 mb-2">
            Your Name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border-2 border-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className="block font-bold text-gray-900 mb-2">
            Your Email
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border-2 border-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="john@example.com"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="contact-message" className="block font-bold text-gray-900 mb-2">
            Message
          </label>
          <textarea
            id="contact-message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border-2 border-black focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
            placeholder="Hi Yotaka! I wanted to say..."
          />
        </div>

        {/* Error message */}
        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg border-2 border-red-300">{error}</div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-400 text-gray-900 py-4 rounded-lg font-bold text-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-500 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all disabled:opacity-50"
        >
          {loading ? "Sending... ⏳" : "Send Message 🚀"}
        </button>
      </form>
    );
  }

  async function submitMessage() {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data: { ok?: boolean; error?: string } = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        setError(data.error ?? "Something went wrong. Please try again!");
        return;
      }

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setError("Network error. Please try again!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-pink-100 to-yellow-100">
      <div className="max-w-2xl mx-auto px-4">
        
        <h2 className="text-4xl font-bold font-heading text-center mb-4 text-gray-900">
          📬 Let&apos;s Connect!
        </h2>
        
        <p className="text-center text-gray-700 mb-8">
          Want to chat about cloud stuff, share learning resources, or just say hi?
        </p>

        <div className="bg-white p-8 rounded-2xl border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          
          {content}

        </div>

      </div>
    </section>
  );
}