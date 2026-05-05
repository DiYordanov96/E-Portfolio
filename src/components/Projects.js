function Projects() {
    return (
      <section id="projects" className="section">
        <h2>Projects</h2>
  
        <div className="project-card">
          <h3>React Portfolio</h3>
          <p>
            A personal portfolio website built with React to showcase my skills,
            projects, and learning progress.
          </p>
          <a
            href="https://github.com/DiYordanov96/E-Portfolio.git"
            target="_blank"
            rel="noreferrer"
            >
            View on GitHub
         </a>
        </div>
  
        <div className="project-card">
          <h3>Cloud Computing Final Project</h3>
          <p>
            A previous university project that I am improving and preparing for
            GitHub.
          </p>
        </div>

        <div className="project-card">
          <h3>Virtual Network Configuration</h3>
          <p>
            A university project where I configured a virtual network using Cisco Packet Tracer, demonstrating my understanding of networking concepts and skills.
          </p>
        </div>
      </section>
      
    );
  }
  
  export default Projects;