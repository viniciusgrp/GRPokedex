import styled from "styled-components";

const CardDiv = styled.div`
  ul {
    width: 80%;
    margin: 0 auto;
    gap: 10px;
    list-style: none;
    display: flex;
    justify-content: space-between;
  }

  li {
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
    word-break: break-all;

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

  @media screen and (max-width: 419px){
    ul {
            width: 100%;

            li {
                width: 80%;
                margin: 0 auto;
            }
        }
  }

  @media screen and (max-width: 767px){
    ul {
            width: 100%;

            li {
                width: 40%;
                margin: 0 auto;
            }
        }
  }

  @media screen and (max-width: 1149px){
    li {
      width: 30%;
    }
  }

  @media screen and (min-width: 1150px) {
  li {
    width: 22%;
  }    
  }
`;

export default CardDiv;
