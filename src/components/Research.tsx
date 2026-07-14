export function Research() {
  return (
    <section id="research" className="portfolio-section">
      <div className="wrap">
        <p className="eyebrow reveal">// Publication</p>
        <h2 className="sec-title reveal">Research</h2>
        <div className="research-card reveal">
          <h3 className="research-title">
            AI-Driven Techniques for Web Search Vulnerability Identification
          </h3>
          <p className="research-venue">
            IEEE · ISCS 2025 · The NorthCap University, Gurugram · Nov 2025
          </p>
          <p className="research-body">
            First author of an IEEE-published research paper applying
            AI-driven techniques — BERT-based anomaly detection,
            gradient-based adversarial testing, and NLP-based semantic
            analysis — to identify data poisoning, algorithmic bias, and
            privacy leakage vulnerabilities in web search systems. Presented
            at ISCS 2025 and received a Certificate of Presentation.
          </p>
          <div className="research-stats">
            <div>
              <div className="stat-num">92%</div>
              <div className="stat-label">Anomaly Detection Accuracy</div>
            </div>
            <div>
              <div className="stat-num">85%</div>
              <div className="stat-label">Adversarial Test Sensitivity</div>
            </div>
            <div>
              <div className="stat-num">90%</div>
              <div className="stat-label">Semantic Analysis Precision</div>
            </div>
          </div>
          <p className="doi">
            DOI:{' '}
            <a
              href="https://doi.org/10.1109/ISCS69371.2025.11386307"
              target="_blank"
              rel="noopener noreferrer"
            >
              10.1109/ISCS69371.2025.11386307
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
