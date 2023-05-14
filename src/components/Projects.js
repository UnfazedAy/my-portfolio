import ProjectCards from "./ProjectCards";
import projectData from "./ProjectData";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Projects() {
  const myProjects = projectData.map((project) => {
    return <ProjectCards key={project.id} {...project} />;
  });

  return (
    <div id="project" className="container mx-auto p-6">
      <h2 className="font-bold text-2xl md:text-3xl mb-4">Projects</h2>
      {/* Project Cards */}
      <div className="hidden md:flex md:flex-wrap">{myProjects}</div>

      {/* Carousel */}
      <div className="md:hidden">
        <Carousel showThumbs={false} showStatus={false}>
          {myProjects}
        </Carousel>
      </div>
      <p>
        For more visit my{" "}
        <a
          href="https://github.com/UnfazedAy"
          target="_blank"
          rel="noreferrer"
          className="text-thickBrownishYellow"
        >
          github
        </a>{" "}
        page.
      </p>
    </div>
  );
}
