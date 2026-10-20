import { Link } from "react-router-dom";

import krishnaImage from "../../assets/images/Krishna_pic.jpg";

const About = () => {
  return (
    <main className="bg-[#faf8f5] text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#fff8e9] via-[#faf3e6] to-[#f4e5ce]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28 lg:px-8">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-4 py-2 text-sm font-medium text-amber-800">
              <span className="text-lg">🪷</span>
              Our Story, Our Devotion
            </span>

            <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-[#633b27] sm:text-5xl lg:text-6xl">
              A Little Love for
              <span className="mt-2 block text-[#b77932]">
                Our Laddu Gopal Ji
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              Every little ornament, every beautiful poshak, and every
              thoughtful detail is a way to express our love for Kanha. We bring
              together devotion, tradition, and beautiful craftsmanship to make
              your Laddu Gopal Ji feel truly special.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full bg-[#8b542e] px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#704123]"
              >
                Explore Our Collection
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#d8b995] bg-white/60 px-7 py-3.5 text-sm font-semibold text-[#704123] transition hover:bg-white"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] border border-amber-300/50" />
            <div className="relative overflow-hidden rounded-[1.75rem] bg-[#ead5b5] shadow-xl">
              <img
                src={krishnaImage}
                alt="Beautiful Laddu Gopal Ji"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#382419]/80 via-[#382419]/30 to-transparent p-6 pt-20">
                <p className="text-lg font-semibold text-white">
                  Where devotion meets love
                </p>
                <p className="mt-1 text-sm text-white/85">
                  सजें हमारे लड्डू गोपाल, प्रेम और श्रद्धा के साथ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Belief */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b77932]">
            What We Believe
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#633b27] sm:text-4xl">
            More Than Products, A Feeling of Devotion
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600">
            For devotees, Laddu Gopal Ji is family. Dressing Kanha, decorating
            His jhula, and choosing little accessories are moments filled with
            affection. We want to make those moments even more beautiful with a
            collection chosen with care.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-2xl border border-[#eee1d0] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fbefdc] text-2xl">
              🪷
            </div>
            <h3 className="mt-5 text-xl font-semibold text-[#633b27]">
              Rooted in Bhakti
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Inspired by the timeless love and devotion that devotees share
              with Shri Krishna in their everyday lives.
            </p>
          </article>

          <article className="rounded-2xl border border-[#eee1d0] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fbefdc] text-2xl">
              🧵
            </div>
            <h3 className="mt-5 text-xl font-semibold text-[#633b27]">
              Beautiful Details
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              From charming poshaks to delightful accessories, we celebrate the
              little details that make Kanha's shringar special.
            </p>
          </article>

          <article className="rounded-2xl border border-[#eee1d0] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:col-span-2 lg:col-span-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fbefdc] text-2xl">
              💛
            </div>
            <h3 className="mt-5 text-xl font-semibold text-[#633b27]">
              Chosen with Care
            </h3>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              We aim to offer a thoughtful shopping experience that feels warm,
              welcoming, and connected to your devotional traditions.
            </p>
          </article>
        </div>
      </section>

      {/* Our Promise */}
      <section className="border-y border-[#eee1d0] bg-[#f4ecdf]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20 lg:px-8">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b77932]">
              Our Promise to You
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#633b27] sm:text-4xl">
              Bringing a Little More Kanha Into Every Day
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              We believe that devotion lives in the little things: a new poshak
              for a festival, a beautiful mukut, a mala chosen with love, or a
              thoughtful gift for someone who shares your faith.
            </p>
            <p className="mt-4 leading-8 text-gray-600">
              Our goal is to help you discover those special touches in one
              welcoming place, so you can spend less time searching and more
              time celebrating your bond with Laddu Gopal Ji.
            </p>
          </div>

          <div className="rounded-3xl border border-[#e5d2b7] bg-white/80 p-8 shadow-sm sm:p-10">
            <p className="text-3xl text-[#b77932]">“</p>
            <blockquote className="mt-2 text-2xl font-medium leading-relaxed text-[#633b27] sm:text-3xl">
              सजें हमारे लड्डू गोपाल,
              <br />
              प्रेम से, श्रद्धा से, हर दिन।
            </blockquote>
            <div className="mt-6 h-1 w-16 rounded-full bg-[#c99a58]" />
            <p className="mt-4 text-sm font-medium text-gray-500">
              With love and devotion, from Gopal Ji Ki Dukaan
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center sm:py-24">
        <span className="text-3xl">🦚</span>
        <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#633b27] sm:text-4xl">
          Find Something Special for Your Kanha
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
          Discover beautiful dresses and accessories to celebrate the joy,
          warmth, and devotion that Laddu Gopal Ji brings into your home.
        </p>
        <Link
          to="/products"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[#8b542e] px-8 py-4 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#704123]"
        >
          Shop the Collection
          <span className="ml-2" aria-hidden="true">
            →
          </span>
        </Link>
      </section>
    </main>
  );
};

export default About;
