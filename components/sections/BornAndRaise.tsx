import { Button } from '@/components/ui/Button';
const values = [
  {
    title: 'Born',
    description:
      'The genesis of Codin Technologies - born from a vision to make advanced technology accessible to all organizations, regardless of size.',
    accent: 'from-indigo-600 to-purple-600',
    badge: '</>',
  },
  {
    title: 'Raise',
    description:
      'We elevate our clients through innovative solutions, helping SMEs grow, scale, and thrive in the digital economy.',
    accent: 'from-emerald-600 to-teal-600',
    badge: '{ }',
  },
];

const coreValues = [
  'Innovation',
  'Creativity',
  'TeamWork',
  'Professionalism',
  'Commitment',
  'Sustainability',
  'Success',
];

export function BornAndRaise() {
  return (
    <section className="py-24 bg-white text-black relative overflow-hidden">
      {/* Subtle gradient background accents (light theme) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-linear-to-br from-indigo-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-linear-to-br from-emerald-500/10 via-teal-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-xs font-semibold text-gray-700 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Our Story
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Born and Raise: Building with purpose
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every great journey begins with a single step. At Codin, we were born from a commitment
            to bridge the technology gap, and we raise businesses to new heights through innovation.
          </p>
        </div>

        {/* Born & Raise as distinct white cards (mockup-inspired) */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {values.map((value, idx) => (
            <div
              key={value.title}
              className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-all"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${value.accent}`}
              />
              <div className="mb-4 flex items-center gap-3">
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${value.accent} text-white font-bold`}
                >
                  {value.badge}
                </div>
                <span className="text-xs font-mono text-gray-500">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Impact section moved to its own component */}

        {/* Core Values */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
          <div className="flex flex-wrap gap-3">
            {coreValues.map((value) => (
              <span
                key={value}
                className="px-4 py-2 rounded-full text-sm font-medium border border-gray-200 bg-gray-50 text-gray-700 hover:bg-white hover:border-indigo-200 hover:text-indigo-700 transition-colors"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

