import { useState } from "react"
import { AiOutlineSwap } from 'react-icons/ai'

function Modal ({pokemon}) {
    const [frente, setFrente] = useState(true)
    console.log(pokemon)

    function type(elem) {
        return (
            <h4>{elem.type.name}</h4>
        )
    }

    return(
        <div className={`pokemonAtual ${pokemon.types[0].type.name}`}>
            <h2>{pokemon.species.name}</h2>
            <img src={frente? pokemon.sprites.front_default : pokemon.sprites.back_default} alt="" />
            {pokemon.types.map((elem) => type(elem))}
            <button onClick={() => setFrente(!frente)}><AiOutlineSwap/></button>
        </div>
    )
}

export default Modal