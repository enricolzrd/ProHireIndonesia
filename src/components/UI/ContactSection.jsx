const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-16 md:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-indigo-200/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-100/20 blur-2xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="overflow-hidden rounded-3xl border border-indigo-50 bg-white/90 shadow-2xl shadow-indigo-100/40 backdrop-blur-sm">
          <div className="p-6 sm:p-8 md:p-10 lg:p-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100/80 px-3 py-1 text-xs font-semibold text-indigo-800">
              <span>💬</span>
              <span>Hubungi Kami</span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-4xl lg:text-5xl">
              Get in{" "}
              <span className="bg-gradient-to-r from-indigo-700 to-blue-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>

            <p className="mt-4 border-l-4 border-indigo-300 pl-5 text-base italic leading-relaxed text-gray-600 md:text-lg">
              Interested in deploying ProHire for your enterprise? Drop us a
              line for corporate registration and references.
            </p>

            <form className="mt-8 space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="John"
                    className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 transition-all focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 transition-all focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Corporate Email
                </label>

                <input
                  type="email"
                  placeholder="john@company.com"
                  className="w-full rounded-xl border border-gray-200 bg-white/70 px-4 py-3 transition-all focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  rows="4"
                  placeholder="How can we help you?"
                  className="w-full resize-none rounded-xl border border-gray-200 bg-white/70 px-4 py-3 transition-all focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                ></textarea>
              </div>

              <div className="flex justify-center sm:justify-start">
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 px-8 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:from-indigo-700 hover:to-blue-700 hover:shadow-lg sm:w-auto"
                >
                  <span>📩</span>
                  Send Message
                </button>
              </div>
            </form>

            <p className="mt-6 flex items-center justify-center gap-1 text-xs text-gray-400 sm:justify-start">
              <span>🔒</span>
              Data Anda aman — tidak akan dibagikan ke pihak ketiga.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;