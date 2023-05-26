import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 999 !important;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  fieldset {
    background-color: ${(props) => props.theme.background};
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.primary};
    height: 70vh;
    width: 80%;
    max-width: 1700px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    padding: 2rem 4rem;

    legend {
      position: absolute;
      top: 1rem;
      left: 3rem;
      color: $cyan-color-500;
      font-size: 24px;
      font-weight: 900;
      text-transform: uppercase;

      span {
        color: ${(props) => props.theme.secondary};
      }
    }

    label {
      display: none;
    }

    section {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    textarea {
      width: 100%;
      resize: none;
      min-height: 80px;

      background: transparent;
      border: 1px solid ${(props) => props.theme.text};
      padding: 20px;
      border-radius: 24px;
      text-transform: uppercase;
    }

    .btn-submit {
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

    .fechar-modal {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -2.5rem;
      right: 1rem;
      height: 30px;
      width: 30px;
      font-size: 1rem;
      color: white;
      border-radius: 50%;
      border: none;
      background-color: gray;
      cursor: pointer;
      opacity: 0.9;

      &:hover {
        opacity: 1;
      }
    }
  }
`

export const Input = styled.input`
  background: transparent;
  border: 1px solid ${(props) => props.theme.text};
  padding: 20px;
  border-radius: 24px;
  text-transform: uppercase;
  width: 45%;
  color: ${(props) => props.theme.text};
`
