import PropTypes from 'prop-types';
import Tag from './Tag';
import Btn from './Btn';
import CloseIcon from '../../public/close-popup-button.png';
import SeeProjectIcon from '../../public/see-live-icon.png';
import SeeCodeIcon from '../../public/see-source-icoin.png';

const PopUp = ({ project, handlePopUp }) => {
  return (
    <div
      id="pop-up-background"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-md min-h-screen
    px-4 md:p-6 overflow-y-auto z-40
    "
    >
      <div
        id="pop-up-container"
        className="bg-white rounded-lg p-4 z-10 flex flex-col gap-4 max-h-full overflow-y-auto 
      md:aspect-square"
      >
        <div id="pop-up-header">
          <div
            id="pop-up-title "
            className="flex justify-between items-center p-1"
          >
            <h3 className="text-3xl font-bold text-[#172B4D] ">
              {project.name}
            </h3>
            <button onClick={() => handlePopUp()}>
              <img src={CloseIcon} alt="Close Icon" />
            </button>
          </div>
          <div className="flex items-center font-semibold text-sm">
            <span className="text-[#344563]">{project.company}</span>
            <ul className="flex list-disc gap-7 text-[#7A869A] pl-5">
              <li>{project.typeOfDev}</li>
              <li>{project.date}</li>
            </ul>
          </div>
        </div>
        <div
          id="pop-up-img-frame"
          className="container h-10 sm:h-4/6 w-full bg-slate-100 min-w-[295px] min-h-[220px]"
        >
          <img
            src={project.img}
            alt={`Screenshot of ${project.name}`}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div id="pop-up-body" className="flex flex-col sm:flex-row sm:h-2/6">
          <p className="text-[#344563] sm:w-3/5">{project.descriptionDesk}</p>
          <div className="flex flex-col gap-4 sm:w-2/5">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => {
                return <Tag key={technology} text={technology} />;
              })}
            </div>
            <div className="flex items-center justify-center gap-2">
              <a href={project.liveVersion} target="_blank" rel="noreferrer">
                <Btn text="See Live" icon={SeeProjectIcon} />
              </a>
              <a href={project.source} target="_blank" rel="noreferrer">
                <Btn text="See Source" icon={SeeCodeIcon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// we can use proptypes to check the type of props
PopUp.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    typeOfDev: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    descriptionDesk: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    liveVersion: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }).isRequired,
  handlePopUp: PropTypes.func.isRequired,
};

export default PopUp;