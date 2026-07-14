export function Hero() {
  return (
    <div className="hero-overlay">
      <div className="status-pill animate-fade-rise">
        <span className="pulse-dot" />
        Available for opportunities
      </div>

      <h1 className="hero-name-video animate-fade-rise-delay">
        <span className="decrypt" data-text="Alan Jolly John">
          Alan Jolly John
        </span>
      </h1>

      <p className="hero-headline-video animate-fade-rise-delay-2">
        Final-year BCA student &amp; cybersecurity practitioner — offensive
        security, penetration testing, and security-focused software
        development.
      </p>

      <p className="hero-sub-video animate-fade-rise-delay-3">
        <b>eJPT-certified</b> · <b>Top 1% globally</b> on TryHackMe ·{' '}
        <b>IEEE-published</b> researcher
      </p>

      <div className="hero-ctas animate-fade-rise-delay-4">
        <a href="#projects" className="btn btn-primary">
          View projects
        </a>
        <a href="#contact" className="btn btn-ghost">
          Get in touch
        </a>
      </div>
    </div>
  )
}
