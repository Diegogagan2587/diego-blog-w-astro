import Btn from './Btn';

const ContactForm = ({sectionRef}) => {
  return (
    <div className="bg-white" ref={sectionRef}>
      <div
        id="contact"
        className="bg-[url('./background-form-mobile-react.svg')] bg-no-repeat bg-contain bg-right
        md:bg-[url('./assets/img/background-form-desktop-react.svg')] md:bg-no-repeat md:bg-contain md:bg-center
        border-2 rounded-tl-[68px] bg-[#6070FF] min-h-screen px-6 pt-24 flex justify-center items-center"
      >
        <div className='flex flex-col sm:max-w-[801px] sm:max-h-[577px] gap-3 md:px-[177px]'>
        <h2 className="font-bold text-4xl text-center text-white">
          <span className='text-white'>
          Contact me
          </span>
        </h2>
        <p className="text-xl leading-7 text-center text-[#EBEBFF]">
          If you have an application you are interested in developing, a feature
          that you need built or a project that needs coding. I’d love to help
          with it!.
          contact me at <strong>diego27796gagan@gmail.com</strong> or fill out the form below.
        </p>
        <form action="https://formspree.io/f/mbjewygq" method="POST" className='flex flex-col gap-5'>
          <div className="form-group">
            <label htmlFor="name">
              <input type="text" id="name" name="name" placeholder="name" maxLength="30" required className='w-full rounded-lg p-2 bg-white'/>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              <input type="email" id="email" name="email" placeholder="email@domain.com" required className='w-full rounded-lg p-2 bg-white'/>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="message">
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                maxLength="500"
                required
                className='w-full rounded-lg p-2 h-36 bg-white'
              />
            </label>
          </div>
          <div>
            <Btn type="submit" text="Get in touch" />
          </div>
        </form>
        </div>
        
      </div>
    </div>
  );
};

export default ContactForm;