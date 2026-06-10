

const projects = [
  {
  image:
  "./Media/BMI.png",

  tag:"Health & Fitness",

  title:"BMI Calculator Web Application",

  description:
  "Modern BMI calculator with responsive glassmorphism UI, real-time body mass index calculation, and health status analysis.",

  tech:["HTML","CSS","JavaScript"],

  live:"https://hari-bala-k.github.io/BMIcalculator/",

  github:"https://github.com/Hari-bala-k/BMIcalculator.git"
}
,
 {
  image:
  "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",

  tag:"Productivity App",

  title:"Todo List Web Application",

  description:
  "Modern task management web app with task creation, completion tracking, filtering, and responsive UI design.",

  tech:["HTML","CSS","JavaScript"],

  live:"#",

  github:"https://github.com/"
},

  {
    image:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c",

    tag:"Java Project",

    title:"Trello Clone",

    description:
    "Task management application built using Java and object-oriented design principles.",

    tech:["Java","OOP","Collections"],

    live:"#",

    github:"https://github.com/Hari-bala-k/Trello_Project"
  },

  {
    image:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",

    tag:"Frontend",

    title:"Portfolio Website",

    description:
    "Modern responsive portfolio website with animations and premium UI design.",

    tech:["HTML","CSS","JavaScript"],

    live:"#",

    github:"https://github.com/Hari-bala-k/Portfolio-Web"
  },

  {
    image:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",

    tag:"Web App",

    title:"E-Commerce Platform",

    description:
    "Responsive shopping website with cart system, product filtering, and modern UI.",

    tech:["React","Firebase","CSS"],

    live:"#",

    github:"https://github.com/"
  }

];

const projectContainer =
document.getElementById("projectContainer");

projects.forEach((project)=>{

  const techStack =
  project.tech.map((tech)=>
  `<span>${tech}</span>`).join("");

  const card = document.createElement("div");

  card.classList.add("project-card");

  card.innerHTML = `

    <div class="project-image-wrapper">

      <img
        src="${project.image}"
        class="project-image"
      >

      <div class="project-tag">
        ${project.tag}
      </div>

    </div>

    <div class="project-content">

      <h3>${project.title}</h3>

      <p>
        ${project.description}
      </p>

      <div class="tech-stack">
        ${techStack}
      </div>

      <div class="project-links">

        <a
          href="${project.live}"
          class="live-btn"
        >
          Live Demo
        </a>

        <a
          href="${project.github}"
          target="_blank"
          class="github-btn"
        >
          GitHub
        </a>

      </div>

    </div>

  `;

  projectContainer.appendChild(card);

});
