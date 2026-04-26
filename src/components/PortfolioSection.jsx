import projects from "./projects";
import ProjectCard from "./ProjectCard.jsx";

const PortfolioSection = ({sectionRef, isActive}) => {
  return (
    <section id="portfolio" ref={sectionRef} className="portfolio px-6 py-28 flex flex-col gap-14 items-center">
      <div className="w-full max-w-[1156px] flex flex-col gap-3 text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6070FF]">
          Featured work
        </p>
        <h2 className="text-4xl font-bold text-[#172B4D]">
          Selected projects and private case studies
        </h2>
        <p className="max-w-3xl text-[#344563]">
          Some projects can be shared publicly, while professional work is shown as private case studies based on real experience. The layout stays the same; only the access level changes.
        </p>
      </div>
      {projects.map((project, index) => {
        return <ProjectCard key={index} project={project} index={index} isActive={isActive}/>;
      })}
    </section>
  );
};

export default PortfolioSection;