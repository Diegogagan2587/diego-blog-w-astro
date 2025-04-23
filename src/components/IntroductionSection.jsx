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
            I can help you turn designs into functional single-page
            applications, craft Server Side Rendering Websites, and develop
            powerful APIs—from code creation to deployment. Using JavaScript,
            React, Redux, Tailwind-CSS, Ruby on Rails, PostgreSQL, and more. I
            bring over 2,500 hours of hands-on experience in building, testing,
            and debugging software.
            Explore my work below or reach out through the Contact
            Section to discuss how I can contribute to your projects. I&apos;m
            ready to answer any questions you may have!
          </p>
        </div>
        <SocialMediaBar />
      </div>
    </section>
  );
};

export default IntroductionSection;