import styled from "@emotion/styled";

export default styled.div`
  button {
    margin-bottom: 16px;
  }
  .deleteButton {
    background: #eb4d4b;
  }

  .editButton {
    background: #8e54e9;
  }

  .backButton {
    width: 80%;
    background: #b2bec3;
    margin: 0 auto;
    display: block;
  }
`;

export const UserBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 16px;

  img {
    background: #74b9ff;
    border-radius: 100%;
    margin-bottom: 3px;
  }
  div {
    color: #777;
    text-align: center;
  }
`;
