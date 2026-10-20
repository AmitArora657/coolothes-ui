import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Connect this handler to your backend to send customer messages.
    setSubmitted(true);
  };

  const inputClassName =
    "mt-2 w-full rounded-xl border border-[#e8dccb] bg-[#fffdfa] px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#b77932] focus:ring-2 focus:ring-[#b77932]/15";

  return (
    <main className="bg-[#faf8f5] text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fff8e9] via-[#faf3e6] to-[#f4e5ce]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:py-20 lg:px-8 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-4 py-2 text-sm font-medium text-amber-800">
            <span className="text-lg">🪷</span>
            We're Here for You
          </span>

          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#633b27] sm:text-5xl lg:text-6xl">
            Let's Connect with
            <span className="block text-[#b77932]">Love and Devotion</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Have a question about our Laddu Gopal Ji dresses, accessories, or
            your order? We're happy to help make your shopping experience as
            special as your devotion to Kanha.
          </p>

          <a
            href="tel:+918273184777"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#8b542e] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#704123]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M21 16.5v3a1.5 1.5 0 0 1-1.65 1.5 18.9 18.9 0 0 1-8.25-2.94 18.6 18.6 0 0 1-5.75-5.75A18.9 18.9 0 0 1 2.41 4.02 1.5 1.5 0 0 1 3.9 2.35h3a1.5 1.5 0 0 1 1.5 1.29c.1.96.34 1.9.7 2.8a1.5 1.5 0 0 1-.34 1.58L7.5 9.28a15 15 0 0 0 7.2 7.2l1.26-1.26a1.5 1.5 0 0 1 1.58-.34c.9.36 1.84.6 2.8.7A1.5 1.5 0 0 1 21 16.5Z" />
            </svg>
            Call Us: +91 82731 84777
          </a>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {/* Email */}
          <article className="rounded-2xl border border-[#eee1d0] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fbefdc] text-[#8b542e]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </div>

            <h2 className="mt-5 text-lg font-semibold text-[#633b27]">
              Email Us
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Have a question about a product or need assistance with an order?
              We're here to help.
            </p>

            <p className="mt-4 text-sm font-medium text-[#8b542e]">
              Contact us by phone or WhatsApp
            </p>
          </article>

          {/* Phone and WhatsApp */}
          <article className="rounded-2xl border border-[#eee1d0] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fbefdc] text-[#8b542e]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M21 16.5v3a1.5 1.5 0 0 1-1.65 1.5 18.9 18.9 0 0 1-8.25-2.94 18.6 18.6 0 0 1-5.75-5.75A18.9 18.9 0 0 1 2.41 4.02 1.5 1.5 0 0 1 3.9 2.35h3a1.5 1.5 0 0 1 1.5 1.29c.1.96.34 1.9.7 2.8a1.5 1.5 0 0 1-.34 1.58L7.5 9.28a15 15 0 0 0 7.2 7.2l1.26-1.26a1.5 1.5 0 0 1 1.58-.34c.9.36 1.84.6 2.8.7A1.5 1.5 0 0 1 21 16.5Z" />
              </svg>
            </div>

            <h2 className="mt-5 text-lg font-semibold text-[#633b27]">
              Call or WhatsApp
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Need help choosing something special for your Kanha or checking on
              an order? Reach out to us.
            </p>

            <p className="mt-4 text-base font-semibold text-[#8b542e]">
              +91 82731 84777
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="tel:+918273184777"
                className="inline-flex items-center justify-center rounded-full bg-[#8b542e] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#704123]"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/918273184777"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#d8b995] bg-white px-4 py-2.5 text-sm font-semibold text-[#704123] transition hover:bg-[#fff8e9]"
              >
                WhatsApp Us
              </a>
            </div>
          </article>

          {/* Online Store */}
          <article className="rounded-2xl border border-[#eee1d0] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fbefdc] text-[#8b542e]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path d="M3 9h18l-2-6H5L3 9Z" />
                <path d="M5 9v12h14V9M9 21v-7h6v7" />
                <path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
              </svg>
            </div>

            <h2 className="mt-5 text-lg font-semibold text-[#633b27]">
              Explore Our Store
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Discover beautiful Laddu Gopal Ji poshaks, mukuts, malas, and
              devotional accessories.
            </p>

            <Link
              to="/products"
              className="mt-4 inline-flex items-center text-sm font-semibold text-[#8b542e] transition hover:text-[#633b27]"
            >
              Browse Products
              <span className="ml-2">→</span>
            </Link>
          </article>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl border border-[#eee1d0] bg-white shadow-sm lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Panel */}
          <div className="relative overflow-hidden bg-[#754a30] p-8 text-white sm:p-10 lg:p-12">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/10" />

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">
              Get in Touch
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              How Can We Help You Today?
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/80 sm:text-base">
              Whether you have a question about a product, need help with an
              order, or want to know more about our collection, send us a
              message or contact us directly.
            </p>

            <div className="my-8 h-px bg-white/20" />

            <p className="text-2xl">🦚 🪷</p>

            <p className="mt-4 text-lg font-medium">
              हर प्रश्न का उत्तर,
              <br />
              प्रेम और श्रद्धा के साथ।
            </p>

            <p className="mt-3 text-sm text-white/70">
              Thank you for being a part of our devotional journey.
            </p>

            <a
              href="https://wa.me/918273184777"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Chat with Us on WhatsApp
              <span className="ml-2">→</span>
            </a>
          </div>

          {/* Form Panel */}
          <div className="p-6 sm:p-10 lg:p-12">
            <h2 className="text-2xl font-bold text-[#633b27]">
              Send Us a Message
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Fill in the details below and tell us how we can assist you.
            </p>

            {submitted ? (
              <div
                role="status"
                className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-6"
              >
                <p className="text-lg font-semibold text-green-800">
                  Thank you for reaching out!
                </p>

                <p className="mt-2 text-sm leading-6 text-green-700">
                  Your form has been validated, but your message has not been
                  sent yet. You can contact us directly at +91 82731 84777 or
                  through WhatsApp.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/918273184777"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full bg-[#8b542e] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#704123]"
                  >
                    Open WhatsApp
                  </a>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="rounded-full border border-[#d8b995] px-5 py-2.5 text-sm font-semibold text-[#704123] transition hover:bg-[#fff8e9]"
                  >
                    Back to Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Your Name
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClassName}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Email Address
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClassName}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="text-sm font-semibold text-gray-700"
                  >
                    What Can We Help With?
                  </label>

                  <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClassName}
                    required
                  >
                    <option value="" disabled>
                      Select a topic
                    </option>
                    <option value="Product Inquiry">Product inquiry</option>
                    <option value="Order Status">Order status</option>
                    <option value="Shipping and Delivery">
                      Shipping and delivery
                    </option>
                    <option value="Return or Exchange">
                      Return or exchange
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClassName} resize-y`}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#8b542e] px-7 py-4 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#704123] focus:outline-none focus:ring-2 focus:ring-[#b77932] focus:ring-offset-2 sm:w-auto"
                >
                  Submit Message
                  <span className="ml-2">→</span>
                </button>

                <p className="text-xs leading-5 text-gray-500">
                  Please note: this form is not connected to a message delivery
                  service yet. For assistance, call or WhatsApp us.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="border-t border-[#eee1d0] bg-[#f4ecdf] px-6 py-14 text-center sm:py-16">
        <p className="text-3xl">🙏</p>

        <h2 className="mt-4 text-2xl font-bold text-[#633b27] sm:text-3xl">
          Thank You for Visiting Gopal Ji Ki Dukaan
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
          Your love for Laddu Gopal Ji inspires the spirit of our store. We look
          forward to helping you find something beautiful for Kanha.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            to="/products"
            className="inline-flex items-center rounded-full border border-[#d8b995] bg-white px-7 py-3.5 text-sm font-semibold text-[#704123] transition hover:bg-[#fff8e9]"
          >
            Browse Our Products
            <span className="ml-2">→</span>
          </Link>

          <a
            href="tel:+918273184777"
            className="inline-flex items-center rounded-full bg-[#8b542e] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#704123]"
          >
            Call Us
          </a>
        </div>
      </section>
    </main>
  );
};

export default Contact;
