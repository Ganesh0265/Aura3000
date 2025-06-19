import React from "react";
import { Navbar } from "../components/Navbar";

export const LoginPage = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center p-4 sm:p-6 font-inter">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-5xl mx-auto flex flex-col md:flex-row transform transition-all duration-300 hover:scale-[1.005]">
          <div className="md:w-1/2 relative bg-gray-100 flex items-center justify-center p-6 md:p-0">
            {/* Background image for visual appeal */}
            <img
              src="https://i.pinimg.com/736x/1d/58/54/1d5854378045152a1621a2c6a44309e5.jpg"
              alt="Wardrobe illustration"
              className="absolute inset-0 w-full h-full object-cover rounded-l-2xl hidden md:block" // Hidden on small screens
            />
            {/* Optional overlay for text readability on the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-black/30 md:group-hover:bg-black/40 transition duration-300 hidden md:block"></div>

            {/* Text content over the illustration (visible on larger screens) */}
            <div className="relative z-10 text-center text-white p-8 hidden md:block">
              <h2 className="text-3xl font-bold font-manrope mb-3 leading-tight">
                Welcome Back to Wardrobe
                <span className="text-orange-300">Pro</span>!
              </h2>
              <p className="text-lg opacity-90">
                Log in to continue managing your smart wardrobe. Your perfect
                outfit awaits!
              </p>
            </div>
            {/* Fallback image for smaller screens where the main image is hidden by utility class */}
            <img
              src="https://i.pinimg.com/736x/1d/58/54/1d5854378045152a1621a2c6a44309e5.jpg"
              alt="Wardrobe illustration fallback"
              className="w-full h-auto object-cover rounded-xl shadow-md md:hidden"
            />
          </div>

          {/* Right Column: Login Form Section */}
          <div className="md:w-1/2 p-8 sm:p-10 md:p-12">
            {/* Logo/Brand Name (consistent with Navbar) */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-extrabold text-gray-800 font-manrope">
                Wardrobe<span className="text-orange-500">Pro</span>
              </h1>
              <p className="text-gray-500 text-lg mt-2">
                Log in to your account
              </p>
            </div>

            {/* Traditional Email/Password Login Form */}
            <form className="space-y-5">
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-200 text-gray-800"
                  placeholder="you@example.com"
                />
              </div>

              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 transition duration-200 text-gray-800"
                  placeholder="Enter your password"
                />
              </div>

              {/* Forgot Password Link */}
              <div className="text-right text-sm">
                <a
                  href="#"
                  className="font-medium text-orange-500 hover:text-orange-600 transition duration-300"
                >
                  Forgot password?
                </a>
              </div>

              <a href="/Dashboard">
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Log In
                </button>
              </a>
            </form>

            {/* "Or" Separator */}
            <div className="relative flex items-center justify-center my-6">
              <div className="absolute inset-x-0 h-px bg-gray-200"></div>
              <span className="relative bg-white px-3 text-gray-500 text-sm">
                Or continue with
              </span>
            </div>

            {/* Social Login Options */}
            <div className="flex flex-col space-y-3 mb-6">
              <button className="flex items-center justify-center w-full py-2.5 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition duration-200 shadow-sm font-medium">
                {/* Google SVG Icon (inline for self-containment) */}
                <svg
                  className="w-5 h-5 mr-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4C9.57018 4 7.37767 4.9602 5.75333 6.6496L2.61466 3.51094C4.69733 1.57948 7.36933 0.5 10.1587 0.5H12C16.928 0.5 21.0773 3.49051 22.8467 7.72895L19.708 10.8676C18.6792 8.35821 15.6568 6.5 12 6.5C9.57018 6.5 7.37767 7.4602 5.75333 9.1496L2.61466 6.01094C4.69733 4.07948 7.36933 3 10.1587 3H12V4Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M12 20C14.4298 20 16.6223 19.0398 18.2467 17.3504L21.3853 20.4891C19.3027 22.4205 16.6307 23.5 13.8413 23.5H12C7.072 23.5 2.92267 20.5095 1.15333 16.2711L4.292 13.1324C5.32079 15.6418 8.3432 17.5 12 17.5C14.4298 17.5 16.6223 16.5398 18.2467 14.8504L21.3853 11.7117C19.3027 9.77922 16.6307 8.70678 13.8413 8.70678H12C7.072 8.70678 2.92267 11.7117 1.15333 16.2711Z"
                    fill="#34A853"
                  />
                  <path
                    d="M1.15333 16.2711L4.292 13.1324C5.32079 15.6418 8.3432 17.5 12 17.5C14.4298 17.5 16.6223 16.5398 18.2467 14.8504L21.3853 11.7117C19.3027 9.77922 16.6307 8.70678 13.8413 8.70678H12C7.072 8.70678 2.92267 11.7117 1.15333 16.2711Z"
                    fill="#FBBC04"
                  />
                  <path
                    d="M12 6.5C15.6568 6.5 18.6792 8.35821 19.708 10.8676L22.8467 7.72895C21.0773 3.49051 16.928 0.5 12 0.5V6.5Z"
                    fill="#4285F4"
                  />
                </svg>
                Log in with Google
              </button>
              <button className="flex items-center justify-center w-full py-2.5 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition duration-200 shadow-sm font-medium">
                {/* Apple SVG Icon (inline for self-containment) */}
                <svg
                  className="w-5 h-5 mr-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.502C17.067 15.54 16.035 16.545 14.937 16.578C13.839 16.611 13.107 15.897 12.375 15.897C11.643 15.897 10.953 16.551 9.999 16.611C9.045 16.662 8.013 16.002 7.071 14.502C5.973 12.783 5.418 10.437 6.309 9.072C7.032 7.974 8.379 7.371 9.546 7.371C10.662 7.371 11.694 8.163 12.375 8.163C13.056 8.163 14.283 7.359 15.672 7.359C16.908 7.359 18.174 7.932 18.999 9.099C19.722 10.158 19.824 11.232 19.662 12.015C19.5 12.789 18.876 13.563 17.472 14.502ZM15.111 2.91C14.64 2.337 13.881 2.019 13.065 2.01C12.198 1.992 11.361 2.376 10.743 2.91C10.272 3.321 9.873 4.089 9.999 4.881C10.125 5.673 10.719 6.333 11.304 6.36C12.171 6.387 12.969 6.003 13.62 5.418C14.187 4.905 14.598 4.146 14.508 3.354C14.418 2.562 14.991 2.376 15.111 2.91Z" />
                </svg>
                Log in with Apple
              </button>
            </div>

            {/* Link to Sign Up */}
            <p className="text-center text-gray-600 text-sm mt-6">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-orange-500 hover:text-orange-600 font-semibold transition duration-300"
              >
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

// Main App component to encapsulate the LoginPage for direct rendering
export default function App() {
  return <LoginPage />;
}
