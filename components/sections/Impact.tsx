export function Impact() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column grid to align right content with Raise card column */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Big heading with emphasized 'impact' + subtitle + bullets */}
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
              How we drive{' '}
              <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                impact
              </span>
            </h2>
            <p className="text-gray-600 mt-3 text-lg">
              We help build a better society through invention.
            </p>
            <h3 className="text-sm font-semibold tracking-wide text-gray-700 uppercase mt-6 mb-3">
              To help create value in our society we;
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 rounded-full bg-emerald-600"></span>
                <p className="text-gray-700">
                  Build software that solves real organizational and societal problems.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 rounded-full bg-indigo-600"></span>
                <p className="text-gray-700">
                  Collaborate with industry professionals, NGOs, and creative minds.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 rounded-full bg-purple-600"></span>
                <p className="text-gray-700">
                  Make technology adoptable, accessible, and implementable for everyone.
                </p>
              </li>
            </ul>
          </div>

          {/* Right: Vertically stacked action tiles */}
          <div>
            <div className="flex flex-col gap-4">
              <a
                href="/contact?type=partner"
                className="group relative border border-gray-200 rounded-xl p-5 hover:border-indigo-200 hover:shadow-md transition overflow-hidden"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-l-xl" />
                <div className="flex items-start gap-3 pl-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 text-white text-xs font-bold">
                    01
                  </span>
                  <div>
                    <div className="font-semibold">Be a partner</div>
                    <div className="text-sm text-gray-600">
                      You have an idea—let&apos;s build it.
                    </div>
                  </div>
                </div>
              </a>

              {/* 02: Explore products (moved up) */}
              <a
                href="/solutions"
                className="group relative border border-gray-200 rounded-xl p-5 hover:border-purple-200 hover:shadow-md transition overflow-hidden"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-purple-600 to-fuchsia-600 rounded-l-xl" />
                <div className="flex items-start gap-3 pl-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-purple-600 text-white text-xs font-bold">
                    02
                  </span>
                  <div>
                    <div className="font-semibold">Explore our products</div>
                    <div className="text-sm text-gray-600">
                      Discover tools to transform how you work.
                    </div>
                  </div>
                </div>
              </a>

              {/* 03: Join community (moved last) */}
              <a
                href="/about#community"
                className="group relative border border-gray-200 rounded-xl p-5 hover:border-emerald-200 hover:shadow-md transition overflow-hidden"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-emerald-600 to-teal-600 rounded-l-xl" />
                <div className="flex items-start gap-3 pl-2">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-600 text-white text-xs font-bold">
                    03
                  </span>
                  <div>
                    <div className="font-semibold">Join our community</div>
                    <div className="text-sm text-gray-600">
                      Learn, share, and discuss technology.
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


