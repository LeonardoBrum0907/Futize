import { InviteContainer, InviteContent } from './style'
import MockupInvite from '../../assets/mockup-invite.png'
import { BtnOpenModal } from '../BtnOpenModal'

export function Invite() {
  return (
    <InviteContainer>
      <img src={MockupInvite} alt="" />
      <InviteContent>
        <h2>
          Pagamento <span>antecipado</span> e Experiência{' '}
          <span>Simplificada</span>{' '}
        </h2>

        <p>
          Esqueça os problemas com pagamento e inadimplência. Com o Futize, o
          pagamento será realizado diretamente pelo sistema, garantindo a
          confirmação da data escolhida pelos clientes. Além disso, todos os
          jogadores poderão fazer seus pagamentos individualmente, evitando
          qualquer transtorno financeiro para o você!
        </p>

        <p>
          Além disso, seus clientes não precisarão mais se preocupar com quem
          vai comparecer ou não. Assim que cada jogador realizar o pagamento,
          seu nome será automaticamente adicionado à lista de presença da
          partida, com essa lista é possível sortear o time no próprio sistema.
          Dessa forma, você terá total controle sobre os participantes e
          garantirá uma experiência organizada e eficiente para seus clientes.
        </p>

        <BtnOpenModal text="Falar com especialista" />
      </InviteContent>
    </InviteContainer>
  )
}
