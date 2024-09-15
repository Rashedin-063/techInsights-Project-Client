import React from 'react';

const PlanSection = () => {
  return (
    <div className='bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 py-16'>
      <div className='max-w-7xl mx-auto px-4 text-center'>
        <h2 className='text-4xl font-extrabold text-white mb-8'>
          Choose Your Plan
        </h2>
        <p className='text-lg text-gray-200 mb-12'>
          Unlock premium features and exclusive content tailored to your needs.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Basic Plan */}
          <div className='bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition transform duration-300'>
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>
              Basic Plan
            </h3>
            <p className='text-gray-600 mb-6'>
              Perfect for individuals starting their journey.
            </p>
            <div className='text-4xl font-extrabold text-gray-900 mb-4'>
              $9.99
            </div>
            <p className='text-gray-600 mb-4'>Billed Monthly</p>
            <ul className='text-left mb-6 space-y-2 text-gray-700'>
              <li>✓ Access to all basic articles</li>
              <li>✓ Monthly newsletter</li>
              <li>✓ Community support</li>
            </ul>
            <button className='w-full bg-blue-500 text-white py-2 rounded-lg font-semibold text-lg hover:bg-blue-600 transition duration-300'>
              Choose Plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className='bg-white rounded-lg shadow-xl p-6 hover:scale-105 transition transform duration-300 border-4 border-blue-500'>
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>Pro Plan</h3>
            <p className='text-gray-600 mb-6'>
              Best for professionals looking to advance.
            </p>
            <div className='text-4xl font-extrabold text-gray-900 mb-4'>
              $19.99
            </div>
            <p className='text-gray-600 mb-4'>Billed Monthly</p>
            <ul className='text-left mb-6 space-y-2 text-gray-700'>
              <li>✓ All basic features</li>
              <li>✓ Exclusive pro articles</li>
              <li>✓ Priority support</li>
              <li>✓ Early access to new content</li>
            </ul>
            <button className='w-full bg-purple-600 text-white py-2 rounded-lg font-semibold text-lg hover:bg-purple-700 transition duration-300'>
              Most Popular
            </button>
          </div>

          {/* Premium Plan */}
          <div className='bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition transform duration-300'>
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>
              Premium Plan
            </h3>
            <p className='text-gray-600 mb-6'>
              For power users who need it all.
            </p>
            <div className='text-4xl font-extrabold text-gray-900 mb-4'>
              $29.99
            </div>
            <p className='text-gray-600 mb-4'>Billed Monthly</p>
            <ul className='text-left mb-6 space-y-2 text-gray-700'>
              <li>✓ All Pro features</li>
              <li>✓ One-on-one consultations</li>
              <li>✓ Custom reports & analysis</li>
              <li>✓ Access to premium tools</li>
            </ul>
            <button className='w-full bg-blue-500 text-white py-2 rounded-lg font-semibold text-lg hover:bg-blue-600 transition duration-300'>
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanSection;
