import React, { useState } from 'react'
import { Form } from '../Form'
import { ButtonOpenModal } from './style'
import { ArrowRight } from 'phosphor-react'

export function BtnOpenModal({ text }) {
  const [isModalOpen, setModalOpen] = useState(false)

  const handleButtonClick = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <div>
      <ButtonOpenModal onClick={handleButtonClick}>
        {text} <ArrowRight />{' '}
      </ButtonOpenModal>
      {isModalOpen && <Form onClose={handleCloseModal} />}
    </div>
  )
}
