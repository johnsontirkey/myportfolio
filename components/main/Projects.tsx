import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-auto w-auto flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Portfolio Website"
          description="Portfolio website created using Next.js"
        />
        <ProjectCard
          src="/fras2.png"
          title="Facial Recognition Attendance System"
          description="Machine learning based attendance system to track attendance of students using Facial Recognition"
        />
        <ProjectCard
          src="/shiroi.png"
          title="Women Safety App with Security SMS Alert System"
          description="A mobile application developed using Flutter, Dart, and Firebase, designed to enhance women's safety by providing emergency SOS alerts, real-time location tracking, complaint submission, and more."
        />        
      </div>
    </div>
  );
};

export default Projects;