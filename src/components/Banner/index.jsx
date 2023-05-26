import { BannerContainer, DescriptionContainer, Gradient } from './styles'

import MockupBanner from '../../assets/mockup-banner.png'
import { ArrowArcRight, ArrowRight } from 'phosphor-react'
import { BtnOpenModal } from '../BtnOpenModal'

export function Banner() {
  return (
    <BannerContainer>
      <Gradient />
      <DescriptionContainer>
        <h1>
          Agendamento simples e automático com <span>futize!</span>
        </h1>

        <p>
          Chega de preocupações com agendamentos complicados e desencontros de
          horários. Com o Futize, você terá todo o controle das partidas na
          palma das suas mãos e seus clientes terão uma experiência única.
        </p>

        <BtnOpenModal text="Comerçar agora" />
      </DescriptionContainer>
      <img src={MockupBanner} alt="" />
    </BannerContainer>
  )
}
