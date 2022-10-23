import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Modal from "./components/Modal";
import Charmander from "./img/charmander.png";
import Pidgeotto from "./img/pidgeotto.png";
import Api from "./services";
import Botoes from "./styles/Botoes";
import CardDiv from "./styles/Card";
import Global from "./styles/global";
import Principal from "./styles/home";

function App() {
  const [listPokemon, setListPokemon] = useState([]);
  const [pokemon, setPokemon] = useState(null);
  const [pagina, setPagina] = useState(0)
  const [allPokemons, setAllPokemons] = useState([])
  const [pesquisa, setPesquisa] = useState('')

  async function pegarPokemon() {
    try {
      const { data } = await Api.get(`pokemon/?limit=20&offset=${pagina*20}`);
      console.log(data)
      // console.log(data)
      setListPokemon(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function pegarTodosPokemon() {
    try {
      const { data } = await Api.get(`pokemon/?limit=9999&offset=0`);
      console.log(data)
      console.log(data)
      setAllPokemons(data.results);
    } catch (error) {
      console.error(error);
    }
  }

  async function pesquisarPokemon () {
    const poke = allPokemons.find((elem) => elem.name.toLowerCase().includes(pesquisa.toLowerCase()))
    console.log(poke)
      try {
          const {data} = await Api.get(poke.url)
          console.log(data)
          setPokemon(data)
      } catch (error) {
          console.error(error)
      }
  }

  useEffect(() => {
    pegarTodosPokemon()
  },[])

  useEffect(() => {
    pegarPokemon();
    // console.log(listPokemon)
  }, [pagina]);

  return (
    <Principal>
      <Global />
      <header>
      <div className="topo">
      <h1>GRPokedex</h1>
        <form onSubmit={(e) => {
          e.preventDefault()
          pesquisarPokemon()
        }}>
          <input onChange={(e) => setPesquisa(e.target.value)} type="text" name="nome" id="nome" placeholder="Procure um Pokemon !"/>
          <button type="submit">Procurar</button>
        </form>
      </div>
      <div>
        {pokemon && <Modal pokemon={pokemon}/>}
      </div>
      </header>
      <div>
        <img
          className="pokemonBody charmander"
          src={Charmander}
          alt="charmander"
        />
        <img
          className="pokemonBody pidgeotto"
          src={Pidgeotto}
          alt="pidgeotto"
        />
      </div>
      <CardDiv>
        <ul className="listPokemon">
          {listPokemon.results?.map((elem) => (
            <Card elem={elem} setPokemon={setPokemon} />
          ))}
        </ul>
      </CardDiv>
      <Botoes>
            {listPokemon.previous && <button onClick={() => {setPagina(pagina-1)}}>Página anterior</button>}
            {listPokemon.next && <button onClick={() => {setPagina(pagina+1)}}>Próxima Página</button>}
      </Botoes>
    </Principal>
  );
}

export default App;
