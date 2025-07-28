import React from "react";

const Contact = () => {
  return (
    <section className="bg-white text-gray-900 py-20" id="contact">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
            action="https://formspree.io/f/mvgrprja"
            method="POST"
            className="bg-gray-100 p-8 rounded-lg shadow space-y-6"
          >
            <div>
              <label className="block mb-1 text-gray-800">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-800">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-800">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Send
            </button>
          </form>

          {/* Location Map */}
          <div className="w-full h-96 rounded-lg overflow-hidden shadow">
            <iframe
              title="Location"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              className="border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7734.29349880497!2d-17.457605!3d14.692908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f73f1e7f29%3A0xdaa0dbac23fd923e!2sDakar!5e0!3m2!1sen!2ssn!4v1626359443402!5m2!1sen!2ssn"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
