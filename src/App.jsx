import About from "./components/About.jsx";
import Catalog from "./components/Catalog.jsx";
import Contact from "./components/Contact.jsx";
import FAQ from "./components/FAQ.jsx";
import FloatingWhatsApp from "./components/FloatingWhatsApp.jsx";
import Footer from "./components/Footer.jsx";
import Gallery from "./components/Gallery.jsx";
import Hero from "./components/Hero.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Navbar from "./components/Navbar.jsx";
import OpeningIntro from "./components/OpeningIntro.jsx";
import OrderForm from "./components/OrderForm.jsx";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-cream text-cocoa">
      <OpeningIntro />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Catalog />
        <Gallery />
        <OrderForm />
        <HowItWorks />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
