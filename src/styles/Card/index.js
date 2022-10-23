import styled from "styled-components";

const CardDiv = styled.div`
  ul {
    width: 80%;
    margin: 0 auto;
    gap: 10px;
    list-style: none;
  }

  li {
    width: 24%;
    border: 1px solid red;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100px;
    background-color: blue;

    button {
        cursor: pointer;
        padding: 5px;
        background-color: red;
        color: white;
        font-weight: 700;
        border: 1px solid white;
        border-radius: 5px;
    }
  }

  h2 {
    color: white;
  }
`;

export default CardDiv;
