const values = [
  'Innovation',
  'Creativity',
  'TeamWork',
  'Professionalism',
  'Commitment',
  'Sustainability',
  'Success',
];

export function CoreValuesTimeline() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our Core Values
          </h2>
          <p className="text-gray-600 mt-3">
            Principles that guide how we build, collaborate, and sustain impact.
          </p>
        </div>

        {/* Timeline-inspired container */}
        <div className="relative rounded-2xl border border-gray-200 p-8 shadow-sm">
          {/* Corner pointers */}
          <span className="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-indigo-600" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-purple-600" />
          <span className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-emerald-600" />
          <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-fuchsia-600" />

          {/* Values grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
            {values.map((v, i) => (
              <div
                key={v}
                className="relative rounded-lg border border-gray-200 bg-gray-50 hover:bg-white hover:shadow-md hover:border-indigo-200 transition p-3 text-center"
              >
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gray-300" />
                <span className="text-sm font-medium text-gray-700">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


