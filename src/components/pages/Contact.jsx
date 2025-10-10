import Input from "../atoms/Input";
import SmallTitle from "../atoms/SmallTitle";
import Heading from "../atoms/typography/Heading";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qhekanr", "template_uqvyovs", form.current, {
        publicKey: "YhP1uuWRBNG3EQrJ5",
      })
      .then(
        () => {
          toast.success("✅ Success!");
          form.current.reset();
        },
        (error) => {
          toast.error("❌ Failed....");
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section
      id="contact"
      className="h-[calc(100vh-80px)] px-12 flex flex-col items-start justify-center gap-12"
    >
      <SmallTitle>Contact !</SmallTitle>
      <Heading level="h3">Let's Make Something Awesome Together !</Heading>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col w-full gap-8"
      >
        <div className="flex justify-around w-full gap-8">
          <div className="flex flex-col w-full gap-4">
            <Input type="text" name="user_name" placeholder={"Name*"} />
            <Input type="email" name="user_email" placeholder={"Email*"} />
          </div>
          <div className="flex flex-col w-full gap-4">
            <Input
              type="text"
              name="user_company"
              placeholder={"Company Name"}
            />
            <Input type="phone" name="user_phone" placeholder={"Phone*"} />
          </div>
        </div>
        <textarea
          name="message"
          placeholder="a few word"
          className="w-full placeholder:text-white/50 text-white p-2 border-white border-1 rounded-sm caret-white"
        ></textarea>
        <input
          type="submit"
          value="Send Message"
          className="px-6 py-2  rounded-xl text-text-secondary  bg-gradient-to-tr from-primary to-accent  hover:from-accent hover:to-primary transition-colors duration-300 cursor-pointer flex items-center gap-2 whitespace-nowrap mr-auto"
        />
      </form>
    </section>
  );
}
