import styled from "@emotion/styled";

const Box = styled.div`
  background: #fafafa;
  display: flex;
  flex-direction: column;
  width: 80%;

  .table {
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.03);
  }

  .tableControls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;

    * {
      font-size: 16px;
      font-family: "Poppins", sans-serif;
    }

    button {
      color: #fff;
      background: #8e54e9;
      background-size: 200% auto;
      border: 0;
      border-radius: 3px;
      padding: 8px 24px;
      display: flex;
      font-weight: 600;
      text-transform: uppercase;
      align-items: center;
      letter-spacing: 1px;
      transition: 0.5s;
      svg {
        margin-right: 16px;
      }
      cursor: pointer;
      &:hover {
        background: #8e04e9;
        color: #fff;
        text-decoration: none;
      }
      &:focus {
        outline: transparent;
      }
    }
    input {
      -webkit-border-radius: 6px;
      -moz-border-radius: 6px;
      border-radius: 6px;
      &:focus {
        outline: 2px solid #a29bfe;
      }
    }
    @media only screen and (max-width: 600px) {
      flex-direction: column;
      button {
        position: fixed;
        bottom: 0;
        width: 100%;
        justify-content: center;
        height: 48px;
      }
      input {
        width: 100%;
      }
    }
  }

  .tableHeader {
    position: relative;
    background: #fff;
    display: flex;
    width: 100%;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    z-index: 3;
    font-weight: 500;
    text-transform: capitalize;
    @media only screen and (max-width: 600px) {
      display: none;
    }
    > div {
      flex: 1;
      padding: 20px;
    }
  }
  .tableBody {
    position: relative;
    height: 60vh;
    overflow: auto;
    width: 100%;
    background: #fafafa;
    .tableRow {
      cursor: ${(props) => (props.clickable ? "pointer" : "auto")};
      border-radius: 6px;
      background: #fff;
      display: flex;
      border-bottom: 1px solid #fafafa;
      margin: 4px 0;
      font-size: 14px;
      color: #555;
      transition: background 0.1s ease;
      &:hover {
        background: #a29bfe;
        color: white;
      }
      @media only screen and (max-width: 600px) {
        margin-bottom: 16px;
      }

      > div {
        padding: 10px 20px;
        flex: 1;
        display: flex;
        align-items: center;
        @media only screen and (max-width: 600px) {
          flex-direction: column;
        }

        img {
          max-width: 60px;
          background: #74b9ff;
          border-radius: 60px;
          margin-right: 20px;
          @media only screen and (max-width: 600px) {
            margin: 0;
            margin-bottom: 20px;
          }
        }
      }
      @media only screen and (max-width: 600px) {
        flex-direction: column;
        padding: 20px;
        > div {
          padding: 5px 0;
        }
      }
    }
  }
`;

export default Box;
