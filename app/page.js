import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import LogoCloud from './components/sections/LogoCloud';
import About from './components/sections/About';
import Services from './components/sections/Services';
import StatsCTA from './components/sections/StatsCTA';
import Process from './components/sections/Process';
import Testimonials from './components/sections/Testimonials';
import Blog from './components/sections/Blog';
import ContactFAQ from './components/sections/ContactFAQ';

export default function Home() {
  return (
    <main suppressHydrationWarning>
      <Navbar />
      <Hero />
      <LogoCloud />
      <About />
      <Services />
      <StatsCTA />
      <Process />
      <ContactFAQ />
      <Testimonials />
      <Blog />
      <Footer />
    </main>
  );
}
