import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sahil Loria",
  title: "Hi all, I'm Sahil",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1McMK_0dgkP11ZKrPb1VET9T9-V9A147LaCTW06bCVXQ/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Sahilloria",
  linkedin: "https://www.linkedin.com/in/sahil-loria/",
  gmail: "sahilloria34@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "Versatile Full Stack Developer building real-world solutions with modern web technologies.",
  skills: [
    emoji("⚡ Design and develop responsive web interfaces using React, Next.js, and Tailwind CSS"),
    emoji("⚡ Build scalable APIs and backend services using Node.js, Express, and MongoDB/PostgreSQL"),
    emoji("⚡ Deploy and manage cloud-based solutions using AWS, Firebase, and DigitalOcean")
  ],



  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },

    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Huddersfield, United Kingdom",
      logo: require("./assets/images/huddersfieldLogo.jpeg"),
      subHeader: "Bachelor of Science in Computer Science- Upper Second Class Honours",
      duration: "January 2020 - June 2022",
      descBullets: [
        " Geolocation-Based COVID Assistance Web App Developed a web application using Node.js and public health APIs to help users locate nearby COVID-19 testing and vaccination centers. This project combined real-time data integration, responsive UI, and RESTful API handling—laying the foundation for building socially impactful tech.",
        "Leadership as Course Representative Acted as a course representative, leading team-based software development projects. Introduced Git workflows, conducted code reviews, and facilitated team communication—skills that translated directly into real-world agile development environments.",
        "Hands-on Approach to Learning Prioritized practical, project-based learning during the degree, focusing on full-stack development and web technologies. This hands-on focus enabled rapid onboarding into industry projects with minimal ramp-up time."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Veracity Trust Network",
      companylogo: require("./assets/images/veracitytrustnetwork_logo.jpeg"),
      date: "September 2022 – Present",
      desc: "Working across the full stack to deliver secure, scalable, and high-performance web applications with a focus on fraud prevention and data visualization.",
      descBullets: [
        "Reduced app load time by 60% and improved user retention by 25% through performance optimizations using lazy loading, memoization, and dynamic imports.",
        "Built interactive graphs with D3.js for Ad Fraud Protection dashboards, reducing support queries by 15%.",
        "Led UI modernization of internal admin tools using Tailwind CSS and responsive design, increasing usability across devices.",
        "Mentored junior developers and streamlined agile processes, boosting sprint velocity by 15%."
      ]
    },
    {
      role: "Front-End Developer (Intern)",
      company: "Veracity Trust Network",
      companylogo: require("./assets/images/veracitytrustnetwork_logo.jpeg"),
      date: "July 2022 – September 2022",
      desc: "Contributed to the redesign and optimization of design system components, setting the foundation for responsive UI across platforms.",
      descBullets: [
        "Redesigned core UI components with Tailwind CSS and flexible grids, improving mobile and tablet responsiveness by 15%.",
        "Collaborated on internal tooling and open-source projects, strengthening skills in React, JavaScript, and CSS.",
        "Consistently delivered production-ready features and demonstrated rapid upskilling, leading to a full-time offer."
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  projects: [
    {
      image: require("./assets/images/dash.webp"), // Placeholder or design mock
      projectName: "Web Threat Protection (WTP)",
      projectDesc: "A real-time fraud detection dashboard built using React, Redux, and Nivo. Reduced load time by 60% and improved user retention by 25%.",
      footerLink: [
        {
          name: "Company Website",
          url: "https://veracitytrustnetwork.com/web-threat-protection/"
        }
      ]
    },
    {
      image: require("./assets/images/AFP.png"),
      projectName: "Ad Fraud Protection (AFP)",
      projectDesc: "Integrated complex D3.js visualizations for ad traffic insights, reducing support queries by 15% and improving clarity for end users.",
      footerLink: [
        {
          name: "Company Website",
          url: "https://veracitytrustnetwork.com/ad-fraud-prevention/"
        }
      ]
    },
   {
      image: require("./assets/images/X_Clone.png"), // Replace with your actual image
      projectName: "X (Twitter) Clone",
      projectDesc:
        "A full-stack Twitter-like social platform with auth, posts, comments, likes, and real-time notifications built with Next.js, MongoDB, and Prisma.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Sahilloria/X-Clone"
        }
      ]
    },
    {
      image: require("./assets/images/AI_Resume.png"), // Replace with your actual image
      projectName: "AI Resume Analyzer",
      projectDesc:
        "AI-powered resume analyzer using Gemini API with 85% skill extraction accuracy. Built with Flask backend and deployed on Render.",
      footerLink: [
        {
          name: "Try Demo",
          url: "https://airesume-analyzer.vercel.app/"
        }
      ]
    },
    
  ],
  buttonDisplay:true,
  buttonLink: "https://github.com/Sahilloria",
  buttonTitle:"More Projects",
  display: true // Set false to hide this section, defaults to true
};



// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91- 7340787895",
  email_address: "sahilloria34@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
