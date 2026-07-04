import { Mail, Phone } from 'lucide-react'
import InstagramIcon from './InstagramIcon'
import logo from '../assets/images/logo-light.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#inicio" className="brand">
              <img src={logo} alt="LS Team" className="brand-logo" />
              <span className="brand-name">
                LS <span>TEAM</span>
              </span>
            </a>
            <p>
              Preparador Físico especializado em musculação com foco em
              resultados baseados em ciência.
            </p>
          </div>

          <nav className="footer-links" aria-label="Links do rodapé">
            <h4>Links Rápidos</h4>
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#resultados">Resultados</a>
            <a href="#contato">Contato</a>
          </nav>

          <div className="footer-social">
            <h4>Redes Sociais</h4>
            <div className="footer-social-icons">
              <a
                href="https://instagram.com/lg.lucas_santos"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a href="mailto:lucasoliveira0232@outlook.com" aria-label="Email">
                <Mail size={20} />
              </a>
              <a
                href="https://wa.me/5522998513777"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Lucas Santos — Preparador Físico.
            Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
