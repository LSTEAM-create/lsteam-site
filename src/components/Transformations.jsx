import { Check } from 'lucide-react'
import kauaImg from '../assets/images/image1.png'
import luisaImg from '../assets/images/image3.png'
import lucasImg from '../assets/images/lucas-before-after.png'
import mariaImg from '../assets/images/maria-before-after.png'

const transformations = [
  {
    name: 'Kauã',
    age: 17,
    duration: '1 ano',
    durationLabel: 'de treino',
    goal: 'Ganho de massa muscular e força',
    image: kauaImg,
    results: [
      'Ganho de 6kg de massa magra',
      'Aumento significativo de força',
      'Físico almejado alcançado',
    ],
  },
  {
    name: 'Luisa',
    age: 17,
    duration: '5 meses',
    durationLabel: 'de consultoria',
    durationNote: '* Treina há 2 anos',
    goal: 'Definição e manutenção de massa magra',
    image: luisaImg,
    results: [
      'Redução de 5kg (gordura corporal)',
      'Manutenção da massa muscular',
      'Ganho expressivo de força',
    ],
  },
  {
    name: 'Lucas',
    age: 24,
    duration: '3 anos',
    durationLabel: 'de consultoria',
    goal: 'Emagrecimento (meta inicial: -10kg)',
    image: lucasImg,
    results: [
      'Perda de 20kg na balança (superou a meta)',
      'Ganho de força muito expressivo',
      'Composição corporal balanceada',
    ],
  },
  {
    name: 'Maria',
    age: 21,
    duration: '1 mês',
    durationLabel: 'de treino',
    goal: 'Redução de medidas e emagrecimento',
    image: mariaImg,
    results: [
      'Perda visível de peso e medidas',
      'Aumento progressivo de força',
      'Evolução rápida rumo ao objetivo final',
    ],
  },
]

function Transformations() {
  return (
    <section id="resultados" className="section transformations">
      <div className="container">
        <div className="section-head">
          <span className="kicker reveal">// Resultados</span>
          <h2 className="section-title reveal">
            Transformações <span className="accent">Reais</span>
          </h2>
          <p className="section-desc reveal">
            Veja os resultados alcançados pelos meus alunos com treinos
            personalizados e baseados em ciência.
          </p>
        </div>

        <div className="transformations-grid">
          {transformations.map(t => (
            <article key={t.name} className="transformation-card reveal">
              <div className="transformation-media">
                <img
                  src={t.image}
                  alt={`Antes e depois — ${t.name}`}
                  loading="lazy"
                />
                <div className="transformation-labels" aria-hidden="true">
                  <span>Antes</span>
                  <span>Depois</span>
                </div>
              </div>
              <div className="transformation-body">
                <div className="transformation-head">
                  <h3>
                    {t.name}, <span>{t.age}</span>
                  </h3>
                  <span className="transformation-duration">
                    {t.duration} {t.durationLabel}
                  </span>
                </div>
                <p className="transformation-goal">{t.goal}</p>
                <ul className="transformation-results">
                  {t.results.map(r => (
                    <li key={r}>
                      <Check size={16} />
                      {r}
                    </li>
                  ))}
                </ul>
                {t.durationNote && (
                  <p className="transformation-note">{t.durationNote}</p>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="transformations-disclaimer reveal">
          Essas são apenas algumas das transformações que alcançamos juntos.
          Resultados individuais podem variar.
        </p>
      </div>
    </section>
  )
}

export default Transformations
