import { useState, useRef, useEffect } from 'react'

type HistoryItem = {
  command: string;
  output: React.ReactNode;
}

const KALI_PROMPT_TOP = (
  <div className="prompt-top">
    <span className="prompt-blue">┌──(</span>
    <span className="prompt-blue font-bold">alan㉿kali</span>
    <span className="prompt-blue">)-[</span>
    <span className="prompt-white">~</span>
    <span className="prompt-blue">]</span>
  </div>
)

const KALI_PROMPT_BOTTOM = (
  <>
    <span className="prompt-blue">└─</span>
    <span className="prompt-blue font-bold" style={{ marginLeft: '2px', marginRight: '8px' }}>$</span>
  </>
)

export function Terminal() {
  const [history, setHistory] = useState<HistoryItem[]>([])
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const termBodyRef = useRef<HTMLDivElement>(null)

  const processCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    let output: React.ReactNode = ''

    if (trimmedCmd === '') {
      output = ''
    } else if (trimmedCmd === 'help') {
      output = (
        <div className="cmd-help">
          <p>Alan's Portfolio Shell, version 1.0.0</p>
          <p>These shell commands are defined internally. Type `help` to see this list.</p>
          <ul>
            <li><span className="text-accent" style={{ display: 'inline-block', width: '80px' }}>whoami</span> - Print user information</li>
            <li><span className="text-accent" style={{ display: 'inline-block', width: '80px' }}>skills</span> - List technical toolkit</li>
            <li><span className="text-accent" style={{ display: 'inline-block', width: '80px' }}>projects</span> - View selected works</li>
            <li><span className="text-accent" style={{ display: 'inline-block', width: '80px' }}>contact</span> - Get in touch</li>
            <li><span className="text-accent" style={{ display: 'inline-block', width: '80px' }}>clear</span> - Clear terminal output</li>
          </ul>
        </div>
      )
    } else if (trimmedCmd === 'whoami') {
      output = "Alan Jolly John\nCybersecurity Practitioner & Developer\nFinal-year BCA student interested in offensive security."
    } else if (trimmedCmd === 'skills') {
      output = (
        <div>
          <p className="text-accent mb-1">Security & Detection</p>
          <p>Penetration Testing, Vulnerability Assessment, OSINT, Network Security</p>
          <br/>
          <p className="text-accent mb-1">Tools</p>
          <p>Burp Suite, Nmap, Metasploit, Wireshark, Kali Linux</p>
          <br/>
          <p className="text-accent mb-1">Programming</p>
          <p>Python, C/C++, Java, SQL, Dart</p>
        </div>
      )
    } else if (trimmedCmd === 'projects') {
      output = "Scroll down or check the Projects section to see details on 'Schrödinger File System' and 'SkipQ'."
    } else if (trimmedCmd === 'contact') {
      output = "Email: alanjolly004@gmail.com\nLinkedIn: linkedin.com/in/alan-jolly-john-446838251"
    } else if (trimmedCmd === 'clear') {
      setHistory([])
      return
    } else if (trimmedCmd === 'sudo') {
      output = "alan is not in the sudoers file. This incident will be reported."
    } else if (trimmedCmd === 'ls') {
      output = <span className="text-accent">portfolio.md  resume.pdf  projects/  skills.txt</span>
    } else if (trimmedCmd === 'cat portfolio.md') {
      output = "A sleek cybersecurity portfolio featuring smooth animations and glassmorphic UI."
    } else {
      output = `bash: ${trimmedCmd}: command not found`
    }

    setHistory(prev => [...prev, { command: cmd, output }])
  }

  // Pre-run help command on mount
  useEffect(() => {
    // Small delay to simulate terminal boot
    const timer = setTimeout(() => {
      processCommand('help')
    }, 400)
    return () => clearTimeout(timer)
  }, [])

  // Auto-focus when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Add a small delay to ensure scrolling has settled
          setTimeout(() => {
            inputRef.current?.focus({ preventScroll: true });
          }, 300);
        }
      },
      { threshold: 0.5 }
    );

    if (termBodyRef.current) {
      observer.observe(termBodyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll to bottom of the terminal only
  useEffect(() => {
    if (termBodyRef.current) {
      termBodyRef.current.scrollTop = termBodyRef.current.scrollHeight;
    }
  }, [history])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      processCommand(input)
      setInput('')
    }
  }

  return (
    <section id="terminal-section" className="portfolio-section" style={{ paddingBottom: '60px', paddingTop: '60px', borderTop: 'none' }}>
      <div className="wrap">
        <div className="term-window reveal" onClick={() => inputRef.current?.focus()}>
          <div className="term-header">
            <div className="term-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="term-title">alan@kali: ~</div>
          </div>
          <div className="term-body" ref={termBodyRef}>
            {history.map((item, i) => (
              <div key={i} className="term-entry">
                {KALI_PROMPT_TOP}
                <div className="prompt-bottom">
                  {KALI_PROMPT_BOTTOM}
                  <div className="term-cmd">{item.command}</div>
                </div>
                {item.output && <div className="term-output whitespace-pre-wrap">{item.output}</div>}
              </div>
            ))}
            
            <div className="term-entry active-entry">
              {KALI_PROMPT_TOP}
              <div className="prompt-bottom">
                {KALI_PROMPT_BOTTOM}
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="term-input"
                  autoComplete="off"
                  spellCheck="false"
                />
              </div>
            </div>
            <div style={{ height: '20px' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
