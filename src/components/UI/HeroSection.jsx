const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-cover bg-center bg-no-repeat px-6 py-24 text-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url('https://images.pexels.com/photos/7078666/pexels-photo-7078666.jpeg')",
      }}
    >
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
          Making Recruitment Easier for Your Company
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-gray-500">
          Screen CVs faster, collaborate efficiently, and build your dream team
          with our intuitive B2B hiring platform designed for fast
          decision-making.
        </p>

        <a
          href="#contact"
          className="rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 px-8 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:from-indigo-700 hover:to-blue-700 hover:shadow-lg"
        >
          Start Screening Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;