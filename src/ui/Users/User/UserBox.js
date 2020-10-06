import styled from "@emotion/styled";

export default styled.div`
  .close {
    height: 30px;
    width: 30px;
    position: absolute;
    color: #000;
    right: 0;
    top: 0;
    border: none;
    background: none;
    font-size: 30px;
    font-weight: 800;
    cursor: pointer;
    line-height: 0;
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: rotate(180deg);
    }
    padding: 0;
  }
  button {
    margin-bottom: 16px;
    width: 100%;
    color: #fff;
    padding: 8px 24px;
    border: 0;
    font-size: 24px;
    cursor: pointer;
    border-radius: 6px;
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
