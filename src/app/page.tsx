import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SupportedBy from '@/components/SupportedBy';
import AboutWorkshop from '@/components/AboutWorkshop';
import Objectives from '@/components/Objectives';
import Schedule from '@/components/Schedule';
import ResourcePersons from '@/components/ResourcePersons';
import Committee from '@/components/Committee';
import PaymentSection from '@/components/PaymentSection';
import RegistrationForm from '@/components/RegistrationForm';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SupportedBy />
        <AboutWorkshop />
        <Objectives />
        <Schedule />
        <ResourcePersons />
        <Committee />
        <PaymentSection />
        <RegistrationForm />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
