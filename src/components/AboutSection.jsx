import { useEffect, useState } from 'react';
import Btn from '../components/Btn';
import Skills from '../components/Skills.jsx';
import SocialMediaBar from '../components/SocialMediaBar';

const AboutSection = ({ sectionRef, isActive }) => {
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
      id="about"
      ref={sectionRef}
      className={`flex flex-col sm:flex-row items-center sm:items-start justify-center py-28
      min-h-screen bg-white rounded-tr-[50px] px-6 gap-6 about-me-wrap
      opacity-0 ${animate ? 'opacity-100' : ''} transition-opacity duration-500 ease-in-out
      overflow-hidden
      `}>
      <div
        id="mySelf"
        className={`flex flex-col gap-3
      sm:max-w-[447px] lg:w-2/5
      ${animate ? 'transform translate-y-0' : 'transform translate-y-full'}
      transition-transform ease-in-out duration-500 
      `}>
        <h2 className="font-bold text-4xl text-[#172B4D]">About Myself</h2>
        <p className="text-[#344563]">
          I’m a full-stack developer focused on building practical software 
          that improves how teams operate.

          I’ve worked on real-world systems involving APIs,
          dashboards, and data workflows—helping turn manual processes into efficient,
          automated solutions.

          My background isn’t traditional. I taught myself English to access global
          opportunities, worked remotely in high-pressure environments, and developed
          strong problem-solving skills along the way. That experience shaped 
          how I approach software: with resilience, adaptability, and a focus on delivering results.

          Today, I specialize in Ruby on Rails, JavaScript, and modern web technologies 
          to build scalable backend systems and clean, usable interfaces. 
          I care less about trends and more about creating software that actually 
          works in production and solves real problems.

          Fun fact: I grew up thinking everyone spoke the same language—turns out, 
          learning a new one opened the door to my entire career.
        </p>
        <SocialMediaBar />
        <div>
          <a
            href="https://drive.google.com/file/d/1rckQXpJjK18qrsFbAi8FhVgk4NnHTGtJ/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <Btn text="Get my resume" />
          </a>
        </div>
      </div>

      <div
        id="skill-list"
        className={`"w-full 
      sm:max-w-[684px] lg:w-3/5"
      ${animate ? 'transform translate-y-0 opacity-100' : 'transform translate-y-full'}
      transition-transform ease-in-out duration-500 
  `}>
        <Skills />
      </div>
    </section>
  );
};

export default AboutSection;
