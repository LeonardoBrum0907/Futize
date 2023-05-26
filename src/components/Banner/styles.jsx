import styled from 'styled-components'
import bannerBg from '../../assets/banner-bg.png'

export const BannerContainer = styled.div`
  position: relative;
  height: 100vh;
  padding: 0 8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-image: url(${bannerBg});
  background-size: cover;
  background-position: 50%;

  img {
    width: 50%;
    height: 70%;
    object-fit: contain;
    object-position: 0 70px;
  }
`

export const DescriptionContainer = styled.article`
  width: 50%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  span {
    color: ${(props) => props.theme.secondary};
  }

  p {
    font-size: 1.5rem;
    width: 90%;
  }
`

export const Gradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 10%;
  background: linear-gradient(${(props) => props.theme.black}, transparent);
`
