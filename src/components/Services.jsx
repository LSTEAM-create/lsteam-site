import { Dumbbell, Utensils, ClipboardList, Check, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Dumbbell,
    title: 'Somente Treino',
    text: 'Treino 100% personalizado, desenvolvido com embasamento científico para o seu objetivo — hipertrofia, emagrecimento ou saúde.',
    highlights: ['Treino 100% personalizado', 'Progressão planejada', 'Ajustes periódicos'],
  },
  {
    icon: Utensils,
    title: 'Somente Sugestão Alimentar',
    text: 'Sugestão alimentar alinhada ao seu objetivo e à sua rotina, para potencializar seus resultados de forma flexível e sustentável.',
    highlights: ['Alinhada ao seu objetivo', 'Flexível e sustentável', 'Ajustes conforme a evolução'],
  },
  {
    icon: ClipboardList,
    title: 'Treino e Sugestão Alimentar',
    text: 'O acompanhamento completo: treino personalizado e sugestão alimentar trabalhando juntos para acelerar sua transformação.',
    highlights: ['Acompanhamento completo', 'Treino + alimentação integrados', 'Máximo resultado'],
    featured: true,
  },
]

function Services() {
  return (
    <section id="servicos" className="section services">
      <div className="container">
        <div className="section-head">
          <span className="kicker reveal">// Serviços</span>
          <h2 className="section-title reveal">
            Planos de <span className="accent">Treinamento</span>
          </h2>
          <p className="section-desc reveal">
            Planos personalizados de treinamento para diferentes objetivos.
          </p>
        </div>

        <div className="services-grid">
          {services.map(s => (
            <div
              key={s.title}
              className={`service-card reveal ${s.featured ? 'featured' : ''}`}
            >
              {s.featured && <span className="service-tag">Mais Completo</span>}
              <div className="service-icon">
                <s.icon size={30} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul className="service-highlights">
                {s.highlights.map(h => (
                  <li key={h}>
                    <Check size={16} />
                    {h}
                  </li>
                ))}
              </ul>
              <a href="#contato" className="service-link">
                Saiba Mais
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
