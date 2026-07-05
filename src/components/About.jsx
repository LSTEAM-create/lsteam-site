import { BookOpen, Heart, Activity } from 'lucide-react'
import aboutImg from '../assets/images/image5.png'

const values = [
  {
    icon: BookOpen,
    title: 'Baseado em Ciência',
    text: 'Todos os treinos são desenvolvidos com base em evidências científicas, sem achismos ou métodos ultrapassados.',
  },
  {
    icon: Heart,
    title: 'Totalmente Personalizado',
    text: 'Cada treino é planejado respeitando suas individualidades, objetivos e limites pessoais.',
  },
  {
    icon: Activity,
    title: 'Resultados Sustentáveis',
    text: 'Foco em resultados reais, seguros e que possam ser mantidos a longo prazo.',
  },
]

function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container">
        <div className="about-grid">
          <div className="about-media reveal">
            <div className="about-frame">
              <img
                src={aboutImg}
                alt="Preparador Físico Lucas Melo planejando treino"
                loading="lazy"
              />
            </div>
          </div>

          <div className="about-content">
            <span className="kicker reveal">// Sobre Mim</span>
            <h2 className="section-title reveal">
              Preparador Físico <span className="accent">Lucas Melo</span>
            </h2>
            <p className="about-text reveal">
              Preparador Físico com atuação direta em treinamento personalizado,
              tanto com foco estético quanto voltado à saúde, sempre respeitando
              as individualidades, objetivos e limites de cada pessoa.
            </p>
            <p className="about-text reveal">
              Todos os meus treinos são desenvolvidos com embasamento
              científico, deixando de lado achismos e métodos ultrapassados.
              Cada decisão — da escolha dos exercícios ao volume e à intensidade
              — é pensada para gerar resultados reais, seguros e sustentáveis.
            </p>
            <p className="about-text reveal">
              Acredito que o treino precisa fazer sentido para quem executa. Meu
              objetivo é aproximar você do processo, ajudando a entender o
              porquê de cada estratégia, criando constância, confiança e
              evolução ao longo do tempo.
            </p>

            <div className="about-values">
              {values.map(v => (
                <div key={v.title} className="about-value reveal">
                  <div className="about-value-icon">
                    <v.icon size={22} />
                  </div>
                  <div>
                    <h4>{v.title}</h4>
                    <p>{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
