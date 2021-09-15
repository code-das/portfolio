// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Bibek",
  middleName: "",
  lastName: "Das",
  message: " Passionate about changing the world with technology and mindset. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/code-das",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/bibek.das.75839",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/bi_baked_ass/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/bibek-das-bb7bab1ba/",
     },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/bibekdas.jpg"),
  imageSize: 375,
  message:
    "My name is Bibek Das. I’m about to graduate in 2022 from Kalinga Institute of Industrial Technology at Bhubaneshwar India with a degree in Electronics and Telecommunication Engineering. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. I love clicking pictures and play basketball on weekends!",
  resume: require("../editable-stuff/ResumeBibekDas.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "code-das", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

//Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "Has been and active member of College Core committees for organizing two of the most glorifying events of University, KIIT Fest and KIIT MUN. A a part of the Photography team of the both the events and evend participated in the managementteams to have a smooth flow for grand days.",
  images: [
    { 
      img: require("../editable-stuff/DSC_0285.jpg"), 
      label: "As We Keep Searching performing at KIIT-FEST", 
      paragraph: "An amazing evening where the band performance one of reowned bands of the country AS WE KEEP SEARCHING PERFORMED. Picture by -Me" 
    },
    // { 
    //   img: require("../editable-stuff/bibekdas.jpg"), 
    //   label: "Second slide label", 
    //   paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    // },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Java", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C", value: 85 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 80 },
    { name: "Spring/SpringBoot", value: 85 },
    { name: "MATLAB", value: 75 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "bibek.das.kol@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Product Intern',// Here Add Company Name
      companyname: "Highradius Technologies",
      companylogo: require('../assets/img/highradius.png'),
      date: 'May 2021 – Present',
    },
    // {
    //   role: 'Front-End Developer',
    //   companylogo: require('../assets/img/boeing.png'),
    //   date: 'May 2017 – May 2018',
    // },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
