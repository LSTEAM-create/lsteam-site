import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'
import { waLink } from '../lib/whatsapp'

const TIP_DELAY_MS = 4500

function WhatsAppFloat() {
  const [tip, setTip] = useState(false)

  // mostra o balão uma vez por sessão, depois de alguns segundos
  useEffect(() => {
    if (sessionStorage.getItem('ls-wa-tip')) return
    const t = setTimeout(() => setTip(true), TIP_DELAY_MS)
    return () => clearTimeout(t)
  }, [])

  const dismiss = () => {
    setTip(false)
    sessionStorage.setItem('ls-wa-tip', '1')
  }

  return (
    <div className="whatsapp-wrap">
      {tip && (
        <div className="whatsapp-tip" role="status">
          <button
            className="whatsapp-tip-close"
            onClick={dismiss}
            aria-label="Fechar aviso"
          >
            <X size={13} />
          </button>
          <strong>Dúvidas?</strong> Me chama aqui! 👊
        </div>
      )}
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Falar no WhatsApp"
        onClick={dismiss}
      >
        <WhatsAppIcon size={26} />
      </a>
    </div>
  )
}

export default WhatsAppFloat
