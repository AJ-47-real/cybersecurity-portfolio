const certs = [
  { icon: 'eJPT', name: 'INE Certified Junior Penetration Tester' },
  { icon: 'ICCA', name: 'INE Certified Cloud Associate' },
  { icon: 'GC', name: 'Google Cybersecurity Professional Certificate' },
  { icon: 'AI', name: 'Microsoft Certified: Azure AI Fundamentals (AI-900)' },
]

export function Certifications() {
  return (
    <section id="certifications" className="portfolio-section">
      <div className="wrap">
        <p className="eyebrow reveal">// Credentials</p>
        <h2 className="sec-title reveal">Certifications</h2>
        <div className="cert-grid reveal">
          {certs.map(c => (
            <div className="cert-card" key={c.icon}>
              <div className="cert-icon">{c.icon}</div>
              <div className="cert-name">{c.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
