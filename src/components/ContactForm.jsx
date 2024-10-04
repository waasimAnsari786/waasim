import React, { useId } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import Text from "./Text";

const ContactForm = () => {
  const contacts = [
    {
      URL: "https://www.linkedin.com/in/waasim-ansari-39741b28b/",
      icon: <FaLinkedin className="text-slate-800 text-2xl" />,
      cnName: "Waasim Ansari",
      id: useId(),
    },
    {
      URL: "https://github.com/waasimAnsari786",
      icon: <FaGithub className="text-slate-800 text-2xl" />,
      cnName: "waasimAnsari786",
      id: useId(),
    },
  ];

  return (
    <section className="w-full py-12 " id="my-cn">
      <Text myClass="text-4xl font-bold mb-8 text-center" myText="Contact Me" />
      <div className="container mx-auto px-6 flex flex-col justify-between md:flex-row gap-3">
        <div className="w-full md:w-1/3">
          {contacts.map((curObj) => {
            return (
              <a href={curObj.URL} key={curObj.id}>
                <div className="bg-white rounded-lg p-6 w-full flex flex-col flex-wrap justify-center items-center border-[0.1rem] border-slate-300 mb-2">
                  {curObj.icon}
                  <p className="text-slate-800 text-xl font-medium">
                    {curObj.cnName}
                  </p>
                  <span className="text-slate-800 text-base capitalize font-medium">
                    view profile <FaLongArrowAltRight className="inline" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
        <div className="w-full md:w-2/3">
          <form className="w-full rounded-lg flex flex-col gap-2">
            {/* Name Field */}
            <div className="flex gap-2">
              <input
                className="w-1/2 p-3 text-gray-900 border border-gray-300 rounded focus:outline-none"
                id="name"
                type="text"
                placeholder="Your Name"
                required
              />

              <input
                className="w-1/2 p-3 text-gray-900 border border-gray-300 rounded focus:outline-none"
                id="number"
                type="tel"
                placeholder="Your Phone Number"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <input
                className="w-full p-3 text-gray-900 border border-gray-300 rounded focus:outline-none"
                id="email"
                type="email"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <textarea
                className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded focus:outline-none"
                id="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                className="bg-slate-300 text-slate-800 hover:bg-slate-800 hover:text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-linear"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
