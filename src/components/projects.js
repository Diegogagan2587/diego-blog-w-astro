//const imgMetricsWebApp = '/assets/img/projects/metrics-web-app.png';
const imgSpaceTravelersHub = '/space-travelers-hub.png';
//const imgMathMagicians = '/assets/img/projects/Math-Magicians.png';
const imgCreativeDevelopers = "/feature-creative-developers.png";
//const imgTodayToDo = '/assets/img/projects/capstone-projeect-2.png';
const imgWorldWideFlags = '/world-wide-flags.png';
// const imgAwesomeBooks = '/assets/img/projects/awesome-books.png';
//const imgDocumentationPage = '/assets/img/projects/documentation-page.png';
const imgProductLandingPage = '/landing-page-original-trombones.png';
// const imgTributePage = '/assets/img/projects/tribute-page.png';
const bookAConcert = '/book-a-concert.png';
const recipeApp = '/recipe-app-best-dishes.png';
const budgetApp = '/budget-app-live-demo.png';
//const catalogueOfThings = '/assets/img/projects/catalogue-of-my-things.png';

const projects = [
  {
    name: 'Book a Concert',
    company: 'Self-employed',
    typeOfDev: 'Full-stack',
    date: '2023',
    description:
      '"Book a Concert" is a Single Page Application (SPA) and an API designed to assist users in booking concerts or creating independent events for others to book.',
    descriptionDesk:
      '"Book a Concert" is a Single Page Application (SPA) and an API designed to assist users in booking concerts or creating independent events for others to book. Users can register, reserve, create independent concerts, or cancel an event if they are the organizer. Built with React, Redux, Tailwind CSS, Ruby on Rails, and PostgreSQL.',
    img: bookAConcert,
    liveVersion: 'https://book-a-concert.onrender.com/',
    source: 'https://github.com/Diegogagan2587/Book-a-concert-front-end',
    technologies: [
      'HTML5',
      'Tailwind-CSS',
      'Javascript',
      'React',
      'Redux',
      'Ruby',
      'Rails',
      'PostgreSQL',
    ],
  },
  {
    name: 'Recipe App Best Dishes',
    company: 'Self-employed',
    typeOfDev: 'Full-stack',
    date: '2023',
    description:
      '"Recipe App" is a Server-side Rendering application (SSR) following the MVC architecture. It assists users in storing and tracking their recipes and ingredients.',
    descriptionDesk:
      '"Recipe App" is a Server-side Rendering application (SSR) following the MVC architecture. It assists users in storing and tracking their recipes and ingredients. Users can register, create recipes (making them public if desired), and generate a shopping list based on their current inventory. Built with Ruby, Rails, Bootstrap, and PostgreSQL.',
    img: recipeApp,
    liveVersion: 'http://www.recipe-app-best-dishes.dvloper-z.com',
    source: 'https://github.com/Diegogagan2587/Recipe-app-bests-dishes',
    technologies: [
      'HTML5',
      'CSS3',
      'Bootstrap',
      'Ruby',
      'Rails',
      'PostgreSQL',
      'RSpec',
      'Capybara',
    ],
  },
  {
    name: 'Budget-App',
    company: 'Self-employed',
    typeOfDev: 'Full-stack',
    date: '2023',
    description:
      '"Budget App" is a Server-side Rendering application (SSR) following the MVC architecture, allowing users to efficiently manage their budget.',
    descriptionDesk:
      '"Budget App" is a Server-side Rendering application (SSR) following the MVC architecture, allowing users to efficiently manage their budget. Users can register, add transactions, and create new categories. The application is built with JavaScript, Ruby, Rails, Tailwind CSS, and PostgreSQL.',
    img: budgetApp,
    liveVersion: 'https://www.budget-app.dvloper-z.com',
    source: 'https://github.com/Diegogagan2587/budget-app',
    technologies: [
      'HTML5',
      'CSS3',
      'Tailwind-CSS',
      'Javascript',
      'Ruby',
      'Rails',
      'PostgreSQL',
      'RSpec',
      'Capybara',
    ],
  },
  {
    name: 'Space Travelers',
    description:
      '"Space Travelers" is a Single Page Application (SPA) that allows users to explore a list of rockets and missions retrieved = the Space-X API.',
    descriptionDesk:
      '"Space Travelers" is a Single Page Application (SPA) that allows users to explore a list of rockets and missions retrieved = the Space-X API. Users can click to reserve a rocket, join a mission, and view reserved or joined missions in the My Profile section. Built with HTML5, CSS3, JavaScript, and React.',
    img: imgSpaceTravelersHub,
    technologies: ['HTML', 'CSS', 'Javascript', 'React', 'Redux'],
    liveVersion:
      'https://diegogagan2587.github.io/space-travelers/',
    source:
      'https://github.com/Diegogagan2587/space-travelers/tree/development',

    imgDesk: '/assets/img/projects/space-travelers-hub.png',
    imgPopMobile: '/assets/img/projects/capstone-projeect-1.png',
    company: 'Self-employed',
    typeOfDev: 'Front-End',
    date: '2023',
  },
  // {
  //   name: 'Metrics Webapp',
  //   description:
  //     '"Metrics Web-App" is a mobile Single Page Application (SPA) that connects with an API and enables users to view the air quality of six different states in Mexico.',
  //   descriptionDesk:
  //     '"Metrics Web-App" is a mobile Single Page Application (SPA) that connects with an API and enables users to view the air quality of six different states in Mexico. Users can customize the number of cities (up to six), click on a state to explore more metrics, and easily return to the main page. Built with JavaScript, React, HTML5, and CSS3.',
  //   img: imgMetricsWebApp,
  //   technologies: ['HTML', 'CSS', 'Javascript', 'React', 'Redux'],
  //   liveVersion: 'https://diegogagan2587.github.io/metrics-webapp/',
  //   source: 'https://github.com/Diegogagan2587/metrics-webapp',

  //   imgDesk: '/assets/img/projects/metrics-web-app.png',
  //   imgPopMobile: '/assets/img/projects/metrics-web-app.png',
  //   company: 'Self-employed',
  //   typeOfDev: 'Front-End',
  //   date: '2023',
  // },
  // {
  //   name: 'Math Magicians',
  //   description:
  //     '"Math Magicians" is a Single Page App (SPA) divided into three sections: Home, Quote, and Calculator. It enables users to perform simple calculations',
  //   descriptionDesk:
  //     '"Math Magicians" is a Single Page App (SPA) divided into three sections: Home, Quote, and Calculator. It enables users to perform simple calculations such as addition, subtraction, and multiplication, in addition to reading random math-related quotes. Built with JavaScript and React.',
  //   img: imgMathMagicians,
  //   technologies: ['HTML', 'CSS', 'Javascript', 'React'],
  //   liveVersion: 'https://math-magicians-akxg.onrender.com/',
  //   source: 'https://github.com/Diegogagan2587/math-magicians',
  //   imgDesk: '/assets/img/projects/Math-Magicians.png',
  //   imgPopMobile: '/assets/img/projects/Math-Magicians.png',
  //   company: 'Self-employed',
  //   typeOfDev: 'Front-End',
  //   date: '2023',
  // },
  // {
  //   name: 'Catalogue of things',
  //   company: 'Self-employed',
  //   typeOfDev: 'command-line interface (CLI)',
  //   date: '2023',
  //   description:
  //     'Catalog of my things is a console app that will help you to keep a record of different types of things you own: books, music albums, movies, and games. Everything is based on...',
  //   descriptionDesk:
  //     'Catalog of my things is a console app that will help you to keep a record of different types of things you own: books, music albums, movies, and games. Everything is based on the UML class diagram presented in the Readme file. As well this app is able to preserve the data, data will be saved in the data that will contain a JSON file per each item. As well We have included a table representation in SQL.',
  //   img: catalogueOfThings,
  //   liveVersion: 'https://youtu.be/X8ozhDjzom0?si=Ej3x8mAcBtzWga1N',
  //   source: 'https://github.com/Diegogagan2587/catalog-of-my-things',
  //   technologies: ['Ruby', 'JSON', 'RSpec'],
  // },
  {
    name: 'Creative Developers',
    description:
      'A joyful celebration believing in the value of learning to code.',
    img: imgCreativeDevelopers,
    technologies: ['HTML', 'CSS', 'Javascript'],
    liveVersion: 'https://diegogagan2587.github.io/Capstone-project-module-1/',
    source: 'https://github.com/Diegogagan2587/Capstone-project-module-1',
    descriptionDesk:
      'The Creative Developers Summit is a gathering that embraces emerging software developers, focusing on the theme of persistence. This annual event aims to foster collaboration and knowledge sharing among developers interested in building robust and reliable software solutions. Attendees include enthusiasts = various domains such as database management, cloud computing, and data storage. Together, we explore innovative techniques, discuss best practices, and envision a future where persistence plays a crucial role in shaping the digital landscape. Join us to contribute and learn at this dynamic summit!',
    imgDesk: '/assets/img/projects/capstone-projeect-1-desktop-popup.png',
    imgPopMobile: '/assets/img/projects/capstone-projeect-1.png',
    company: 'Self-employed',
    typeOfDev: 'Front-End',
    date: '2023',
  },
  // {
  //   name: "Today's To Do",
  //   description:
  //     'To-Do list is a simple project to keep track of the daily activities.',
  //   img: imgTodayToDo,
  //   technologies: ['HTML', 'CSS', 'Javascript'],
  //   liveVersion: 'https://diegogagan2587.github.io/To-Do-List/dist/index.html',
  //   source: 'https://github.com/Diegogagan2587/To-Do-List',
  //   descriptionDesk:
  //     'To-Do list is a simple project to keep track of the daily activities. You can add, delete, or mark as completed your tasks! Close the browser and retrieve your task later!',
  //   imgDesk: '/assets/img/projects/capstone-projeect-2-desktop-popup.png',
  //   imgPopMobile: '/assets/img/projects/capstone-projeect-2.png',
  //   company: 'Self-employed',
  //   typeOfDev: 'Front-End',
  //   date: '2023',
  // },
  {
    name: 'World Wide Flags',
    description:
      'World Wide Flags is a project built based on an external API. We have selected a countries API that provides data.',
    img: imgWorldWideFlags,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveVersion:
      'https://diegogagan2587.github.io/JavaScript-Capstone-wwFlags/dist/',
    source: 'https://github.com/Diegogagan2587/JavaScript-Capstone-wwFlags',
    descriptionDesk:
      'World Wide Flags is a project built based on an external API. We have selected a countries API that provides data related to the country, such as population, sub-region, and the country flag. This web app includes two user interfaces, a home page and a pop up with more data.',
    imgDesk: '/assets/img/projects/world-wide-flags.png',
    imgPopMobile: '/assets/img/projects/world-wide-flags.png',
    company: 'Self-employed',
    typeOfDev: 'Front-End',
    date: '2023',
  },
  // {
  //   name: 'Awesome Books',
  //   description:
  //     'Awesome Books is a simple website that stores a booklist, allowing you to revisit it later and add or remove any books you would like to read.',
  //   img: imgAwesomeBooks,
  //   technologies: ['HTML', 'CSS', 'JavaScript'],
  //   liveVersion: 'https://diegogagan2587.github.io/AwesomeBook-with-ES6/',
  //   source: 'https://github.com/Diegogagan2587/AwesomeBook-with-ES6',
  //   descriptionDesk:
  //     'Awesome Books is a simple website that stores a booklist, allowing you to revisit it later and add or remove any books you would like to read. The inner workings of this project rely on JavaScript to dynamically generate the list of books based on user input and also make use of localStorage.',
  //   imgDesk: '/assets/img/projects/awesome-books.png',
  //   imgPopMobile: '/assets/img/projects/awesome-books.png',
  //   company: 'Self-employed',
  //   typeOfDev: 'Front-End',
  //   date: '2023',
  // },
  // {
  //   name: 'JS Documentation',
  //   description:
  //     'JS documentation is a simple documentation page to serve as instruction or reference. It was built with plain HTML and CSS.',
  //   img: imgDocumentationPage,
  //   technologies: ['HTML', 'CSS'],
  //   liveVersion:
  //     'https://dvloper-z.com/Diegogagan2587-old-portfolio/diegolab/rwd-projects/4-technical-Documentation-page.html',
  //   source:
  //     'https://github.com/Diegogagan2587/Diegogagan2587.github.io/tree/master/diegolab/rwd-projects',
  //   descriptionDesk:
  //     'JS documentation is a simple documentation page to serve as instruction or reference. It was built with plain HTML and CSS to put in practice HTML and CSS basic skills. The content has been taken = MDN.',
  //   imgDesk: '/assets/img/projects/documentation-page.png',
  //   imgPopMobile: '/assets/img/projects/documentation-page.png',
  //   company: 'Self-employed',
  //   typeOfDev: 'Front-End',
  //   date: '2020',
  // },
  {
    name: 'Product Landing Page',
    description:
      'Product Landing Page is a project to market a product, in this case Original Trombones, it was built for putting in practice HTML and CSS skills by creating a static site that includes navigation, video, and a simple dummy form for submitting customer email.',
    img: imgProductLandingPage,
    technologies: ['HTML', 'CSS'],
    liveVersion: 'https://diegogagan2587.github.io/product-landing-page/',
    source: 'https://github.com/Diegogagan2587/product-landing-page',
    descriptionDesk:
      'Product Landing Page is a project to market a product, in this case Original Trombones. It was built for putting in practice HTML and CSS skills by creating a static site that includes navigation, video, and a simple dummy form for submitting customer email. The project was initially created in 2020 but has been moved to its own repository.',
    imgDesk: '/assets/img/projects/landing-page-original-trombones.png',
    imgPopMobile: '/assets/img/projects/landing-page-original-trombones.png',
    company: 'Self-employed',
    typeOfDev: 'Front-End',
    date: '2020',
  },
];

export default projects;