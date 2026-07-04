import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/images/logo-light.png'

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#metodologia', label: 'Metodologia' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#depoimentos', label: 'Depoimentos' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // destaca o link da seção visível
  useEffect(() => {
    const sections = links
      .map(l => document.querySelector(l.href))
      .filter(Boolean)
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach(s => io.observe(s))
    return () => io.disconnect()
  }, [])

  // trava o scroll com o menu mobile aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#inicio" className="brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="" className="brand-logo" />
          <span className="brand-name">
            LS <span>TEAM</span>
          </span>
        </a>

        <nav className="nav-desktop" aria-label="Navegação principal">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link ${active === l.href ? 'active' : ''}`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contato" className="btn btn-primary btn-sm header-cta">
          Começar Agora
        </a>

        <button
          className="menu-btn"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        {links.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            className="nav-mobile-link"
            style={{ transitionDelay: open ? `${60 + i * 40}ms` : '0ms' }}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contato"
          className="btn btn-primary nav-mobile-cta"
          onClick={() => setOpen(false)}
        >
          Comece Sua Transformação
        </a>
      </div>
    </header>
  )
}

export default Header
