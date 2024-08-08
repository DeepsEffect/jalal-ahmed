import { Button, Input, Textarea } from "@nextui-org/react";
import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="mt-10 lg:mt-20 px-4">
      <h2 className="text-4xl font-bold text-center">Contact Me</h2>
      {/* contact form */}
      <section className="w-full lg:max-w-md mx-auto mt-10 ">
        <form className="flex flex-col gap-4 ">
          <Input
            type="text"
            name="name"
            variant={"underlined"}
            label="Your Name"
          />
          <Input
            type="email"
            name="email"
            variant={"underlined"}
            label="Your Email"
          />
          <Textarea
             type="text"
             name="message"
             variant={"underlined"}
             label="Your message"
             maxLength={500}
          />
          <Button color="primary" variant="flat" className="font-bold">Send Message</Button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
