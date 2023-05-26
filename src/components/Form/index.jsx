import { X } from 'phosphor-react'
import { FormContainer, Input } from './style'

export function Form({ onClose }) {
  return (
    <FormContainer className="modal-container">
      <fieldset className="modal-content">
        <legend>
          Preencha o formulario para <span>saber mais!</span>{' '}
        </legend>

        <section>
          <label htmlFor="name">Nome</label>
          <Input name="name" placeholder="Nome:" required />

          <label htmlFor="email">E-mail</label>
          <Input name="email" placeholder="E-mail:" required />
        </section>

        <section>
          <label htmlFor="tel">Telefone</label>
          <Input name="tel" placeholder="Telefone:" required />

          <label htmlFor="tel">Site ou mídias sociais</label>
          <Input name="site" placeholder="Site ou mídias sociais:" required />
        </section>

        <label htmlFor="message">Mensagem</label>
        <textarea
          name="message"
          placeholder="Dê-nos uma breve descrição do seu negócio"
          required
        ></textarea>

        <button className="btn-submit" type="submit">
          Enviar
        </button>

        <button
          className="fechar-modal"
          id="fechar-modal-form"
          onClick={onClose}
        >
          <X />
        </button>
      </fieldset>
    </FormContainer>
  )
}
