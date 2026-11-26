
"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);

      const contactMessage = {
        id: `MSG-${Date.now().toString().slice(-8)}`,
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
        submittedAt: new Date().toISOString(),
      };

      const previous = JSON.parse(
        localStorage.getItem("contactMessages") || "[]"
      );

      localStorage.setItem(
        "contactMessages",
        JSON.stringify([...previous, contactMessage])
      );

      setMessage(
        "Thank you! Your message has been saved successfully."
      );

      form.reset();

    } catch {
      setMessage(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  const labelClass =
    "block text-xs font-medium text-[#173f32]";

  const inputClass =
    "mt-2 w-full rounded-md border border-[#dce5df] bg-white px-3 py-3 text-xs text-[#173f32] outline-none transition placeholder:text-gray-400 focus:border-[#39785b] focus:ring-2 focus:ring-[#39785b]/10";

  return (
    <section className="rounded-xl border border-[#e7ece7] bg-white p-5 shadow-sm md:p-6">

      {/* Preview Notice */}
      <div className="mb-6 rounded-md bg-[#e6f1e5] px-3 py-3">
        <p className="text-[11px] text-[#476a53]">
          Interactive preview · submissions stay on this device.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Full Name */}
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Full name
          </label>

          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Enter full name"
            className={inputClass}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email address
          </label>

          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="Enter email address"
            className={inputClass}
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="contact-phone" className={labelClass}>
            Phone number
          </label>

          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            placeholder="Enter phone number"
            className={inputClass}
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="contact-message" className={labelClass}>
            Message
          </label>

          <textarea
            id="contact-message"
            name="message"
            required
            rows={4}
            placeholder="Write your message here..."
            className={`${inputClass} resize-y`}
          />
        </div>

        {/* Confirmation */}
        {message && (
          <p
            role="status"
            className="rounded-md bg-[#e6f1e5] p-3 text-xs leading-5 text-[#194b38]"
          >
            {message}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-[#1c5941] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#154632] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send message"}
          <span>→</span>
        </button>

      </form>

    </section>
  );
}
