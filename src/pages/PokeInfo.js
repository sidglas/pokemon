import React  from 'react'
import Rest from '../utils/rest'

const baseUrl = 'https://pokeapi.co/api/v2/'
const { useGet } = Rest(baseUrl)

//const PokeInfo = () => {
const PokeInfo = ({match}) => {
const infoPoke = useGet(`pokemon/${match.params.data}`)


return (
  <>
    <pre>{ JSON.stringify(infoPoke.loading) }</pre>
    <pre>{ JSON.stringify(infoPoke) }</pre>
    AAAA{infoPoke.data.loading}
    <h1>Poke Info</h1>
    {
      Object
      .keys(infoPoke)
      .map(chave => { 
        if (chave === 'data'){
          if (infoPoke.data.abilities === undefined ) {
            return (null )
          } else {
            return (        
              <div key={chave}>
              <h4>{infoPoke.data.abilities[0].ability['name']}</h4>
              <h4>{infoPoke.data.abilities[1].ability['name']}</h4>
              <h4>{infoPoke.data.base_experience}</h4>
              <h4>{infoPoke.data.height}</h4>
              <h4>{infoPoke.data.weight}</h4>
              <h4>{infoPoke.data.sprites['back_default']}</h4>
              <h4>{infoPoke.data.sprites['back_shiny']}</h4>
              <h4>{infoPoke.data.sprites['front_default']}</h4>
              <h4>{infoPoke.data.sprites['front_shiny']}</h4>
              </div>
            )
          }
        } 
        return (null) //other keys don't matter
     })
    }
    <h2> outro</h2>
    <p>  pegaAbilidade      </p>
  </>
) 
}
export default PokeInfo