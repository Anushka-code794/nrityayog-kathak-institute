import './About.css';

export function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">
            About Our <span className="about-title-accent">Instructor</span>
          </h2>
          <p className="about-description">
            Meet Anupama Bhadri Kothiyal, our dedicated Kathak instructor with 16 years of experience 
            in teaching Kathak. She is a Kathak dance faculty at The Oasis and has been running 
            Nrityayog Kathak Institute since 2022. Her expertise spans all levels from beginner to advanced, 
            nurturing students in the timeless art of Kathak.
          </p>
        </div>
        
        <div className="about-cards">
          <div className="about-card">
            <div className="about-card-icon">
              <span>🎭</span>
            </div>
            <h3 className="about-card-title">Storytelling</h3>
            <p className="about-card-text">
              Express ancient tales and emotions through intricate hand gestures, 
              facial expressions, and graceful body movements that speak to the soul.
            </p>
          </div>
          
          <div className="about-card">
            <div className="about-card-icon">
              <span>💃</span>
            </div>
            <h3 className="about-card-title">Technique</h3>
            <p className="about-card-text">
              Master the rhythmic footwork, spins, and poses that define Kathak, 
              building strength, flexibility, and precision with each practice.
            </p>
          </div>
          
          <div className="about-card">
            <div className="about-card-icon">
              <span>🎵</span>
            </div>
            <h3 className="about-card-title">Music</h3>
            <p className="about-card-text">
              Dance in harmony with traditional ragas and talas, understanding 
              the deep connection between movement and classical Indian music.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}