"use client";
import { Button, Divider, Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import phoneIcon from "../../../assets/icons/phone-call.png";
import mailIcon from "../../../assets/icons/communication.png";

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
    <div id="contact" className="mt-10 lg:mt-48 px-4">
      <h2 className="text-4xl font-bold text-center">Contact Me</h2>
      <section className="w-full lg:max-w-7xl min-h-[600px] flex flex-col justify-center  mx-auto mt-10 border-primary border rounded shadow-sm shadow-primary">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 ">
          <div className="font-semibold text-medium border-b pb-10 lg:pb-0 lg:border-r lg:border-b-0 border-borders text-primaryText">
            <div className="flex flex-col w-full h-full justify-center items-center">
              <div className="text-left space-y-1">
                <span className="flex gap-2 ">
                  <Image src={mailIcon} width={25} height={25} alt="mail" />
                  <p>jalal.ahmed.dev@gmail.com</p>
                </span>
                <span className="flex gap-1">
                  <Image src={phoneIcon} width={25} height={25} alt="phone" />
                  <p className="font-sans text-base">+8801995612420</p>
                </span>
              </div>
            </div>
          </div>
          <div className="px-2">
            <h2 className="text-center font-semibold text-primaryText">
              send a direct message
            </h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 max-w-md items-center justify-center mx-auto"
            >
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
                className="font-bold w-full"
                disabled={loading}
                isLoading={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
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
