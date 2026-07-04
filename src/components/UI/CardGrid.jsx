import FeatureCard from "./FeatureCard";

const CardGrid = ({ features }) => {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 py-16 md:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-indigo-200/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-100/20 blur-2xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-3xl border border-indigo-50 bg-white/90 shadow-2xl shadow-indigo-100/40 backdrop-blur-sm">
          <div className="md:flex md:flex-row">
            <div className="p-6 sm:p-8 md:w-3/5 md:p-10 lg:p-12">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100/80 px-3 py-1 text-xs font-semibold text-indigo-800">
                <span>👑</span>
                <span>Why ProHireIndonesia?</span>
              </div>

              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-4xl lg:text-5xl">
                ProHire{" "}
                <span className="bg-linear-to-r from-indigo-700 to-blue-600 bg-clip-text text-transparent">
                  Indonesia
                </span>
              </h2>

              <p className="mt-4 border-l-4 border-indigo-300 pl-5 text-base italic leading-relaxed text-gray-600 md:text-lg">
                Kami memahami bahwa perekrut perusahaan menerima ribuan lamaran.
                SimpleHire dibuat khusus untuk menangani penyaringan volume
                tinggi tanpa antarmuka sistem ATS tradisional yang kikuk.
                ProHireIndonesia hadir dengan filosofi sederhana:{" "}
                <strong>mudah, cepat, dan efisien.</strong>
              </p>

              <div className="mt-8 grid grid-cols-1 gap-5">
                {features.map((feature) => (
                  <FeatureCard
                    key={feature.id}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    note={feature.note}
                  />
                ))}
              </div>

              <div className="mt-10 flex items-center gap-3 border-t border-indigo-100 pt-4">
                <span className="text-lg">💎</span>
                <p className="text-lg font-semibold tracking-wide text-indigo-900">
                  Designed for fast and efficiently.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center bg-linear-to-br from-indigo-50/70 via-white to-indigo-50/30 p-6 sm:p-8 md:w-2/5 md:rounded-r-3xl md:p-10">
              <div className="space-y-6 text-center md:text-left">
                <div
                  className="mx-auto flex h-48 w-48 rotate-1 flex-col items-center justify-center rounded-2xl border border-indigo-100 bg-cover bg-center shadow-xl transition-transform duration-300 hover:rotate-0 md:mx-0 md:h-56 md:w-56"
                  style={{
                    backgroundImage:
                      "url('https://images.pexels.com/photos/36733329/pexels-photo-36733329.jpeg')",
                  }}
                >
                  <span className="text-4xl">📊</span>
                </div>

                <p className="mt-4 border-l-2 border-indigo-200 pl-3 text-sm italic text-gray-500">
                  “ProHire membantu sekali dalam mengelola data dan CV pelamar.
                  Sangat mudah hanya perlu satu klik.”
                  <br />
                  <span className="text-xs font-medium not-italic text-indigo-600">
                    — CMO, UMKM F&amp;B
                  </span>
                </p>

                <div className="mt-2 flex items-center justify-center gap-1 md:justify-start">
                  <div className="flex -space-x-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-indigo-200 text-[10px] font-bold text-indigo-700">
                      M
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-blue-200 text-[10px] font-bold text-blue-700">
                      T
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-indigo-100 text-[10px] font-bold text-indigo-600">
                      D
                    </div>
                  </div>

                  <span className="ml-2 text-xs text-gray-500">
                    tim kolaborasi & feedback realtime
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardGrid;