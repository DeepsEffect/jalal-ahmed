"use client";
import { Button, Input, Textarea, Tooltip } from "@nextui-org/react";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [copyState, setCopyState] = useState(null);
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

  // handle click to copy
  const handleClickToCopy = (text) => {
    // clear the state before setting a new state
    setCopyState(null);
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopyState("Text copied to clipboard!");
        setTimeout(() => setCopyState(null), 2000); // Clear status after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div id="contact" className="mt-10 lg:mt-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-10 text-primaryText uppercase">
        Contact Me
      </h2>
      <card className="w-full lg:max-w-6xl min-h-[550px] flex flex-col justify-center mx-auto rounded-md shadow-sm shadow-primary">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 ">
          <div className="font-semibold text-medium border-b pb-10 lg:pb-0 lg:border-r lg:border-b-0 border-borders text-primaryText">
            <div className="flex flex-col w-full h-full justify-center items-center">
              {/* contact info */}
              <div className="relative">
                <div className="text-left space-y-2">
                  <Tooltip placement="top" content="click to copy">
                    <span className="flex gap-2 items-center group">
                      <Button
                        size="sm"
                        variant="flat"
                        isIconOnly
                        className="transition-shadow duration-300 ease-in-out group-hover:shadow-lg group-hover:shadow-primary/50"
                      >
                        <Mail />
                      </Button>
                      <p
                        className="font-sans text-base cursor-copy"
                        onClick={() =>
                          handleClickToCopy("jalal.ahmed.dev@gmail.com")
                        }
                      >
                        jalal.ahmed.dev@gmail.com
                      </p>
                    </span>
                  </Tooltip>
                  <Tooltip placement="right" content="click to copy">
                    <span className="flex gap-1 items-center w-fit group">
                      <Button
                        size="sm"
                        variant="flat"
                        isIconOnly
                        className="transition-shadow duration-300 ease-in-out group-hover:shadow-lg group-hover:shadow-primary/50"
                      >
                        <Phone />
                      </Button>
                      <p
                        className="font-sans text-base cursor-copy"
                        onClick={() => handleClickToCopy("+8801995612420")}
                      >
                        +8801995612420
                      </p>
                    </span>
                  </Tooltip>
                </div>
                {/* text copy indicator */}
                <span className="absolute top-20 left-0 text-base text-green-500 font-normal">
                  {setCopyState && <p>{copyState}</p>}
                </span>
              </div>
            </div>
          </div>
          {/* contact form */}
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
                <Send size={20} />
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
      </card>
    </div>
  );
};

export default Contact;
