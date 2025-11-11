import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Impact } from '@/components/sections/Impact';
import { Proof } from '@/components/sections/Proof';
import { CoreValuesTimeline } from '@/components/sections/CoreValuesTimeline';
import { BornAndRaise } from '@/components/sections/BornAndRaise';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { Categories } from '@/components/sections/Categories';

export default function Home() {
  return (
    <>
      <Hero />
      <Impact />
      <Proof />
      <CoreValuesTimeline />
      <Services />
      <BornAndRaise />
      <Testimonials />
      <CTA />
      <Categories />
    </>
  );
}
