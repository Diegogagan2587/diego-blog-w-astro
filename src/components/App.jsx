
import IntroductionSection from './IntroductionSection';
import NavigationBar from './NavigationBar';
import PortfolioSection from './PortfolioSection';
import BlogSection from './BlogSection';
import AboutSection from './AboutSection';
import ContactForm from './ContactForm';
import { useRef, useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('introduction'); 
  // ['introductionRef', 'portfolioRef', 'aboutRef', 'contactRef'
  const introductionRef = useRef(null);
  const portfolioRef = useRef(null);
  const blogRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (refName) => {
    const sectionRef = {
      introductionRef,
      portfolioRef,
      blogRef,
      aboutRef,
      contactRef,
    }[refName];

    if (sectionRef) {
       sectionRef.current.scrollIntoView({ behavior: 'smooth' })
        setActiveSection(refName);
    }
  };

  return (
    <>
      <header className='font-poppins'>
        <NavigationBar scrollToSection={scrollToSection} activeSection={activeSection}/>
      </header>
      <main className='bg-[#F4F5F7] font-poppins home-main'>
        <IntroductionSection sectionRef={introductionRef} isActive={activeSection === 'introductionRef'}/>
        <PortfolioSection sectionRef={portfolioRef} isActive={activeSection==='portfolioRef'}/>
        <BlogSection sectionRef={blogRef} isActive={activeSection === 'blogRef'} />
        <AboutSection sectionRef={ aboutRef } isActive={activeSection==='aboutRef'}/>
        <ContactForm sectionRef={ contactRef } isActive={activeSection==='contactRef'}/>
      </main>
    </>
  );
}

export default App;