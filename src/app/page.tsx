"use client"

import { AboutMe } from "@/components/AboutMe";
import { Banner } from "@/components/Banner";
import { BtnDownPage } from "@/components/BtnDownPage";
import { Certificates } from "@/components/Certificates";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div className={`bg-neutral-900 font-poppins h-max`}>
      <div className="h-screen bg-cover bg-gradient-to-b from-amber-950 to-neutral-900 pt-[46px]">
        <Header />
        <Banner />
        <div className="flex justify-center">
          <BtnDownPage />
        </div>
      </div>
      <div className="container mx-auto">
        <AboutMe />
      </div>
      <div className="bg-gradient-to-b
       from-neutral-900 via-amber-950 to-neutral-900">
        <div className="flex flex-col mx-auto justify-evenly py-50 lg:flex-row">
          <Education />
          <Certificates />
        </div>
      </div>
      <Projects />
      <Footer />
    </div>
  );
}
