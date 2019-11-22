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
                <h4>{infoPoke.data.abilities[0].ability['name']}</h4>
                <h4>Experience :{infoPoke.data.base_experience}</h4>
                <h4>Height     : {infoPoke.data.height}</h4>
                <h4>Weight     : {infoPoke.data.weight}</h4>
              </div>
              

              <ul style={{display:'inlineBlock'}}>

              { Object.keys(infoPoke.data.sprites)
                .map(pokeImg => 
                  {
                    if (infoPoke.data.sprites[pokeImg] !== null) {
                    return (
                      <li style={{width:'10rem', display:'block'}}>
                      <img src={`${infoPoke.data.sprites[pokeImg]}`} className="card-img-top" alt="..."/>
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

              { Object.keys(infoPoke.data.abilities)
                .map(pokeAbil => 
                  {
                    if (infoPoke.data.abilities[pokeAbil] !== null) {
                    return (
                      <li key={pokeAbil}>
                      <h3>{pokeAbil} </h3>
                      <span class="badge badge-info">  {infoPoke.data.abilities[pokeAbil].ability['name']}  </span>
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