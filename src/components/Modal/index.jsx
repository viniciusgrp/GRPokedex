import { useState } from "react"
import { AiOutlineSwap } from 'react-icons/ai'

function Modal ({pokemon}) {
    const [frente, setFrente] = useState(true)
    console.log(pokemon)

    return(
        <div className="pokemonAtual">
            <h2>{pokemon.species.name}</h2>
            <img src={frente? pokemon.sprites.front_default : pokemon.sprites.back_default} alt="" />
            <button onClick={() => setFrente(!frente)}><AiOutlineSwap/></button>
        </div>
    )
}

export default Modal