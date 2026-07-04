# LS Team — Forja de Gigantes

Site institucional do preparador físico Lucas Santos, com a mesma identidade
visual Dark Industrial do app de treinos (vercelproject).

## Comandos

```bash
npm install      # instalar dependências (primeira vez)
npm run dev      # rodar em desenvolvimento (http://localhost:5173)
npm run build    # gerar versão de produção na pasta dist/
npm run preview  # visualizar a versão de produção localmente
```

## Publicar no GitHub Pages

1. `npm run build`
2. Copie o conteúdo da pasta `dist/` para o repositório
   `LSTEAM-create/portfolio` (branch que o GitHub Pages serve).
3. O `vite.config.js` já usa `base: './'`, então funciona em
   `lsteam-create.github.io/portfolio/` sem ajustes.

## Estrutura

- `src/components/` — uma seção por componente (Header, Hero, About,
  Methodology, Services, Transformations, Testimonials, Contact, Footer,
  WhatsAppFloat)
- `src/style.css` — design system completo (tokens de cor, tipografia,
  glassmorphism) espelhado do app
- `src/assets/images/` — fotos e logos

## Trocar fotos / textos

- Antes e depois: `src/components/Transformations.jsx` (array no topo)
- Depoimentos: `src/components/Testimonials.jsx` (array no topo)
- Foto da seção Sobre: `src/components/About.jsx` (import no topo)
- WhatsApp/emails/Instagram: `src/components/Contact.jsx` e `Footer.jsx`
