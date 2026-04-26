import PropTypes from 'prop-types';
import Tag from './Tag';
import Btn from './Btn';
const CloseIcon = '/close-popup-button.png';
const SeeProjectIcon = '/see-live-icon.png';
const SeeCodeIcon = '/see-source-icoin.png';

const PopUp = ({ project, handlePopUp }) => {
  const isPrivate = project.visibility === 'private';

  return (
    <div
      id="pop-up-background"
      className="fixed inset-0 bg-black/50 flex justify-center items-start md:items-center backdrop-blur-md min-h-screen px-4 py-6 overflow-y-auto z-40"
    >
      <div
        id="pop-up-container"
        className="bg-white rounded-lg p-4 md:p-6 z-10 flex flex-col gap-4 w-full max-w-5xl max-h-[calc(100vh-3rem)] overflow-y-auto"
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
          <div className="flex flex-wrap items-center gap-2 font-semibold text-sm">
            <span className="text-[#344563]">{project.company}</span>
            <ul className="flex list-disc gap-7 text-[#7A869A] pl-5">
              <li>{project.typeOfDev}</li>
              <li>{project.date}</li>
            </ul>
            {isPrivate && (
              <span className="rounded-full bg-[#EBF0FF] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#396DF2]">
                Private case study
              </span>
            )}
          </div>
        </div>
        <div
          id="pop-up-img-frame"
          className="w-full bg-slate-100 min-h-[220px] md:min-h-[320px] rounded-lg overflow-hidden"
        >
          <img
            src={project.img}
            alt={`Screenshot of ${project.name}`}
            className="object-cover w-full h-full"
          />
        </div>
        <div id="pop-up-body" className="flex flex-col gap-4 md:grid md:grid-cols-[1.6fr_1fr] md:items-start">
          <p className="text-[#344563] leading-7">{project.descriptionDesk}</p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <Tag key={technology} text={technology} />
              ))}
            </div>
            {isPrivate ? (
              <div className="rounded-lg border border-[#DFE1E6] bg-[#F8F9FB] p-4 text-sm text-[#344563]">
                Source code and live access are private due to confidentiality.
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <a href={project.liveVersion} target="_blank" rel="noreferrer">
                  <Btn text="See Live" icon={SeeProjectIcon} />
                </a>
                <a href={project.source} target="_blank" rel="noreferrer">
                  <Btn text="See Source" icon={SeeCodeIcon} />
                </a>
              </div>
            )}
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
    visibility: PropTypes.string,
    liveVersion: PropTypes.string,
    source: PropTypes.string,
  }).isRequired,
  handlePopUp: PropTypes.func.isRequired,
};

export default PopUp;