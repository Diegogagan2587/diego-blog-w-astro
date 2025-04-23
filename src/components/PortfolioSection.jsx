import projects from "./projects";
import ProjectCard from "./ProjectCard.jsx";

const PortfolioSection = ({sectionRef, isActive}) => {
  return (
    <section id="portfolio" ref={sectionRef} className="portfolio px-6 py-28 flex flex-col gap-24 items-center">
      {/* for each project we will render a component*/}
      {projects.map((project, index) => {
        return <ProjectCard key={index} project={project} index={index} isActive={isActive}/>;
      })}
    </section>
  );
};

export default PortfolioSection;