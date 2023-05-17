import ProjectCards from "./ProjectCards";
import projectData from "./ProjectData";
import Carousel from 'react-material-ui-carousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Projects() {
  const myProjects = projectData.map((project) => {
    return <ProjectCards key={project.id} {...project} />;
  });

  return (
    <div id="project" className="container mx-auto p-6">
      <div className="flex space-x-3">
        <h2 className="font-bold text-2xl md:text-3xl mb-4">Projects</h2>
        <FontAwesomeIcon icon="fa-solid fa-laptop" size="2xl" color="hsl(39, 97%, 55%)" />
      </div>
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
