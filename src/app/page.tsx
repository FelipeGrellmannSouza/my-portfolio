"use client"

import { AboutMe } from "@/components/AboutMe";
import { Banner } from "@/components/Banner";
import { BtnDownPage } from "@/components/BtnDownPage";
import { Certificates } from "@/components/Certificates";
import { Education } from "@/components/Education";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className={`bg-neutral-900 font-poppins h-max`}>
      <div className="h-screen bg-cover bg-gradient-to-b from-amber-950 to-neutral-900">
        <Header />
        <Banner />
        <div className="flex justify-center">
          <BtnDownPage />
        </div>
      </div>

      <div className="container mx-auto" id="aboutme">
        <AboutMe />
      </div>
      <div className="flex mx-auto justify-around mt-10 py-50 bg-gradient-to-b from-neutral-900 via-amber-950 to-neutral-900">
        <Education />
        <div>
          <Certificates />
        </div>
      </div>


    </div>
  );
}
