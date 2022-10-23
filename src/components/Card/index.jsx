import Api from "../../services";

function Card({ elem, setPokemon }) {

    async function pokemonData () {
        try {
            const {data} = await Api.get(elem.url)
            console.log(data)
            setPokemon(data)
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <li>
        <h2>{elem.name}</h2>
        <button onClick={pokemonData}>Ver Pokemon</button>
    </li>
  );
}

export default Card;
