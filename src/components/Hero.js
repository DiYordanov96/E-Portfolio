function Hero() {
    return (
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-small-text">Hello, my name is</p>
  
            <h1>Denislav Yordanov</h1>
  
            <h2>Aspiring DevOps Engineer</h2>
  
            <p className="hero-description">
              Cloud Computing graduate building practical skills in Linux, Git,
              Docker, React, networking, and cloud technologies through hands-on
              projects.
            </p>
  
            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                View Projects
              </a>
  
              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>
          </div>
  
          <div className="hero-image">
            <img
                className="profile-photo"
                src="/profile.png"
                alt="Denislav Yordanov profile"
            />
          </div>

        </div>
      </section>
    );
  }
  
  export default Hero;