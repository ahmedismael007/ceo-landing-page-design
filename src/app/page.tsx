import Header from "@/components/home/Header";
import Features from "../components/home/Features";
import WhoAreWe from "@/components/home/WhoAreWe";
import Services from "@/components/home/Services";
import Pricing from "@/components/home/Pricing";
import Partners from "@/components/home/Partners";

export default function Page() {

  return (
    <main className="grid grid-cols-1 gap-20">
      <Header />
      <WhoAreWe />
      <Features />
      <Services />
      <Pricing />
      <Partners />
    </main>
  );
}
