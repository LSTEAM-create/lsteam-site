import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Kauã',
    age: 17,
    goal: 'Ganho de massa muscular',
    text: "Cara, olhar meu 'antes e depois' é bizarro. Eu entrei na consultoria com o objetivo fixo de ganhar massa, porque eu me sentia muito magro. Em 1 ano de trabalho duro, consegui colocar 6kg na carcaça. O que mais me impressionou não foi só a estética, mas a força. Tô pegando cargas que nunca imaginei. Finalmente cheguei no físico que eu almejava. Agora é manter e evoluir constantemente.",
  },
  {
    name: 'Luisa',
    age: 17,
    goal: 'Secar sem perder volume',
    text: 'Eu já treino há pelo menos 2 anos, mas sentia que precisava de um ajuste fino para voltar a evoluir. Em 5 meses de consultoria, a gente conseguiu exatamente o que eu queria: secar sem perder volume. Perdi 5kg, segurei toda a minha massa muscular e, incrivelmente, minha força aumentou mesmo em déficit calórico. O protocolo foi perfeito pra mim.',
  },
  {
    name: 'Maria',
    age: 21,
    goal: 'Perda de peso e evolução',
    text: 'Estou completando apenas 1 mês de consultoria e já estou chocada com a rapidez dos resultados. Já tive uma perda de peso visível (as roupas já estão diferentes!) e sinto que estou evoluindo nos treinos a cada semana, sempre subindo um pouco a carga. Se em um mês já mudou assim, mal posso esperar para ver como vou estar daqui a pouco. Estamos no caminho certo!',
  },
  {
    name: 'Laura',
    age: 21,
    goal: 'Ganho de volume e definição',
    text: 'Comecei a consultoria com uma meta difícil: queria ganhar volume, mas precisava focar muito em costas e glúteo. Fizemos um trabalho intenso de construção por 4 meses e conquistamos exatamente o volume que eu queria nessas áreas. Agora que viramos a chave para a fase de secar e definir, estou impressionada. A cada dia que passa meu corpo responde melhor e a definição está vindo muito rápido em cima do que construímos!',
  },
]

const AUTO_MS = 9000

function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef(null)

  const prev = () => setCurrent(c => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent(c => (c === testimonials.length - 1 ? 0 : c + 1))

  // avança sozinho, pausa com o mouse em cima e respeita reduced-motion
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (paused || reduced) return
    timer.current = setInterval(next, AUTO_MS)
    return () => clearInterval(timer.current)
  }, [paused, current])

  const t = testimonials[current]

  return (
    <section id="depoimentos" className="section testimonials">
      <div className="container">
        <div className="section-head">
          <span className="kicker reveal">// Depoimentos</span>
          <h2 className="section-title reveal">
            O Que Dizem <span className="accent">Meus Alunos</span>
          </h2>
          <p className="section-desc reveal">
            Resultados reais de pessoas reais que transformaram suas vidas.
          </p>
        </div>

        <div
          className="testimonial-carousel reveal"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button className="carousel-btn" onClick={prev} aria-label="Depoimento anterior">
            <ChevronLeft size={22} />
          </button>

          <figure className="testimonial-card" key={current}>
            <Quote size={40} className="testimonial-quote" aria-hidden="true" />
            <div className="testimonial-stars" aria-label="5 de 5 estrelas">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={17} fill="currentColor" />
              ))}
            </div>
            <blockquote className="testimonial-text">“{t.text}”</blockquote>
            <figcaption className="testimonial-author">
              <strong>
                {t.name}, {t.age}
              </strong>
              <span>{t.goal}</span>
            </figcaption>
          </figure>

          <button className="carousel-btn" onClick={next} aria-label="Próximo depoimento">
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              className={`dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Ver depoimento de ${item.name}`}
            />
          ))}
        </div>

        <div className="testimonials-cta reveal">
          <p>Pronto para ser o próximo?</p>
          <a href="#contato" className="btn btn-primary btn-lg">
            Quero Minha Transformação
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
