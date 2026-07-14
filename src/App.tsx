import './index.css'
import { useEffect, useRef } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Terminal } from './components/Terminal'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Research } from './components/Research'
import { Certifications } from './components/Certifications'
import { Achievements } from './components/Achievements'
import { Experience } from './components/Experience'
import { Volunteering } from './components/Volunteering'
import { Contact } from './components/Contact'

function App() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = cursorRef.current
    if (!dot || window.matchMedia('(pointer: coarse)').matches) return

    let mx = 0, my = 0, cx = 0, cy = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.classList.add('active')
    }
    window.addEventListener('mousemove', onMove)

    const hoverables = document.querySelectorAll('a, button, .pill, .proj-spec, .cert-card, .lead-card, .ach-item')
    hoverables.forEach(h => {
      h.addEventListener('mouseenter', () => dot.classList.add('grow'))
      h.addEventListener('mouseleave', () => dot.classList.remove('grow'))
    })

    function tick() {
      if (!dot) return
      cx += (mx - cx) * 0.18
      cy += (my - cy) * 0.18
      dot.style.left = cx + 'px'
      dot.style.top = cy + 'px'
      requestAnimationFrame(tick)
    }
    tick()

    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  // Scroll reveal and decrypt observer
  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!<>-_\\/[]{}—=+*^?#01"
    
    function decryptEl(el: Element, duration = 600) {
      const target = el.getAttribute('data-text') || el.textContent || ''
      if (!el.getAttribute('data-text')) {
        el.setAttribute('data-text', target) // store original
      }
      const len = target.length
      let frame = 0
      const totalFrames = Math.round(duration / 30)
      const revealEvery = Math.max(1, totalFrames / len)
      
      const iv = setInterval(() => {
        let out = ""
        const revealedCount = Math.floor(frame / revealEvery)
        for(let i=0; i<len; i++){
          if(target[i] === " "){ out += " "; continue; }
          if(i < revealedCount){ out += target[i]; }
          else { out += chars[Math.floor(Math.random()*chars.length)]; }
        }
        el.textContent = out
        frame++
        if(revealedCount >= len){
          el.textContent = target
          clearInterval(iv)
        }
      }, 30)
    }

    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    els.forEach(el => obs.observe(el))

    // Decrypt for .sec-title and hero name (.decrypt)
    const decryptEls = document.querySelectorAll('.sec-title, .decrypt')
    const decryptObs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            decryptEl(entry.target, 600)
            decryptObs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    decryptEls.forEach(el => decryptObs.observe(el))

    return () => {
      obs.disconnect()
      decryptObs.disconnect()
    }
  }, [])

  return (
    <>
      {/* Custom cursor */}
      <div className="cursor-dot" ref={cursorRef} />

      {/* Hero area: video background + cinematic overlay */}
      <div className="hero-video-section">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
            type="video/mp4"
          />
        </video>
        <Navbar />
        <Hero />
        <div className="scroll-cue">
          <div className="mouse">
            <div className="wheel" />
          </div>
        </div>
      </div>

      {/* Portfolio sections */}
      <div className="portfolio-bg">
        <div className="bg-grid" />
        <div className="bg-noise" />
        <Terminal />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Certifications />
        <Achievements />
        <Experience />
        <Volunteering />
        <Contact />
        <footer className="site-footer">
          © 2026 Alan Jolly John — designed & built with intent.
        </footer>
      </div>
    </>
  )
}

export default App
