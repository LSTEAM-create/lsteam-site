// Contato central do WhatsApp — usado em todos os CTAs do site
export const WHATSAPP = '5522998513777'

export const DEFAULT_MESSAGE = 'Oi! Gostaria de falar sobre acompanhamento.'

export const waLink = (message = DEFAULT_MESSAGE) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`
