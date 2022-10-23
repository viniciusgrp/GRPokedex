import styled from "styled-components";

const Principal = styled.div`
header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
    margin: 1rem 0;

    .topo {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 80%;
        padding: 0 20px;

        input {
            padding: 4px;
            border-color: red;
        }
        button {
            padding: 5px;
            background-color: blue;
            color: white;
            border: 1px solid red;
        }
    }
    h1 {
        color: yellow;
    }

    .pokemonAtual {
        position: relative;
        border: 1px solid red;
        border-radius: 5px;
        padding: 10px 10px 0;
        text-transform: uppercase;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;

        img {
            width: 200px;
        }

        button {
            position: absolute;
            top: 55px;
            right: 15px;
            background-color: transparent;
            border: none;
            color: white;
            font-size: 30px;
            cursor: pointer;
        }
    }
}
    .pokemonBody {
        height: 250px;
        position: fixed;
    }

    .charmander {
        bottom: 2%;
        right: 2%;
        z-index: -1;
    }

    .pidgeotto {
        bottom: 2%;
        left: 2%;
        z-index: -1;
    }

    width: 80%;
    margin: 0 auto;
`

export default Principal