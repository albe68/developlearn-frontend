import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#B3B6E5]">
      <div className="text-4xl font-semibold text-white my-8">DevelopnLearn</div>
      <div className="bg-[#7C83F7] rounded-lg shadow-lg text-white p-8 sm:w-96">
        {/* Part 1: Text Content */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Login to Your Account</h2>
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
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg mb-4 hover:bg-green-600 transition duration-300"
          >
            Login
          </button>
          {/* Google Login Button */}
          <button className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition duration-300">
            Login with Google
          </button>
          <div className="mt-4 text-sm text-gray-300">
            Don't have an account yet? <a href="#signup" className="underline">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
