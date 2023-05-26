import { X } from 'phosphor-react'
import { FormContainer } from './style'

export function Form({ onClose }) {
  console.log(onClose)

  return (
    <FormContainer className="modal-container">
      <fieldset className="modal-content">
        <legend>
          Preencha o formulario para <span>saber mais!</span>{' '}
        </legend>

        <section>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nome:"
            required
          />

          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="E-mail:"
            required
          />
        </section>

        <section>
          <label htmlFor="tel">Telefone</label>
          <input
            type="tel"
            id="tel"
            name="tel"
            placeholder="Telefone:"
            required
          />

          <label htmlFor="tel">Site ou mídias sociais</label>
          <input
            type="text"
            id="site"
            name="site"
            placeholder="Site ou mídias sociais:"
            required
          />
        </section>

        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
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
