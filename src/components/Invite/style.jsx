import styled from 'styled-components'

export const InviteContainer = styled.section`
  margin: 8rem 0;
  padding: 0 4rem;
  height: 650px;

  display: flex;
  justify-content: space-between;

  img {
    max-height: 600px;
    width: 40%;
    object-fit: contain;
  }
`

export const InviteContent = styled.div`
  padding-left: 2rem;
  width: 55%;

  display: flex;
  flex-direction: column;
  justify-content: center;
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
