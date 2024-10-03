import React from 'react';

const ContactForm = () => {
  return (
    <section className="w-full py-12 " id='my-cn'>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>

        <form className="w-full max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          {/* Name Field */}
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="name"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Phone Number Field */}
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="number">
              Phone Number
            </label>
            <input
              className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="number"
              type="tel"
              placeholder="Your Phone Number"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
