import React from 'react'

import WorkshopHeroSection from "./components/HeroSection";
import AboutWorkshopSection from "./components/AboutWorkshopSection";
import EligibilitySection from "./components/EligibilitySection";
import OrganizingCommitteeSection from "./components/OrganizingCommitteeSection";
import RegistrationSection from "./components/RegistrationSection";
import ScheduleTimeline from './components/Schedule';

const Home = () => {
  return (
    <main className="min-h-screen  bg-white">
      <WorkshopHeroSection />
      <AboutWorkshopSection />
      <EligibilitySection />
      <OrganizingCommitteeSection />
      <RegistrationSection />
      <ScheduleTimeline/>
    </main>
  );
}

export default Home