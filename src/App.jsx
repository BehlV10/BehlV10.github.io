import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResumeSection from './components/ResumeSection';
import FlagshipProjectsSection from './components/FlagshipProjectsSection';
import ClientProjectsSection from './components/ClientProjectsSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* Full Executive Resume View */}
        <ResumeSection onPrintResume={() => setResumeModalOpen(true)} />

        {/* Featured Projects (BoroHop, Housing Aggregator, Tight Pants Comedy, Wicked Boston, NYC Events, Dracula's Masquerade) */}
        <FlagshipProjectsSection />

        {/* Other Projects & Client Showcases */}
        <ClientProjectsSection />
      </main>

      {/* Footer */}
      <Footer onOpenResumeModal={() => setResumeModalOpen(true)} />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
