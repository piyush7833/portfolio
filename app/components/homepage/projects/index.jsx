import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <div id="projects" className="relative z-50  my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 6).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-3xl sticky"
              style={{ top: `${index * 5}rem` }}
            >
              <div className="relative group">
                <div
                  className={`absolute top-0 right-0 px-2 py-1 rounded-full z-[99999999] transform -translate-y-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform duration-300 w-4 h-4 ${
                    project.status === "Completed" ? "bg-green-500" : "bg-yellow-500"
                  }`}
                >
                  <span className="tooltip-text bg-gray-700 text-white text-xs rounded py-1 px-4 absolute z-10 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.status === "Completed"
                      ? "Completed"
                      : "Developing..."}
                  </span>
                </div>
              </div>

              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
