"use client"


import ContactHero from "@/components/Contact/ContactHero";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactForm from "@/components/Contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7f9f6]">

      {/* Hero Section */}
      <ContactHero />

      {/* Contact Information & Form */}
      <section className="bg-[#f7f9f6] pb-16">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-6 px-6 md:grid-cols-[1fr_1.03fr] md:px-10">

          {/* Left Side */}
          <div>
            <ContactInfo />
          </div>

          {/* Right Side */}
          <div>
            <ContactForm />
          </div>

        </div>
      </section>

    </main>
  );
}
