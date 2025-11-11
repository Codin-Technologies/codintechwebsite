import { Card } from '@/components/ui/Card';

const services = [
  {
    title: 'IT Consulting',
    description:
      'Strategic consulting and expert guidance to align technology investments with business objectives. Helping you make informed decisions.',
    href: '/services',
  },
  {
    title: 'Software Development',
    description:
      'Custom software solutions built with modern frameworks and best practices. Tailored to your unique business needs.',
    href: '/services',
  },
  {
    title: 'Digital Transformation',
    description:
      'End-to-end transformation services leveraging cloud, AI, and automation technologies to modernize your operations.',
    href: '/services',
  },
  {
    title: 'Cybersecurity',
    description:
      'Comprehensive security services to protect your critical assets and ensure compliance with industry standards.',
    href: '/services',
  },
  {
    title: 'Cloud Solutions',
    description:
      'Cloud migration, optimization, and managed services for scalable, secure, and cost-effective infrastructure.',
    href: '/services',
  },
  {
    title: 'Data & Analytics',
    description:
      'Transform data into actionable insights with advanced analytics and AI-powered solutions for better decision-making.',
    href: '/services',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-indigo-600 mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Comprehensive technology solutions for modern challenges
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            From strategy to execution, we deliver end-to-end services that 
            accelerate digital transformation and drive sustainable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={service.title} className="relative overflow-hidden group">
              {/* Accent gradient ring */}
              <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-linear-to-br from-indigo-500/10 via-purple-500/10 to-transparent blur-3xl group-hover:from-indigo-500/20 group-hover:via-purple-500/20 transition-colors" />

              {/* Number badge (no icons) */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-sm">
                  {(index + 1).toString().padStart(2, '0')}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Subtle divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4" />

              {/* Footer CTA */}
              <a
                href={service.href}
                className="relative inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm transition-all after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-indigo-600 hover:after:w-full"
              >
                Learn more
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

