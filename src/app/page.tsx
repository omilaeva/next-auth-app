import {HeroSection} from "@/components/sections/HeroSection";
import {FeatureSection} from "@/components/sections/FeatureSection";
import {HowItWorksSection} from "@/components/sections/HowItWorksSection";
import {TestimonialSection} from "@/components/sections/TestimonialSection";
import {PricingSection} from "@/components/sections/PricingSection";
import {CtaSection} from "@/components/sections/CtaSection";
import {auth} from "@/lib/auth";
import {redirect} from "next/navigation";
import Navbar from "@/components/Navbar";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";


export default async function Home() {
  const session = await auth();

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <>
      <Header><Navbar/></Header>
      <div>
        <HeroSection/>
        <FeatureSection/>
        <HowItWorksSection/>
        <TestimonialSection/>
        <PricingSection/>
        <CtaSection/>
      </div>
      <Footer/>
    </>
  );
}
