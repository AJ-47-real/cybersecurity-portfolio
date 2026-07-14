export function Projects() {
  return (
    <section id="projects" className="portfolio-section">
      <div className="wrap">
        <p className="eyebrow reveal">// Selected work</p>
        <h2 className="sec-title reveal">Projects</h2>
        <p className="sec-lede reveal">Security engineering, applied — not just theory.</p>

        {/* Project 1: Schrödinger File System */}
        <div className="project-row reveal">
          <div>
            <h3 className="proj-name">Schrödinger File System</h3>
            <p className="proj-desc">
              An encryption-first secure file storage platform that fragments
              files into AES-256-GCM-encrypted chunks and logically decouples
              chunk data, ordering information, and cryptographic context to
              increase resistance to storage compromise. Implements streaming,
              on-the-fly file reconstruction during secure downloads to
              minimize persistent server-side exposure of plaintext files, with
              a Flutter interface for file management and fragmentation
              visualization.
            </p>
            <div className="proj-links">
              <a href="#">View on GitHub ↗</a>
            </div>
          </div>
          <div className="proj-spec">
            <div className="spec-line">
              <span className="spec-key">Stack</span>
              <span className="spec-val">Django · DRF · Flutter</span>
            </div>
            <div className="spec-line">
              <span className="spec-key">Crypto</span>
              <span className="spec-val">AES-256-GCM</span>
            </div>
            <div className="spec-line">
              <span className="spec-key">Type</span>
              <span className="spec-val">Secure Storage</span>
            </div>
            <div className="spec-line">
              <span className="spec-key">Status</span>
              <span className="spec-val">Active</span>
            </div>
          </div>
        </div>

        {/* Project 2: SkipQ */}
        <div className="project-row rev reveal">
          <div className="proj-spec">
            <div className="spec-line">
              <span className="spec-key">Stack</span>
              <span className="spec-val">Flutter · Django · DRF</span>
            </div>
            <div className="spec-line">
              <span className="spec-key">Data</span>
              <span className="spec-val">PostgreSQL</span>
            </div>
            <div className="spec-line">
              <span className="spec-key">AI</span>
              <span className="spec-val">Gemini 2.5 Flash</span>
            </div>
            <div className="spec-line">
              <span className="spec-key">Deploy</span>
              <span className="spec-val">Render</span>
            </div>
          </div>
          <div>
            <h3 className="proj-name">SkipQ — Scan &amp; Pay Smart Checkout</h3>
            <p className="proj-desc">
              A mobile Scan &amp; Pay self-checkout application enabling
              customers to scan product barcodes, manage digital carts, and
              complete checkout without traditional billing counters. Backend
              built with Django REST Framework and PostgreSQL; integrates
              Gemini 2.5 Flash as an AI-assisted image-verification checkpoint.
            </p>
            <div className="proj-links">
              <a href="#">View on GitHub ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
