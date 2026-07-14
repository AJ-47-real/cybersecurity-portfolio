export function Volunteering() {
  return (
    <section id="leadership" className="portfolio-section">
      <div className="wrap">
        <p className="eyebrow reveal">// Beyond the terminal</p>
        <h2 className="sec-title reveal">Leadership &amp; volunteering</h2>
        <div className="lead-grid reveal">
          <div className="lead-card">
            <h3 className="lead-role">
              Cybersecurity Event Organizer &amp; CTF Challenge Creator
            </h3>
            <p className="lead-org">DG Sentinels</p>
            <p className="lead-desc">
              Helped organize{' '}
              <b style={{ color: 'var(--text)' }}>Hack or Crack 2.0</b> and
              designed cryptography-based CTF challenges to test participants'
              security knowledge and problem-solving skills.
            </p>
          </div>
          <div className="lead-card">
            <h3 className="lead-role">Volunteer Event Photographer</h3>
            <p className="lead-org">Media Shala</p>
            <p className="lead-desc">
              Contributed official photography and visual documentation for the
              Manav Rachna Convocation Ceremonies 2024 and 2025–26 as part of
              the university media coverage team.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
