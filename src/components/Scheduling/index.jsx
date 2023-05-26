import { SchedulingContainer, SchedulingContent } from './style'
import MockupScheduling from '../../assets/mockup-scheduling.png'
import { BtnOpenModal } from '../BtnOpenModal'

export function Scheduling() {
  return (
    <SchedulingContainer>
      <SchedulingContent>
        <h2>
          Agendamento <span>Automático</span>
        </h2>
        <p>
          Nunca mais perca tempo negociando horários por telefone ou WhatsApp.
          Seus clientes terão acesso a uma interface intuitiva e simples, onde
          poderão visualizar todos os horários disponíveis, valores e realizar a
          reserva no seu estabelecimento. Basta selecionar o horário desejado e
          fazer a reserva de forma <span>rápida</span> e <span>fácil</span>.
        </p>

        <BtnOpenModal text="Ver mais" />
      </SchedulingContent>
      <img src={MockupScheduling} alt="" />
    </SchedulingContainer>
  )
}
