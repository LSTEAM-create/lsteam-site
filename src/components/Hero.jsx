import { ArrowRight, ChevronDown } from 'lucide-react'
import emblem from '../assets/images/favicon.png'

const stats = [
  { value: '3 anos', label: 'de experiência' },
  { value: 'Consultoria', label: 'individualizada' },
  { value: 'Resultados', label: 'concretos' },
  { value: '100%', label: 'personalizado' },
]

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge reveal">
            <span className="hero-badge-dot" />
            LS TEAM — FORJA DE GIGANTES
          </div>
          <h1 className="hero-title reveal">
            Treinos com <br />
            propósito, <span className="accent">resultados reais</span>
          </h1>
          <p className="hero-desc reveal">
            Transforme seu corpo e sua saúde com treinos personalizados,
            baseados em ciência e adaptados às suas necessidades e objetivos
            individuais.
          </p>
          <div className="hero-actions reveal">
            <a href="#contato" className="btn btn-primary btn-lg">
              Comece Sua Transformação
              <ArrowRight size={20} />
            </a>
            <a href="#resultados" className="btn btn-ghost btn-lg">
              Ver Resultados
            </a>
          </div>
        </div>
        <div className="hero-emblem reveal" aria-hidden="true">
          <img src={emblem} alt="" loading="eager" />
        </div>
      </div>

      <div className="container">
        <div className="hero-stats reveal">
          {stats.map(s => (
            <div key={s.label} className="hero-stat">
              <span className="hero-stat-value">{s.value}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#sobre" className="hero-scroll" aria-label="Rolar para a próxima seção">
        <ChevronDown size={22} />
      </a>
    </section>
  )
}

export default Hero
