import React from "react";
import profileImage from "../assets/Profile.JPG";

import {
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

const Card = () => {
  const buttons = [
    { label: "Github", icon: <FaGithub /> },
    { label: "Twitter", icon: <FaTwitter /> },
    { label: "Facebook", icon: <FaFacebook /> },
    { label: "YouTube", icon: <FaYoutube /> },
    { label: "Email", icon: <FaEnvelope /> },
  ];

  return (
    <div className="bg-blue-500 flex justify-center items-center min-h-screen">
      <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden w-full">
        <div className="flex justify-center items-center mt-10">
          <img
            src={profileImage}
            alt="Profile"
            className="h-36 w-36 rounded-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold text-center">Sathwik</h1>
        <h5 className="text-base text-gray-700 text-center">
          Frontend Developer
        </h5>

        <div className="p-5 space-y-4">
          {buttons.map((button, index) => (
            <button
              key={index}
              className="flex items-center justify-between px-5 py-3 bg-gray-200 rounded-full w-full"
            >
              <span>{button.label}</span>
              {button.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
