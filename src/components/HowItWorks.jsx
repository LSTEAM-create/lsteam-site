import { MessageCircle, ClipboardList, Dumbbell, TrendingUp, ArrowRight } from 'lucide-react'
import { waLink } from '../lib/whatsapp'

const steps = [
  {
    icon: MessageCircle,
    title: 'Primeiro Contato',
    text: 'Você me chama no WhatsApp e me conta seu objetivo. Sem compromisso e sem enrolação.',
  },
  {
    icon: ClipboardList,
    title: 'Anamnese Completa',
    text: 'Levantamento detalhado da sua rotina, histórico de treino, estrutura disponível e limitações.',
  },
  {
    icon: Dumbbell,
    title: 'Seu Plano Personalizado',
    text: 'Você recebe o treino montado 100% para você, organizado e com todas as orientações explicadas.',
  },
  {
    icon: TrendingUp,
    title: 'Acompanhamento Contínuo',
    text: 'Ajustes periódicos conforme sua evolução, com contato direto comigo durante todo o processo.',
  },
]

function HowItWorks() {
  return (
    <section id="como-funciona" className="section how-it-works">
      <div className="container">
        <div className="section-head">
          <span className="kicker reveal">// Como Funciona</span>
          <h2 className="section-title reveal">
            Do Contato ao <span className="accent">Resultado</span>
          </h2>
          <p className="section-desc reveal">
            O caminho é simples: quatro passos separam você do seu primeiro
            treino personalizado.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <div key={step.title} className="step-card reveal">
              <span className="step-number">0{i + 1}</span>
              <div className="step-icon">
                <step.icon size={24} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>

        <div className="steps-cta reveal">
          <a
            href={waLink('Oi! Quero dar o primeiro passo na consultoria.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Dar o Primeiro Passo
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
