const skillGroups = [
  {
    label: 'Security & Detection',
    pills: ['Penetration Testing', 'Vulnerability Assessment', 'Anomaly Detection', 'Threat Modelling', 'OSINT', 'Network Security', 'Cloud Security', 'Cryptography', 'CTF'],
  },
  {
    label: 'Security Tools',
    pills: ['Burp Suite', 'Nmap', 'Metasploit', 'Wireshark', 'Kali Linux'],
  },
  {
    label: 'Programming',
    pills: ['Python', 'C', 'C++', 'Java', 'SQL', 'Dart'],
  },
  {
    label: 'Frameworks & Backend',
    pills: ['Django', 'Django REST Framework', 'Flutter', 'REST APIs', 'PostgreSQL'],
  },
  {
    label: 'AI / ML',
    pills: ['BERT', 'PyTorch', 'spaCy', 'NLP', 'Adversarial Testing'],
  },
  {
    label: 'Cloud & Platforms',
    pills: ['Azure', 'Render', 'Git', 'TryHackMe'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="portfolio-section">
      <div className="wrap">
        <p className="eyebrow reveal">// Toolkit</p>
        <h2 className="sec-title reveal">Technical skills</h2>
        <div className="reveal">
          {skillGroups.map(g => (
            <div className="skill-group" key={g.label}>
              <p className="skill-label">{g.label}</p>
              <div className="pills">
                {g.pills.map(p => (
                  <span className="pill" key={p}>{p}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
