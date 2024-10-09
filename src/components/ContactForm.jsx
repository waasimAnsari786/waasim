import React, { useId, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import Text from "./Text";
import Input from "./Input";
import emailjs from "@emailjs/browser";
import { useElementsRef } from "../context/MainContext";

const ContactForm = () => {
  const { contactRef } = useElementsRef();
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

  const validateUserName = (userName) => {
    return /^[a-zA-z\s]{3,}$/.test(userName);
  };

  const validatePhoneNum = (phoneNum) => {
    return /^(03[0-4][\d](?:[\s]|[\W_]|)[\d]{7})|(\+92(?:[\s]|[\W_]|)3[0-4][\d](?:[\s]|[\W_]|)[\d]{7})$/.test(
      phoneNum
    );
  };

  const validateMail = (mail) => {
    return /^[\da-zA-Z]+(?:[+%._-][\da-zA-Z]+)*@(?:[-.])*[a-zA-Z\d]+(?:[-])*\.[A-Za-z]{2,}$/.test(
      mail
    );
  };

  const [InpObj, setInpObj] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleOnChange = (obj) => {
    setInpObj((preObj) => {
      return { ...preObj, [obj.target.id]: obj.target.value };
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (!validateUserName(InpObj.name)) {
      alert(
        "Your username is incorrect. Please enter a valid username with only letters and at least 3 characters."
      );
      return; // Stop form submission if validation fails
    }

    if (!validatePhoneNum(InpObj.number)) {
      alert(
        "Your phone number is incorrect. Please enter a valid Pakistani phone number in the format: 03XX-XXXXXXX or +923XX-XXXXXXX."
      );
      return; // Stop form submission if validation fails
    }

    if (!validateMail(InpObj.email)) {
      alert("Your email is incorrect. Please enter a valid email address.");
      return; // Stop form submission if validation fails
    }

    // If all validations pass, continue with the email submission
    let servivceId = "service_h52v59i";
    let templateId = "template_mewe2k5";
    let publicKey = "KvNHGGrIA7nlnZKxN";

    const teplateParams = {
      from_name: InpObj.name,
      from_email: InpObj.email,
      to_name: "Waasim Ansari",
      message: InpObj.message,
      number: InpObj.number,
      email: InpObj.email,
    };

    emailjs
      .send(servivceId, templateId, teplateParams, publicKey)
      .then((response) => {
        // Success alert message
        alert("Thank you for getting in touch! I will get back to you soon.");

        // Reset form after successful submission
        setInpObj({
          name: "",
          email: "",
          number: "",
          message: "",
        });
      })
      .catch((err) => {
        // Error alert message
        alert(
          "Maybe my submission has expired. You can contact me on my LinkedIn or email: waasimansari92@gmail.com"
        );
      });
  };

  return (
    <section className="w-full py-12 " id="my-cn" ref={contactRef}>
      <Text myClass="text-4xl font-bold mb-8 text-center" myText="Contact Me" />
      <div className="container mx-auto px-6 flex flex-col justify-between md:flex-row gap-3">
        <div className="w-full md:w-1/3" data-aos="fade-up-right">
          {contacts.map((curObj) => {
            return (
              <a href={curObj.URL} key={curObj.id} target="_blank">
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
        <div className="w-full md:w-2/3" data-aos="fade-up-left">
          <form className="w-full rounded-lg flex flex-col gap-2">
            <div className="flex flex-col md:flex-row gap-2">
              <Input
                inpClass="w-full md:w-1/2"
                inpId="name"
                inpPlaceHolder="Your Name"
                inpFunc={handleOnChange}
                inpVal={InpObj.name}
              />
              <Input
                inpClass="w-full md:w-1/2"
                inpId="number"
                inpPlaceHolder="Your Phone Number"
                inpFunc={handleOnChange}
                inpVal={InpObj.number}
              />
            </div>
            <div>
              <Input
                inpClass="w-full"
                inpId="email"
                inpPlaceHolder="Your Email"
                inpFunc={handleOnChange}
                inpVal={InpObj.email}
              />
            </div>

            <div>
              <textarea
                onChange={(e) => {
                  handleOnChange(e);
                }}
                className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded focus:outline-none"
                id="message"
                rows="5"
                placeholder="Your Message"
                value={InpObj.message}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                className="bg-slate-300 text-slate-800 hover:bg-slate-800 hover:text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-linear"
                type="submit"
                onClick={handleOnSubmit}
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
