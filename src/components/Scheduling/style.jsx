import styled from 'styled-components'

export const SchedulingContainer = styled.section`
  margin: 4rem 0;
  padding: 0 8rem;

  display: flex;
  align-items: center;

  height: 600px;
  color: ${(props) => props.theme.text};

  img {
    width: 50%;
    height: 120%;
    object-fit: contain;
    object-position: -50px 50px;
  }
`

export const SchedulingContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    font-size: 40px;

    span {
      color: ${(props) => props.theme.secondary};
    }
  }

  p {
    font-size: 1.2rem;
    width: 80%;

    span {
      color: ${(props) => props.theme.secondary};
    }
  }

  button {
    background: linear-gradient(
      150deg,
      rgba(0, 128, 15, 1) 41%,
      rgba(3, 229, 18, 1) 100%
    );
    border-radius: 8px;
    color: ${(props) => props.theme.text};

    width: 18rem;
    height: 3rem;
    transition: ease 0.4s;

    display: flex;
    align-items: center;
    justify-content: space-around;

    &:hover {
      cursor: pointer;
      background: linear-gradient(
        150deg,
        rgba(0, 128, 15, 1) 0%,
        rgba(3, 229, 18, 1) 78%
      );
    }
  }
`
