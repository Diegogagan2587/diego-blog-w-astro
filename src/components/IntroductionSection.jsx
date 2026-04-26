import { useEffect, useState } from 'react';
import SocialMediaBar from '../components/SocialMediaBar';

const IntroductionSection = ({sectionRef, isActive}) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(false)
      setTimeout(() => {
        setAnimate(true)
      }, 500);
    
  }, [isActive]);

  useEffect(() => {
    // Set animate to true after the component mounts
    setAnimate(true);
  }, []);
  return (
    <section
      id="introduction-section"
      ref={sectionRef}
      className="p-6 border-t-[36px] border-t-hidden w-full bg-white h-screen flex flex-col justify-center items-center debug
      rounded-bl-[64px] border-2
      bg-[url('/header-shapes-mobile@2x.svg')] bg-no-repeat bg-cover
      md:bg-[url('/header-shapes-desktop@2x.svg')] md:bg-no-repeat md:bg-cover md:bg-right-bottom
      "
      //style={backgroundStyle}
    >
      <div className="flex flex-col gap-5 max-w-[920px]">
        <div
          className={`flex flex-col gap-5 overflow-hidden
        opacity-0 ${
          animate ? 'opacity-100' : ''
        } transition-opacity duration-500 ease-in-out
        `}
        >
          <h1
            className={`text-4xl font-bold leading-[52px] text-[#172B4D]
                ${
                  animate
                    ? 'transform translate-y-0 opacity-100'
                    : 'transform translate-y-full'
                }
                transition-transform ease-in-out duration-500 
          `}
          >
            I&apos;m Diego Vidal,
            <br />a Full-stack Web Developer.
          </h1>
          <p
            className={`text-base leading-6 text-[#344563]
          ${
            animate
              ? 'transform translate-y-0 opacity-100'
              : 'transform translate-y-full '
          }
          transition-transform ease-in-out duration-500 delay-100
          `}
          >
            Full-stack developer with strong experience in Rails, APIs, 
            and data workflows. I create internal systems, dashboards, and integrations
            that replace manual tasks and improve efficiency. I work with React, Tailwind,
            PostgreSQL, and modern development practices—from building and testing
            to debugging and deployment. 
            No fluff—just practical software that solves real problems.
          </p>
        </div>
        <SocialMediaBar />
      </div>
    </section>
  );
};

export default IntroductionSection;
