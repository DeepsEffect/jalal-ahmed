"use client";
import { Button, Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setLoading(false);
          setStatus({
            type: "success",
            message: "Message sent! I will get back to you soon. Thank you!",
          });
          setFormData({ name: "", email: "", message: "" });
          setTimeout(() => setStatus(null), 5000); // Clear status after 5 seconds
        },
        (error) => {
          setLoading(false);
          setStatus({
            type: "error",
            message: "Failed to send message. Please try again.",
          });
          setTimeout(() => setStatus(null), 5000); // Clear status after 5 seconds
        }
      );
  };

  return (
    <div id="contact" className="mt-10 lg:mt-20 px-4">
      <h2 className="text-4xl font-bold text-center">Contact Me</h2>
      <section className="w-full lg:max-w-md mx-auto mt-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            variant={"underlined"}
            label="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <Input
            type="email"
            name="email"
            variant={"underlined"}
            label="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <Textarea
            type="text"
            name="message"
            variant={"underlined"}
            label="Your message"
            value={formData.message}
            onChange={handleChange}
            maxLength={500}
            required
            disabled={loading}
          />
          <Button
            color="primary"
            variant="flat"
            type="submit"
            className="font-bold"
            disabled={loading}
            isLoading={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
        {status && (
          <p
            className={`mt-4 text-center ${
              status.type === "success" ? "text-green-500" : "text-red-500"
            }`}
          >
            {status.message}
          </p>
        )}
      </section>
    </div>
  );
};

export default Contact;
