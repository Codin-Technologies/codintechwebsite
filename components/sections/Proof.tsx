export function Proof() {
  const items = [
    {
      title: 'Focused on shipping',
      detail:
        'We deliver in small, weekly increments with demos, so you see progress early and often.',
    },
    {
      title: 'Modern, reliable stack',
      detail:
        'Next.js, React, TypeScript, TailwindCSS, Node.js, and Postgres—production‑proven, easy to maintain.',
    },
    {
      title: 'Security by default',
      detail:
        'Private repos, code reviews, dependency scanning, and environment‑based secrets management.',
    },
    {
      title: 'Engagements we take on',
      detail:
        'MVPs, marketing sites, dashboards, internal tools, integrations, and automation.',
    },
    {
      title: 'Time to first value',
      detail:
        'Typical projects reach a usable first release within 1–2 weeks, depending on scope.',
    },
    {
      title: 'Communication',
      detail:
        'Dedicated chat channel and a clear single point of contact. Response within one business day.',
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-xs font-semibold text-gray-700 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
            What to expect from us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Credibility you can verify without vanity metrics
          </h2>
          <p className="text-lg text-gray-600 mt-3">
            We’re early—so we focus on practices that consistently deliver results and reduce risk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="relative bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-indigo-600 to-purple-600" />
              <h3 className="text-base font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


