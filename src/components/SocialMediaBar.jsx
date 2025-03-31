import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faXTwitter,
  faLinkedinIn,
  faGithub,
  faAngellist,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';


const SocialMediaBar = () => {
    const GITHUB_URL = 'https://github.com/Diegogagan2587'
    const LINKEDIN_URL = 'https://www.linkedin.com/in/diego-vidal-lopez/'
    const TWITTER_URL = 'https://twitter.com/dieg02587'
    const ANGELLIST_URL = 'https://wellfound.com/u/diego-vidal-lopez'
    const MEDIUM_URL = 'https://medium.com/@diego27796gagan'

  return (
    <div id="social-media" className='flex flex-col gap-4'>
      <span className="text-base font-medium text-[#7F8CFF]">
        LET&apos;S CONNECT
      </span>
      <ul className="h-5 
      flex gap-5 items-center text-xl text-[#505F79]">
        <li  className='hover:drop-shadow-2xl hover:scale-125  active:animate-ping transition-transform duration-300'> 
          <a href={GITHUB_URL} target='_blank' rel='noreferrer' >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          {/* I add and <a> that opens a link in an new tab in next line */}
        </li>
        <li  className='hover:drop-shadow-2xl hover:scale-125 active:animate-ping transition-transform duration-300'> 
        <a href={LINKEDIN_URL} target='_blank' rel='noreferrer' >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li  className='hover:drop-shadow-2xl hover:scale-125 active:animate-ping transition-transform duration-300'> 
          <a href={TWITTER_URL} target='_blank' rel='noreferrer' >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </li>

        <li  className='hover:drop-shadow-2xl hover:scale-125 active:animate-ping transition-transform duration-300'> 
        <a href={ANGELLIST_URL} target='_blank' rel='noreferrer' >
          <FontAwesomeIcon icon={faAngellist} />
          </a>
        </li>
        <li  className='hover:drop-shadow-2xl hover:scale-125 active:animate-ping transition-transform duration-300'> 
        <a href={MEDIUM_URL} target='_blank' rel='noreferrer' >
          <FontAwesomeIcon icon={faMedium} />
          </a>
        </li>
        <li  className='hover:drop-shadow-2xl hover:scale-125 active:animate-ping transition-transform duration-300'> 
          <a href="mailto:diego27796gagan@gmail.com" target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default SocialMediaBar;