"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 sm:gap-4 list-none pl-0">
        <li>Python</li>
        <li>SQL</li>
        <li>Power BI</li>
        <li>Tableau</li>
        <li>Excel</li>
        <li>Qlik Sense</li>
        <li>Prompt Engineering</li>
        <li>GitHub</li>
        <li>Jira</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Vellore Institute of Technology, Bhopal (B.Tech CSE 2025 , CGPA:8.1) </li>
        <li>Krishna Public School, Raipur (Senior Secondary Education,2021) </li>
        <li>Krishna Public School, Raipur (Secondary School Education, 2019)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Google Data Analytics Professional Certificate</li>
        <li>Data Analytics Job Simulation</li>
        <li>Business Analytics Virtual Internship Program – Qlik</li>
        <li>Applied Machine Learning in Python</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Using <video> instead of <Image> */}
        <video
          className="w-full rounded-lg max-w-md mx-auto md:max-w-none"
          autoPlay
          loop
          muted
          playsInline
          source src="/videos/da-gif.mp4" type="video/mp4" // Ensure the video is placed inside the "public/videos" directory
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a Data Analyst passionate about turning raw data into actionable insights to drive informed business decisions. My expertise includes Python, SQL, Excel, Tableau, Power BI, and Qlik Sense. I specialize in data cleaning, analysis, and visualization using libraries like Pandas, NumPy, Matplotlib, Seaborn, and Plotly. I have hands-on experience in automating workflows, building interactive dashboards, and generating meaningful reports. I also leverage GitHub, Jira, and prompt engineering to streamline analytics processes and deliver scalable business intelligence solutions.
            <br />
          </p>          <div className="flex flex-row justify-start mt-8 flex-wrap gap-2">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;