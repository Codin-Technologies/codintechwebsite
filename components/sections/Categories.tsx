import { Button } from '@/components/ui/Button';

export function Categories() {
  return (
    <section className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Endless possibilities for all
          </h2>
          <p className="text-gray-600 text-lg mt-3 max-w-2xl">
            Empowering businesses and individuals with seamless technology solutions tailored for growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="text-xs font-semibold text-gray-500 uppercase mb-2">
              Enterprise
            </div>
            <h3 className="text-2xl font-bold mb-3">
              Online delivery and transformation
            </h3>
            <p className="text-gray-600 mb-6">
              Modernize operations and scale with robust solutions and strategic guidance.
            </p>
            <Button href="/services" variant="outline">Explore solutions</Button>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="text-xs font-semibold text-gray-500 uppercase mb-2">
              SME
            </div>
            <h3 className="text-2xl font-bold mb-3">
              Grow your small business
            </h3>
            <p className="text-gray-600 mb-6">
              Practical services to help SMEs thrive in the digital economy.
            </p>
            <Button href="/services" variant="outline">See what we do</Button>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div className="text-xs font-semibold text-gray-500 uppercase mb-2">
              Personal
            </div>
            <h3 className="text-2xl font-bold mb-3">
              Learn, connect, and build
            </h3>
            <p className="text-gray-600 mb-6">
              Get in touch, discover our story, and work with an expert team.
            </p>
            <Button href="/contact" variant="outline">Contact us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}


