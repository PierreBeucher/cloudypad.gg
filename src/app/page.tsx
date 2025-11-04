"use client";
import FAQSection from "@/components/home/Faq";
import FooterSection from "@/components/home/Footer";
import HeroSection from "@/components/home/Hero";
import FeatureGridSection from "@/components/home/FeatureGrid";
import FeatureCardSection from "@/components/home/FeatureCard";
import HeaderSection from "@/components/home/Header";
import ActionSection from "@/components/home/ActionSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeaderSection />
      <HeroSection /> {/* Hero Section */}
      <FeatureGridSection />. {/* tagline & feature-grid Section */}
      <FeatureCardSection /> {/* Features Section */}
      <FAQSection /> {/* FAQ Section */}
      {/* Action Section */}
      <ActionSection />
      {/* Footer */}
      <FooterSection />
    </div>
  );
}