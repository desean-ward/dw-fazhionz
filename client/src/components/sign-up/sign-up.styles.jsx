import styled from "styled-components";

export const SignUpFormContainer = styled.div`
  max-width: 450px;
`;

export const SignUpForm = styled.div``;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: space-between;
  gap: 1em;

  @media (width < 540px) {
    .custom-button {
      width: 100%;
    }
  }
`;

export const ErrorMessageContainer = styled.div`
  color: red;
  margin-top: 1em;
`;
