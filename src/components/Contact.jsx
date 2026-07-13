import { Phone, Mail, Clock, Zap } from 'lucide-react'
import InstagramIcon from './InstagramIcon'
import WhatsAppIcon from './WhatsAppIcon'
import { waLink } from '../lib/whatsapp'

function Contact() {
  return (
    <section id="contato" className="section contact">
      <div className="container">
        <div className="section-head">
          <span className="kicker reveal">// Contato</span>
          <h2 className="section-title reveal">
            Comece Sua <span className="accent">Transformação</span>
          </h2>
          <p className="section-desc reveal">
            Sem formulário e sem burocracia: o primeiro passo é uma mensagem.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-cta reveal">
            <span className="contact-cta-badge">
              <Zap size={14} />
              Vagas limitadas por mês
            </span>
            <h3>Fale direto comigo no WhatsApp</h3>
            <p>
              Me conta seu objetivo e eu te explico como funciona a
              consultoria, os valores e as condições — sem compromisso.
            </p>
            <a
              href={waLink('Oi! Quero começar minha transformação. Pode me explicar como funciona a consultoria?')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg btn-full contact-cta-btn"
            >
              <WhatsAppIcon size={22} />
              Chamar no WhatsApp
            </a>
            <p className="contact-cta-note">
              Para manter o acompanhamento próximo e individualizado, atendo um
              número limitado de alunos por mês. Garanta a sua vaga.
            </p>
          </div>

          <aside className="contact-info reveal">
            <h3>Outros Canais</h3>
            <div className="contact-items">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <span className="contact-item-icon">
                  <Phone size={19} />
                </span>
                <span>
                  <strong>WhatsApp</strong>
                  (22) 99851-3777
                </span>
              </a>
              <a href="mailto:lucasoliveira0232@outlook.com" className="contact-item">
                <span className="contact-item-icon">
                  <Mail size={19} />
                </span>
                <span>
                  <strong>Email</strong>
                  lucasoliveira0232@outlook.com
                </span>
              </a>
              <a
                href="https://www.instagram.com/ls.lucas.melo"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <span className="contact-item-icon">
                  <InstagramIcon size={19} />
                </span>
                <span>
                  <strong>Instagram</strong>
                  @ls.lucas.melo
                </span>
              </a>
            </div>
            <div className="contact-note">
              <Clock size={18} />
              <p>
                Resposta rápida! Normalmente respondo em poucas horas nos dias
                úteis.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Contact
