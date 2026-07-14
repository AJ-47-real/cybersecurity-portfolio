const achievements = [
  { badge: 'TOP 1%', badgeClass: 'badge-blue', text: 'Global Ranking, TryHackMe Cybersecurity Platform', sub: 'Ranked in the top 1% of learners worldwide', tag: 'Platform' },
  { badge: '1ST', badgeClass: 'badge-gold', text: '"Hack or Crack" CTF Competition', sub: 'Organized by DG Sentinels', tag: 'CTF' },
  { badge: '3RD', badgeClass: 'badge-blue', text: '"Race2Root" CTF, Innoskill 2025', sub: 'Manav Rachna International Institute', tag: 'CTF' },
  { badge: '1ST', badgeClass: 'badge-gold', text: 'Project Showcase, Anubhuti 2022', sub: 'Manav Rachna International Institute', tag: 'Technical' },
  { badge: '2ND', badgeClass: 'badge-blue', text: 'Aaghoorn 2024 Photography Contest', sub: 'DTU Engifest', tag: 'Photography' },
]

export function Achievements() {
  return (
    <section id="achievements" className="portfolio-section">
      <div className="wrap">
        <p className="eyebrow reveal">// Track record</p>
        <h2 className="sec-title reveal">Achievements &amp; competitions</h2>
        <p className="sec-lede reveal">
          CTF competitions, technical showcases, and a couple of wins outside
          the terminal too.
        </p>
        <div className="ach-list reveal">
          {achievements.map((a, i) => (
            <div className="ach-item" key={i}>
              <span className={`ach-badge ${a.badgeClass}`}>{a.badge}</span>
              <div className="ach-text">
                {a.text}
                <span>{a.sub}</span>
              </div>
              <span className="ach-tag">{a.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
