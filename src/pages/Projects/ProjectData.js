//project images
import covid from '../../assets/images/Projects/covid-tracker.png';
import creative from '../../assets/images/Projects/creative-agency.png';
import volunteer from '../../assets/images/Projects/volunteer-network.png';
import bootstrap from '../../assets/images/Skill-SVG-Icon/bootstrap-4.svg';
import css3 from '../../assets/images/Skill-SVG-Icon/css3.svg';
import express from '../../assets/images/Skill-SVG-Icon/express.svg';
import firebase from '../../assets/images/Skill-SVG-Icon/firebase-icon.svg';
import heroku from '../../assets/images/Skill-SVG-Icon/heroku.svg';
//skilss svg icons
import html5 from '../../assets/images/Skill-SVG-Icon/html-5.svg';
import javascript from '../../assets/images/Skill-SVG-Icon/javascript.svg';
import materialUI from '../../assets/images/Skill-SVG-Icon/material-ui-1.svg';
import mongodb from '../../assets/images/Skill-SVG-Icon/mongodb.svg';
import node from '../../assets/images/Skill-SVG-Icon/nodejs.svg';
import react from '../../assets/images/Skill-SVG-Icon/react.svg';

 


export  const  projectsData= [
   {
       name:"Creative Agency",
       imgSrc: creative,
       description:'an organization, that provides services like android app development ,web developent and design ,graphic design etc.' ,

       features:[
        'A user can log in and log out ' , 
        'A user can sign up for a new account' , 
        'A user can order and cancel his/her ordered services',
        'Separate dashboard for user and admin' , 
        'Admin authentication' , 
        'An admin  can add new service with a thumbnail' ,
        'An Admin can make somone as an admin' 
     ],
       liveUrl: 'https://creative-agency-6909f.web.app/',
       clientUrl : 'https://github.com/abedinforhan/creative-agency-client',
       serverUrl:'https://github.com/abedinforhan/creative-agency-server',
       technologies:[
           {
               name : 'HTML5',
               image:html5,
             },
             {
                name : 'CSS3',
                image:css3,
              },
              {
                name : 'Bootstrap',
                image:bootstrap,
              },
              {
                name : 'React',
                image:react,
              },
              {
                name: 'Node',
                image:node,
            },
            {
                name: 'Express',
                image:express,
            },
            {
                name: 'MongoDB',
                image:mongodb,
            },
              {
                name : 'Firebase',
                image:firebase,
              },
              {
                  name: 'Heroku',
                  image:heroku,
              }

        ]
   },
   {
    name:"Covid Tracker",
    imgSrc: covid,

    description:'is a website for tracking daily covid19 cases.' ,
     features:[
           'Built UI with Html5, CSS, and Bootstrap. ' , 
           'Added Search Functionality so that a user can search cases by country.' , 
           'Added Google Map for the desired search place.',  
           'Added Custom  Style and Circles to the map.' , 
           'Sorted total cases by country name in tabular format,' , 
        ],
       liveUrl: 'https://abedinforhan.github.io/Covid-Tracker/index.html',
       clientUrl : 'https://github.com/abedinforhan/Covid-Tracker',
       serverUrl:'',
    technologies:[
        {
            name : 'HTML5',
            image:html5,
          },
          {
             name : 'CSS3',
             image:css3,
           },
           {
             name : 'Bootstrap',
             image:bootstrap,
           },
           {
            name : 'Material Ui',
            image:materialUI,
          },
           {
             name : 'Javascript',
             image:javascript,
           },
           {
             name : 'ChartJs',
             image:"",
           },
           {
               name: 'MomentJs',
               image:"",
           }

     ]
},
{
    name:"Volunteer Network",
    imgSrc: volunteer,

   description:'is a full stack web based application which offers different types of volunteer jobs to the people.' ,

  features:[
        'A user can log in and log out ' ,
        'A user can sign up for a new account' , 
        'A user can apply and cancel for a volunteer job.',
        'A user can see all his/her scheduled volunteering job and timing',
        'Separate dashboard for user and admin' , 
        'Admin authentication' , 
        'An admin can add a new volunteer job with a thumbnail.',
        'An admin can view the list of volunteering jobs'
        ],
       liveUrl: 'https://volunteer-ae626.web.app/',
       clientUrl : 'https://github.com/abedinforhan/volunteer-network-client',
       serverUrl:'https://github.com/abedinforhan/volunteer-network-server',
    technologies:[
        {
            name : 'HTML5',
            image:html5,
          },
          {
             name : 'CSS3',
             image:css3,
           },
           {
             name : 'Bootstrap',
             image:bootstrap,
           },
           {
             name : 'React',
             image:react,
           },
           {
            name: 'Node',
            image:node,
        },
        {
            name: 'Express',
            image:express,
        },
        {
            name: 'MongoDB',
            image:mongodb,
        },
           {
             name : 'Firebase',
             image:firebase,
           },
           {
               name: 'Heroku',
               image:heroku,
           }

     ]
}
]