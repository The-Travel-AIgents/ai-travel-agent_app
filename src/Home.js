import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const Home = () => {
  return (
    <>
    <Layout>
      <main>
        <div class="bg-indigo-700 sm:py-20">
          <div class="max-w-3xl mx-auto text-center py-44 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h2 class="text-3xl tracking-tight font-bold text-white sm:text-4xl sm:tracking-tight">
              <span class="block">Welcome to Travel AIgent.</span>
            </h2>
            <p class="mt-4 text-lg leading-6 text-indigo-200 py-3">
                An AI application that helps you plan and schedule your travel.
            </p>
            <Link to="/app" class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
              Try it Out!
            </Link>
          </div>
        </div>
      </main>
    </Layout>
    </>
  )
}

export default Home;