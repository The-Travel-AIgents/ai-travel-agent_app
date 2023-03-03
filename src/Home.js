import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import image from './image/image.PNG';

const Home = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://travel-aigent.onrender.com/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        alert('Thanks for signing up!');
        setEmail('');
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <Layout>
      <div className="bg-indigo-700 sm:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-10 sm:py-32 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center text-center">
            <h2 className="text-3xl tracking-tight font-bold text-white sm:text-4xl sm:tracking-tight">
              <span className="block">Welcome to Travel AIgent.</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-indigo-200 py-3">
              An AI application that helps you plan and schedule your travel.
            </p>
            <Link
              to="/app"
              className="mt-8 inline-flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-700 sm:w-auto"

            >
              Try it Out!
            </Link>
          </div>
          <div className="flex justify-center">
            <img src={image} alt="Travel AIgent" className="max-h-full" />
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl tracking-tight font-bold text-gray-800 sm:text-4xl sm:tracking-tight">
            <span className="block">Ready to start planning your next trip?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Join the waitlist and we will get in touch.
          </p>
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row sm:justify-center">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="py-3 px-4 border border-transparent text-base font-medium rounded-md sm:mr-2 sm:w-auto w-full"
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              className="mt-4 sm:mt-0 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-800 sm:w-auto"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
