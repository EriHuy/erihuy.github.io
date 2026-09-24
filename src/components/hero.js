import '../styles/hero.css';

export default function Hero() {
  return (
    <section className="hero_container">
      <div className="hero_content">
        <p className="hero_role">Software / AI Engineer</p>

        <h2>Eric Huynh</h2>


        <p className="hero_description">
          Software engineering · Artificial Intelligence
        </p>

        <div className="hero_buttons">
          <a href="#projects" className="primary_button">
            View my work
          </a>

          {/*<a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="secondary_button"
          >
            GitHub ↗
          </a>*/}
        </div>
      </div>
    </section>
  );
}