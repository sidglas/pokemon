import React  from 'react'
import Rest from '../utils/rest'

import '../pages/Info/styles.css'
const baseUrl = 'https://pokeapi.co/api/v2/'
const { useGet } = Rest(baseUrl)

//const PokeInfo = () => {
const PokeInfo = ({match}) => {
const infoPoke = useGet(`pokemon/${match.params.data}`)


return (
  <>
    <pre>{ JSON.stringify(infoPoke.loading) }</pre>
    <pre>{ JSON.stringify(infoPoke) }</pre>
    {infoPoke.loading}
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
              <>       
              <div className='container' key={chave}>
                <h4>Experience :{infoPoke.data.base_experience}</h4>
                <h4>Height     : {infoPoke.data.height}</h4>
                <h4>Weight     : {infoPoke.data.weight}</h4>
              </div>
              
              
              <ul className="badge-list">
              <li>  <span class="badge badge-warning"> um texto > </span></li>
              { Object.keys(infoPoke.data.abilities)
                .map(pokeAbil => 
                  {
                    if (infoPoke.data.abilities[pokeAbil] !== null) {
                    return (
                      <li key={pokeAbil}>
                      <span class="badge badge-warning"> { infoPoke.data.abilities[pokeAbil].ability['name']}  </span>
                      </li>
                    )
                    } else {
                      return (null)
                    }
                  }
                ) 
              } 
              </ul>




              <ul className="spot-list">

              { Object.keys(infoPoke.data.sprites)
                .map(pokeImg => 
                  {
                    if (infoPoke.data.sprites[pokeImg] !== null) {
                    return (
                      <li key={pokeImg}>
                        <header  style={{backgroundImage:`url(${infoPoke.data.sprites[pokeImg]})`}}/>
                      </li>
                    )
                    } else {
                      return (null)
                    }
                  }
                ) 
              } 
              </ul>
            
            </>


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