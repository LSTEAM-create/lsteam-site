import { useState } from 'react'
import { Phone, Mail, ArrowRight, Clock } from 'lucide-react'
import InstagramIcon from './InstagramIcon'

const WHATSAPP = '5522998513777'

const objectives = {
  hipertrofia: 'Ganhar massa muscular',
  emagrecimento: 'Emagrecimento',
  definicao: 'Definição muscular',
  saude: 'Saúde e bem-estar',
}

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    objective: '',
    message: '',
  })

  const handleSubmit = e => {
    e.preventDefault()
    const lines = [
      'Oi! Gostaria de falar sobre acompanhamento.',
      `Nome: ${form.name}`,
      `Email: ${form.email}`,
      `WhatsApp: ${form.phone}`,
      `Objetivo: ${objectives[form.objective] || form.objective}`,
      `Mensagem: ${form.message || 'Sem mensagem adicional'}`,
    ]
    window.open(
      `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`,
      '_blank',
    )
  }

  const set = field => e => setForm({ ...form, [field]: e.target.value })

  return (
    <section id="contato" className="section contact">
      <div className="container">
        <div className="section-head">
          <span className="kicker reveal">// Contato</span>
          <h2 className="section-title reveal">
            Comece Sua <span className="accent">Transformação</span>
          </h2>
          <p className="section-desc reveal">
            Pronto para começar? Preencha o formulário ou entre em contato
            diretamente — treinos baseados em ciência e totalmente
            individualizados.
          </p>
        </div>

        <div className="contact-grid">
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nome completo *</label>
                <input
                  id="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={set('name')}
                  placeholder="Seu nome"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">WhatsApp *</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={form.phone}
                  onChange={set('phone')}
                  placeholder="(22) 99999-9999"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={set('email')}
                  placeholder="seu@email.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="objective">Objetivo principal *</label>
                <select
                  id="objective"
                  required
                  value={form.objective}
                  onChange={set('objective')}
                >
                  <option value="">Selecione seu objetivo</option>
                  {Object.entries(objectives).map(([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={set('message')}
                placeholder="Conte um pouco sobre você e suas expectativas... (opcional)"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-lg btn-full">
              Enviar via WhatsApp
              <ArrowRight size={20} />
            </button>
          </form>

          <aside className="contact-info reveal">
            <h3>Informações de Contato</h3>
            <div className="contact-items">
              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Oi! Gostaria de falar sobre acompanhamento.')}`}
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
                href="https://instagram.com/lg.lucas_santos"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <span className="contact-item-icon">
                  <InstagramIcon size={19} />
                </span>
                <span>
                  <strong>Instagram</strong>
                  @lg.lucas_santos
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
