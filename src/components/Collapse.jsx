import React, { useState } from 'react'
import Chevron from '../assets/icons/Chevron.png'

const Collapse = ({ title, content, liste }) => {
  const [isOpen, setIsOpen] = useState(false)
  const hasContent = content && content.length
  const hasListe = liste && liste.length
  return (
    <div className="accordion">
      <div onClick={() => setIsOpen(!isOpen)} className="title">
        <h2>{title}</h2>
        <img className={isOpen ? 'active' : ''} src={Chevron} alt="chevron" />
      </div>
      {isOpen && (
        <div className="content">
          {hasContent && <span>{content}</span>}
          {hasListe && <ul>{liste}</ul>}
        </div>
      )}
    </div>
  )
}

export default Collapse
