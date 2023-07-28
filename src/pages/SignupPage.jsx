import React from 'react';

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#B3B6E5] sm:p-6 md:p-12">
      <div className="bg-[#7C83F7] flex flex-col sm:flex-row rounded-lg shadow-md text-white">
        {/* Part 1  */}
        <div className="p-8 sm:w-96">
          <h2 className="text-5xl text-black font-semibold mb-4">Signup</h2>
          <h2 className="text-sm font-semibold mb-2">✓ Access up-to-date resources</h2>
          <h2 className="text-sm font-semibold mb-2">✓ 20+ Premium tech courses</h2>
          <h2 className="text-sm font-semibold mb-4">✓ Mentorship platform with 6+ years experienced professionals</h2>
          <div className="mb-4 mx-14">
            <h2 className="text-xl text-black font-semibold m-auto">You will learn</h2>
          </div>
          <div className="flex">
            <div className="m-3 flex items-center">
              <img
                src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png"
                alt="Course 1"
                className="w-8 h-8 mr-2"
              />
              <p>Course 1</p>
            </div>
            <div className="m-3 flex items-center">
              <img
                src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png"
                alt="Course 3"
                className="w-8 h-8 mr-2"
              />
              <p>Course 3</p>
            </div>
          </div>
          <div className="flex">
            <div className="m-3 flex items-center">
              <img
                src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png"
                alt="Course 1"
                className="w-8 h-8 mr-2"
              />
              <p>Course 1</p>
            </div>
            <div className="m-3 flex items-center">
              <img
                src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png"
                alt="Course 3"
                className="w-8 h-8 mr-2"
              />
              <p>Course 3</p>
            </div>
          </div>
        </div>

        {/* Part 2*/}
        <div className="p-8 bg-[#686DC5] rounded-lg w-full sm:w-96 flex flex-col">
          <h2 className="text-3xl font-semibold mb-4">Create an Account</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-semibold mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block font-semibold mb-2">
                Phone:
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg mb-4"
            >
              Sign Up
            </button>
          </form>
          {/* Google Login Button */}
          <button className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg">
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
