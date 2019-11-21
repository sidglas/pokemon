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
            console.log('Veremos',infoPoke.data.sprites)
            return ( 
              <>       
              <div className='container' key={chave}>
                <h4>{infoPoke.data.abilities[0].ability['name']}</h4>
                <h4>{infoPoke.data.abilities[1].ability['name']}</h4>
                <h4>{infoPoke.data.base_experience}</h4>
                <h4>{infoPoke.data.height}</h4>
                <h4>{infoPoke.data.weight}</h4>
              </div>
              

              <ul style={{display:'inlineBlock'}}>

              { Object.keys(infoPoke.data.sprites)
                .map(pokeImg => 
                  {
                    console.log ('CONFIRA ', infoPoke.data.sprites[pokeImg])
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

              { Object.keys(infoPoke.data.sprites)
                .map(pokeImg => 
                  {
                    console.log ('CONFIRA ', infoPoke.data.sprites[pokeImg])
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

              { Object.keys(infoPoke.data.sprites)
                .map(pokeImg => 
                  {
                    if (infoPoke.data.sprites[pokeImg] !== null) {
                    return (
                      <>
                      <header  style={{backgroundImage:`url(${infoPoke.data.sprites[pokeImg]})`}}/>

                      </>
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