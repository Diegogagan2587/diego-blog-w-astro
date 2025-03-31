import JavaScriptIcon from '../../public/skills/icons8-javascript-96.png';
import htmlIcon       from '../../public/skills/icons8-html-96.png';
import cssIcon       from '../../public/skills/icons8-css-96.png';
import reactIcon       from '../../public/skills/icons8-react-native-96.png';
import reduxIcon       from '../../public/skills/icons8-redux-96.png';
import railsIcon       from '../../public/skills/rails.svg';
import rubyIcon       from '../../public/skills/icons8-ruby-programming-language-96.png';
import Tailwind       from '../../public/skills/icons8-tailwind-css-96.png';
import PostgreSQL       from '../../public/skills/icons8-postgresql-96.png';
import git       from '../../public/skills/icons8-git-96.png';
import github       from '../../public/skills/icons8-github-96.png';
import vite       from '../../public/skills/icons8-vite-96.png';
import Webpack       from '../../public/skills/icons8-webpack-96.png';
import jest       from '../../public/skills/jest-js-icon.svg';
import rspec       from '../../public/skills/file-type-rspec.svg';
import render       from '../../public/skills/render.com.svg';
import postman       from '../../public/skills/postman-tutorial.png';
import gitflow       from '../../public/skills/icons8-merge-git-96.png';
import mobile       from '../../public/skills/icons8-mobile-96.png';
import test      from '../../public/skills/icons8-test-96.png';
import mvc     from '../../public/skills/icons8-connect-96.png';
import pairProgramming from '../../public/skills/icons8-collaboration-female-male-96.png';
import codeReview from '../../public/skills/icons8-inspect-code-48.png';
import teamWork from '../../public/skills/icons8-teamwork-48.png';
import timeManagement from '../../public/skills/icons8-time-management-skills-48.png';
import crossCultural from '../../public/skills/icons8-world-map-continents-48.png';
import constructiveFeedback from '../../public/skills/icons8-talking-48.png';





const skills = [
    {
        name: 'Languages',
        list: [
            {name:'HTML5', icon:htmlIcon },
            {name:'CSS3', icon:cssIcon },
            {name:'JavaScript', icon:JavaScriptIcon },
            {name:'Ruby', icon:rubyIcon },
        ],
    },
    {
        name: 'Libraries & Frameworks',
        list: [
            {name:'React', icon:reactIcon },
            {name:'Redux', icon:reduxIcon },
            {name:'Ruby on Rails', icon:railsIcon },
            {name:'Tailwind CSS', icon:Tailwind },
        ],
    },
    {
        name: 'Tools, Platforms & Methodologies',
        list: [
            {name:'PostgreSQL', icon:PostgreSQL },
            {name:'Git', icon:git },
            {name:'GitHub', icon:github },
            {name:'Vite', icon:vite },
            {name:'Webpack', icon:Webpack },
            {name:'Jest', icon:jest },
            {name:'Rspec', icon:rspec },
            {name:'Render', icon:render },
            {name:'Postman', icon:postman },
            {name:'Gitflow', icon:gitflow },
            {name:'Mobile First', icon:mobile },
            {name:'TDD', icon:test },
            {name:'MVC', icon:mvc },
        ],

    },
    {
        name: 'Skills',
        list: [
            {name:'Remote Pair-Programming', icon:pairProgramming },
            {name:'Code review', icon:codeReview },
            {name:'Teamwork', icon:teamWork },
            {name:'Time Management', icon:timeManagement },
            {name:'Cross-cultural,', icon:crossCultural },
            {name:'Constructive feedback', icon:constructiveFeedback },

        ],
    },
];

export default skills;