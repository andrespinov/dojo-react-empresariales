import React from 'react'

export default function SearchBarPokemon() {
    return (
        <div className='form-group'>
            <label htmlFor='buscarPokemon' className='text-white'>Buscar Pokemon</label>
            <input type='text' className='form-control' id='buscarPokemon' value='pikachu'></input>
            <button className='btn btn-primary mt-3'>Enviar</button>
        </div>
    )

}