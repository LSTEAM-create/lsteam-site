import { useState } from 'react'
import { Plus } from 'lucide-react'
import { waLink } from '../lib/whatsapp'

const faqs = [
  {
    q: 'Sou iniciante. A consultoria serve para mim?',
    a: 'Com certeza. O treino é montado exatamente para o seu nível e evolui junto com você. Iniciantes costumam ser quem mais sente diferença nos primeiros meses, porque cada detalhe já começa certo desde o início.',
  },
  {
    q: 'Treino em casa. Consigo acompanhar?',
    a: 'Sim. O plano é montado de acordo com a estrutura que você tem disponível — academia completa, academia de condomínio ou treino em casa. O que muda são as ferramentas, não a qualidade do planejamento.',
  },
  {
    q: 'Como recebo meu treino e o acompanhamento?',
    a: 'Depois da anamnese, você recebe seu plano completo, organizado e com todas as orientações. O acompanhamento e os ajustes acontecem de forma contínua, com contato direto comigo pelo WhatsApp.',
  },
  {
    q: 'Em quanto tempo começo a ver resultados?',
    a: 'Depende do seu objetivo, do seu ponto de partida e da sua constância. Mas, como você viu nas transformações aqui do site, com dedicação há alunos relatando mudanças visíveis já no primeiro mês.',
  },
  {
    q: 'E se eu não me adaptar a algum exercício?',
    a: 'Ajustes fazem parte do processo. O treino não é um documento fechado: conforme o seu feedback, exercícios, volume e intensidade são adaptados para funcionar para você.',
  },
  {
    q: 'Preciso tomar suplementos para ter resultado?',
    a: 'Não. Suplementos são apenas um complemento. A base do resultado é treino bem planejado, alimentação alinhada ao objetivo e constância — e é exatamente isso que trabalhamos juntos.',
  },
]

function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <div className="section-head">
          <span className="kicker reveal">// FAQ</span>
          <h2 className="section-title reveal">
            Perguntas <span className="accent">Frequentes</span>
          </h2>
          <p className="section-desc reveal">
            As dúvidas mais comuns de quem está prestes a começar.
          </p>
        </div>

        <div className="faq-list reveal">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                >
                  {item.q}
                  <Plus size={20} className="faq-icon" aria-hidden="true" />
                </button>
                <div id={`faq-answer-${i}`} className="faq-answer" role="region">
                  <p>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>

        <p className="faq-more reveal">
          Ficou com alguma outra dúvida?{' '}
          <a
            href={waLink('Oi! Tenho uma dúvida sobre a consultoria.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Me chama no WhatsApp
          </a>
          .
        </p>
      </div>
    </section>
  )
}

export default Faq
