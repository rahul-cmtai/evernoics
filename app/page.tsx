import HeroSection from "@/components/home/hero-section";
import IndustryWeServe from "@/components/home/industry-we-serve";  
import AllInOne from "@/components/home/all-iin-one";
import Testimonial from "@/components/home/testimonial";
import VehicleTrack from "@/components/home/vehicle-track";
import WhyChooseUs from "@/components/home/why-choose-us";
import HowWeAre from "@/components/home/how-we-are";
export default function Home() {
  return (
    <>
      <HeroSection />
      <IndustryWeServe />
      <AllInOne />
      <Testimonial />
      <VehicleTrack />
      <WhyChooseUs />
      <HowWeAre />
    </>
  );
} 