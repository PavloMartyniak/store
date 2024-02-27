"use client";

import React, { useState } from "react";
import { MdMailOutline } from "react-icons/md";
import PhoneInput from "react-phone-input-2";

const textBlocks = [
  {
    title: "Customer Support",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni amet dicta ab assumenda iste beatae veritatis sit eveniet cum deserunt a qui temporibus omnis dolor rerum consequatur, nihil similique dolore.",
  },
  {
    title: "Feedback and Suggestions",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni amet dicta ab assumenda iste beatae veritatis sit eveniet cum deserunt a qui temporibus omnis dolor rerum consequatur, nihil similique dolore.",
  },
  {
    title: "Media Inquiries",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni amet dicta ab assumenda iste beatae veritatis sit eveniet cum deserunt a qui temporibus omnis dolor rerum consequatur, nihil similique dolore.",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    question: "",
  });

  console.log("formData", formData);
  return (
    <div className="flex justify-between items-center gap-10">
      <div className="w-4/6">
        <div className="flex flex-col gap-y-4 items-start">
          <h1 className="font-bold text-6xl">Contact Us</h1>

          <div>
            <p>Email, call, or complette the form to learn how</p>
            <p>Snappy can solve your messaging problem.</p>
          </div>

          <p>info@gmail.com</p>

          <p>321-221-231</p>

          <a
            className="underline font-bold hover:text-lime transition-colors duration-200"
            href="mailto:info@gmail.com"
          >
            Customer support
          </a>
        </div>

        <div className="flex mt-20 gap-x-4">
          {textBlocks.map((item, idx) => (
            <div key={idx} className="max-w-96">
              <h1 className="font-bold text-xl">{item.title}</h1>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-2/6 min-h-96 rounded-3xl shadow-2xl p-8">
        <h1 className="font-bold text-4xl">Get in Touch</h1>
        <p>You can reach us anytime</p>

        <div className="flex flex-col gap-y-4 mt-8">
          <div className="flex gap-x-4">
            <input
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className="border border-dark_grey rounded-3xl py-2 px-4 w-full outline-none"
              placeholder="First name"
              type="text"
            />
            <input
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className="border border-dark_grey rounded-3xl py-2 px-4 w-full outline-none"
              placeholder="Last name"
              type="text"
            />
          </div>

          <div className="relative">
            <MdMailOutline className="absolute top-1/2 transform -translate-y-1/2 left-4 text-gray-400" />
            <input
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="pl-10 border border-dark_grey rounded-3xl py-2 px-4 w-full outline-none"
              placeholder="Email"
              type="email"
            />
          </div>

          <PhoneInput
            placeholder="Phone number"
            specialLabel={false}
            country={"ua"}
            enableSearch={true}
            countryCodeEditable
            value={formData.phone}
            onChange={(phone) => setFormData({ ...formData, phone: phone })}
            containerStyle={{ width: "100%" }}
            inputStyle={{
              width: "100%",
              outline: "none",
              border: "1px solid #999999",
              borderRadius: "20px",
              paddingInline: 16,
              paddingBlock: 8,
            }}
          />

          <textarea
            onChange={(e) =>
              setFormData({ ...formData, question: e.target.value })
            }
            placeholder="How can we help?"
            className="border resize-none min-h-40 rounded-xl border-dark_grey p-4 outline-none"
          />

          <button className="py-2 rounded-3xl shadow-xl  bg-dark_grey hover:bg-lime hover:text-white transition-colors duration-200">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
