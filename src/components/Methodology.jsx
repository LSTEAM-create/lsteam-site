import { Microscope, UserCheck, Target, TrendingUp } from 'lucide-react'

const items = [
  {
    icon: Microscope,
    title: 'Baseado em Ciência',
    text: 'Cada treino é cuidadosamente planejado considerando volume, intensidade, frequência e progressão. Nada é deixado ao acaso.',
  },
  {
    icon: UserCheck,
    title: 'Totalmente Personalizado',
    text: 'Planos personalizados de treinamento para diferentes objetivos. Cada programa é único, assim como cada aluno.',
  },
  {
    icon: Target,
    title: 'Foco em Resultados',
    text: 'Treinos planejados para alcançar seus objetivos de forma eficiente, com acompanhamento constante da sua evolução.',
  },
  {
    icon: TrendingUp,
    title: 'Progressão Inteligente',
    text: 'Ajustes periódicos no treino de acordo com sua evolução e necessidades, garantindo resultados contínuos.',
  },
]

function Methodology() {
  return (
    <section id="metodologia" className="section methodology">
      <div className="container">
        <div className="section-head">
          <span className="kicker reveal">// Metodologia</span>
          <h2 className="section-title reveal">
            Meus <span className="accent">Diferenciais</span>
          </h2>
          <p className="section-desc reveal">
            O que torna minha metodologia única e eficaz para transformar seu
            corpo e sua saúde.
          </p>
        </div>

        <div className="methodology-grid">
          {items.map((item, i) => (
            <div key={item.title} className="method-card reveal">
              <span className="method-index">0{i + 1}</span>
              <div className="method-icon">
                <item.icon size={26} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Methodology
