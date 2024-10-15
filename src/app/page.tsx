import Features from "@/components/sections/features";
import Footer from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero-section";
import Steps from "@/components/sections/steps";

export const runtime = 'edge';
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <Features />
      <Steps />
      <Footer />
    </main>
  );
}
