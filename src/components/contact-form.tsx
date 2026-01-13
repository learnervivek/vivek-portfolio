"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Validate input
      if (!formData.name || !formData.email || !formData.message) {
        setStatus("error");
        setErrorMessage("All fields are required");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setStatus("error");
        setErrorMessage("Invalid email address");
        return;
      }

      // Send via FormSubmit (email forwarding, no server needed)
      const response = await fetch("https://formsubmit.co/ajax/v8381813340@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
      setErrorMessage("Failed to send message. Please try emailing directly at v8381813340@gmail.com");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      <div>
        <input
          type="text"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-none"
        />
      </div>
      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
      {status === "success" && (
        <p className="text-green-600 text-center text-sm">
          Message sent successfully! I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-center text-sm">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
