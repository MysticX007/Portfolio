import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of learning and practice, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, Express.js and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. While designing a lot of projects, I have worked with a variety of technologies, including React, Next.js, Node.js, Express.js and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a apirational career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, playing video games and football.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Amazon Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, Pratush.js, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Restful API",
    image: project1,
    description:
      "A fully functional restful API for a seamless communication between clients and servers. It can be used to POST and GET data and store it in a database.",
    technologies: ["HTML", "CSS", "Node.js", "Postman"],
  },
  {
    title: "Login-Signup Authentication",
    image: project2,
    description:
      "Build the backend of a Login-signup authentication system which can be used for any e-commerce platform. Various security technologies like JWT tokens and modules like bcrypt for password encryption have been used. ",
    technologies: ["HTML", "CSS", "Node.js", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Tailwind-CSS", "React"],
  },
  {
    title: "Weather Application",
    image: project4,
    description:
      "A simple frontend Weather web application that gives you the real time weather data of any valid place. It has been made by using HTML, CSS and JavaScript and the openweather API has been used for fetching the real-time weather data.",
    technologies: ["HTML", "CSS", "Javascript"]
  },
];

export const CONTACT = {
  address: "IIIT Guwahati, Guwahati, 781015",
  phoneNo: "+91 8207204654 ",
  email: "griezmannfcb07@gmail.com",
};
