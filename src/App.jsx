import Banner from "./components/Banner";
import ClientSites from "./components/ClientSites";
import ContactForm from "./components/ContactForm";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PoweredBy from "./components/PoweredBy";
import SectionWithVideo from "./components/SectionWithVideo";
import Statistics from "./components/Statistics";
import Testimonial from "./components/Testimonial";
import Features from "./components/Features";
import PricingCard from "./components/PricingCard";
import Benefits from "./components/Benefits";

function App() {


  return (
    <>
      <Header />
      <HeroSection/>
      <PoweredBy />
      <Statistics />
      <Features />
      <Testimonial/>
      <PricingCard />
      <FaqSection/>
      <SectionWithVideo />
      <Banner />
      <ClientSites/>
      <Benefits />
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default App
