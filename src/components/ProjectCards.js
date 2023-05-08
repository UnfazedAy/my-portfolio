import Project from './Project';
import projectData from './ProjectData';

export default function ProjectCards() {
  const myProjects = projectData.map((projects) => {
    return (
      <Project
        key={projects.id}
        {...projects}
      />
    )
  });

  return (
    <div>
      {myProjects}
    </div>
  );
}