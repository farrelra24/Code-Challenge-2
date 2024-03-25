import Image from "next/image";
import Hero from "~/components/hero";
import Overview from "~/components/overview";
import Specialization from "~/components/specialization";
import WhyChooseUs from "~/components/whychooseus";
import Testimony from "~/components/testimony";

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <Specialization />
      <WhyChooseUs />
      <Testimony />
    </>
  );
}
