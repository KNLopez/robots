import styled from "@emotion/styled";

export default styled.div`
  width: 80%;
  margin: 0 auto;
  .close {
    height: 30px;
    width: 30px;
    position: absolute;
    right: 0;
    color: #000;
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
  input {
    flex: 1;
    display: flex;
    margin-bottom: 16px;
    width: 100%;
    box-sizing: border-box;
  }

  button {
    width: 100%;
    color: #fff;
    background: #8e54e9;
    padding: 8px 24px;
    border: 0;
    font-size: 24px;
    cursor: pointer;
  }
`;
