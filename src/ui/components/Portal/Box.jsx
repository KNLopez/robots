import styled from "@emotion/styled";

export default styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  background: white;
  box-shadow: 5px 0 20px rgba(0, 0, 0, 0.1);
  width: 30vw;
  height: 100vh;
  z-index: 5;
  -webkit-animation-duration: 0.4s;
  animation-duration: 0.4s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
  * {
    font-family: "Poppins", sans-serif;
  }
  @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translateX(20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
