"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Leadership from "@/components/Leadership";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Skills />
        <RecentProjects />
        <Experience />
        <Education />
        <Certificates />
        <Leadership />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
