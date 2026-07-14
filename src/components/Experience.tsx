const entries = [
  {
    date: 'Sep 2022 – Dec 2022',
    role: 'Machine Learning Intern',
    org: 'Genstark',
    desc: 'Prepared and annotated image datasets using LabelImg and built CSV-based data pipelines for object-detection model training. Contributed to model training, evaluation, and deployment workflows for a smart-glasses system designed to assist visually impaired users.',
  },
  {
    date: 'Mar 2026',
    role: 'Subject Matter Expert — Cybersecurity',
    org: 'DG Sentinels, MRIIRS',
    desc: 'Recognized for Top 1% global TryHackMe ranking, eJPT certification, IEEE publication, and contributions to the cybersecurity community.',
  },
  {
    date: '2024 – 2025',
    role: 'LinkedIn Campus Ambassador',
    org: 'LinkedIn',
    desc: 'Promoted professional networking, career-development resources, and LinkedIn platform features to the student community.',
  },
]

export function Experience() {
  return (
    <section id="experience" className="portfolio-section">
      <div className="wrap">
        <p className="eyebrow reveal">// Track</p>
        <h2 className="sec-title reveal">Experience</h2>
        <div className="reveal">
          {entries.map((e, i) => (
            <div className="exp-item" key={i}>
              <div className="exp-date">{e.date}</div>
              <div>
                <h3 className="exp-role">{e.role}</h3>
                <p className="exp-org">{e.org}</p>
                <p className="exp-desc">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
