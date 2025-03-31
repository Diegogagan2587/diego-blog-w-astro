import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Btn from './Btn';
import Tag from './Tag';
import PopUp from './PopUp';

const ProjectCard = ({ project,index, isActive }) => {
  const [popUp, setPopUp] = useState(false);
  const [animate, setAnimate] = useState(false);
  const desktopFlexDirection = index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse";
  
  useEffect(() => {
    console.log('is active?',isActive)
    setAnimate(false);
    setTimeout(() => {
      setAnimate(true);
    }, 500);
  }, [isActive]);

  useEffect(() => {
    // Set animate to true after the component mounts
    setAnimate(true);
  }, []);

  const handlePopUp = () => {
    console.log('pop up should open or close');
    setPopUp(!popUp);
    console.log('is Popup open?',popUp);
  };
  return (
    <>
    {popUp && <PopUp project={project} handlePopUp={handlePopUp}/>}
    <div id={`project-card-${index}`} 
    className={`card bg-white border-2 hover:border-[#A7AEFF] rounded-xl p-4 flex flex-col ${desktopFlexDirection} 
     gap-3 md:aspect-[145/62] 
    hover:scale-105 hover:shadow-xl transition-all duration-500 ease-in-out
    max-w-[343px] md:max-w-[1156px] md:max-h-[496px] lg:overflow-hidden
    opacity-0 ${animate ? 'opacity-100' : ''} transition-opacity duration-500 ease-in-out
    `}>
      <div id='project-img' 
      className="container bg-slate-100 sm:overflow-hidden
      flex items-center justify-center
       md:max-h-[448px] w-full md:w-1/2 min-w-[295px] min-h-[220px] md:min-w-[220px]
      rounded-md border-2">
         <img 
        src={project.img} 
        alt={`Screenshot of ${project.name}`} 
        className={`object-cover sm:object-contain justify-center items-center
        w-full h-full rounded-lg
        ${animate ? 'transform translate-y-0' : 'transform translate-y-full'}
        transition-transform ease-in-out duration-500 
        `}
        /> 
      </div>
      <div id='project-info'
        className={`card-body flex flex-col gap-3 md:p-6
        min-w-[295px] sm:min-w-auto sm:w-1/2 min-h-[288px]
        ${animate ? 'transform translate-y-0' : 'transform translate-y-full'}
        transition-transform ease-in-out duration-500 
      `}
      >
        <h5 className="card-title font-bold text-3xl text-[#172B4D]">
          {project.name}
        </h5>
        <div className="flex items-center py-2 font-semibold text-sm">
          <span className="text-[#344563]">{project.company}</span>
          <ul className="flex list-disc gap-7 text-[#7A869A] pl-5">
            <li>{project.typeOfDev}</li>
            <li>{project.date}</li>
          </ul>
        </div>
        <p className="card-text text-[#344563]">{project.description}</p>
        <ul className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => {
            return <Tag key={technology} text={technology} />;
          })}
        </ul>
        <div>
          <Btn text="See Project" onClick={()=>handlePopUp()}/>
          
        </div>
      </div>
    </div>
    </>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default ProjectCard;