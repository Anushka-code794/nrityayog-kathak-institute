import kathakHero from '@/assets/kathak-hero.jpg';
import './Hero.css';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div 
        className="hero-background"
        style={{ backgroundImage: `url(${kathakHero})` }}
      ></div>
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-title-accent">Nrityayog Kathak Institute</span>
        </h1>
        
        <h2 className="hero-subtitle">
          Admission Open - Enroll Today
        </h2>
        
        <h3 className="hero-description">
          Kathak Studio by Anupama Bhadri Kothiyal<br />
          <span className="hero-description-accent">(Beginner, Intermediate, Advanced)</span>
        </h3>
        
        <div className="hero-buttons">
          <button 
            className="hero-button"
            onClick={scrollToContact}
          >
            Book Trial Class
          </button>
          <a 
            className="hero-button"
            href="https://maps.app.goo.gl/6dKMfXyGt2j1THzG6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Find Location
          </a>
        </div>
      </div>
      
      <div className="hero-decorative">
        <div className="hero-decorative-circle">
          <div className="hero-decorative-dot"></div>
        </div>
      </div>
    </section>
  );
}