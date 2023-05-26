import styled from 'styled-components'

export const ButtonOpenModal = styled.button`
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
`
