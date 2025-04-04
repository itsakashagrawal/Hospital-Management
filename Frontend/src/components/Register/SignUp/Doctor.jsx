import React from "react";
import Signupnav from "./Signupnav";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaIdCard,
  FaCalendar,
  FaVenusMars,
  FaLock,
  FaMapMarker,
  FaBook,
} from "react-icons/fa";

const Doctor = () => {
  return (
    <>
      
      <img
        className="absolute w-full h-full object-cover opacity-30 z-0"
        src="/assets/bg.jpg" 
        alt="Background"
      />
      <div className="flex flex-col items-center relative z-10  justify-center">
        <Signupnav />

        <div className="bg-white bg-opacity-90 rounded-lg shadow-2xl p-6 w-full max-w-4xl transform transition-all duration-500 hover:shadow-3xl">
          <div className="heading text-center mb-8">
            <h1 className="font-bold text-4xl text-blue-900">Doctor SignUp</h1>

            <p className="text-gray-600">
              Join our healthcare community today!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="Name relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
              <input
                type="text"
                className="border-2 border-blue-200 rounded-lg p-3 pl-10 w-full focus:border-blue-500 focus:outline-none"
                placeholder="First Name"
              />
            </div>
            <div className="Name relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
              <input
                type="text"
                className="border-2 border-blue-200 rounded-lg p-3 pl-10 w-full focus:border-blue-500 focus:outline-none"
                placeholder="Last Name"
              />
            </div>

            <div className="details relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
              <input
                type="email"
                className="border-2 border-blue-200 rounded-lg p-3 pl-10 w-full focus:border-blue-500 focus:outline-none"
                placeholder="Email"
              />
            </div>
            <div className="details relative">
              <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
              <input
                type="number"
                className="border-2 border-blue-200 rounded-lg p-3 pl-10 w-full focus:border-blue-500 focus:outline-none"
                placeholder="Mobile Number"
              />
            </div>

            <div className="NIC relative">
              <FaIdCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
              <input
                type="number"
                className="border-2 border-blue-200 rounded-lg p-3 pl-10 w-full focus:border-blue-500 focus:outline-none"
                placeholder="Adhar Card Number"
              />
            </div>

            <div className="password relative">
              <FaVenusMars className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
              <select className="border-2 border-blue-200 rounded-lg p-3 pl-10 w-full focus:border-blue-500 focus:outline-none">
                <option className="text-blue-500" value="Gender">
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="details relative">
              <FaBook className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
              <input
                type="text"
                className="border-2 border-blue-200 rounded-lg p-3 pl-10 w-full focus:border-blue-500 focus:outline-none"
                placeholder="Specialty"
              />
            </div>

            <div className="Experience relative">
              <FaBook className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
              <input
                type="text"
                className="border-2 border-blue-200 rounded-lg p-3 pl-10 w-full focus:border-blue-500 focus:outline-none"
                placeholder="Experience"
              />
            </div>

            <div className="password relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
              <input
                type="password"
                className="border-2 border-blue-200 rounded-lg p-3 pl-10 w-full focus:border-blue-500 focus:outline-none"
                placeholder="Password"
              />
            </div>
            <div className="password relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
              <input
                type="password"
                className="border-2 border-blue-200 rounded-lg p-3 pl-10 w-full focus:border-blue-500 focus:outline-none"
                placeholder="Confirm Password"
              />
            </div>
          </div>

            <div className="message  items-center flex mb-5 flex-col">
              <a
                className="p-3 w-55 text-center font-bold bg-blue-600 text-white rounded-lg mt-6 hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                href="/"
              >
                Register
              </a>
            </div>
        </div>
      </div>
    </>
  );
};

export default Doctor;
