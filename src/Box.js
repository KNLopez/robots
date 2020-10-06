import styled from "@emotion/styled";

const Box = styled.div`
  display: flex;
  min-height: 100vh;
  background: #fafafa;
  justify-content: center;
  align-items: center;
  * {
    font-family: "Poppins", sans-serif;
  }
  .close {
    height: 30px;
    width: 30px;
    position: absolute;
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
  }
`;

export default Box;
