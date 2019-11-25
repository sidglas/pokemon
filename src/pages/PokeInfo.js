import React  from 'react'
import { Badge } from 'reactstrap';
import Rest from '../utils/rest'

import '../pages/Info/styles.css'
const baseUrl = 'https://pokeapi.co/api/v2/'
//const baseUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'
const { useGet } = Rest(baseUrl)


const numToStr3 = (num) => {
   const numStr = num.toString()
   const numLength = numStr.length 
   return numLength < 3 ? 
   '0'.repeat(3 - numLength) + num 
   : numStr 
}


//const PokeInfo = () => {
const PokeInfo = ({match}) => {
const infoPoke = useGet(`pokemon/${match.params.data}`)


if (infoPoke.loading === true) {
  return (null)
}

else {

return (
  <>
    <pre>{ JSON.stringify(infoPoke.loading) }</pre>
    <pre>{ JSON.stringify(infoPoke) }</pre>
    {infoPoke.loading}
    <div className='container'>
      <h1>Poke Info</h1>
    </div>  


    {
      Object
      .keys(infoPoke)
      .map(chave => { 
        if (chave === 'data'){
          if (infoPoke.data.abilities === undefined ) {
            console.log('DADA A SITUAÇÃO')
            return (null )
          } else {
            return ( 
              
              <>       
              <div className='container' key={chave}>
                <div >
                <h5>{ infoPoke.data.id }</h5>
                  <h5>{ infoPoke.data.forms[0].name }</h5>
                </div>

              <div class="row">
                <div class="col-sm-1 ">
                  <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numToStr3(infoPoke.data.id)}.png`} width='100%' alt="Asd" />
                </div>
                <div class="col-sm-2 mrg0" >
                  <h4>Experience :{infoPoke.data.base_experience}</h4>
                  <h4>Height     : {infoPoke.data.height}</h4>
                  <h4>Weight     : {infoPoke.data.weight}</h4>
                </div>                
                <div class="col-sm-2">
                  <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numToStr3(infoPoke.data.id)}.png`} width='50%' alt="Asd" />                
                </div>
              </div>  
            

              <ul className="badge-list">
              <li>  <Badge color="dark">Abilities</Badge></li>
              { Object.keys(infoPoke.data.abilities)
                .map(pokeAbil => 
                  {
                    if (infoPoke.data.abilities[pokeAbil] !== null) {
                    return (
                      <li key={pokeAbil}>
                      <Badge color="warning"> { infoPoke.data.abilities[pokeAbil].ability['name']}  </Badge>
                      </li>
                      )
                    } else {
                      return(null)
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
                      <li key={pokeImg} className>
                        <header  style={{backgroundImage:`url(${infoPoke.data.sprites[pokeImg]})`,
                        backgroundRepeat: 'no-repeat'
                      }}/>
                      </li>
                    )
                    } else {
                      return (null)
                    }
                  }
                ) 
              } 
              </ul>
 

              <div className="row">
              { Object.keys(infoPoke.data.sprites)
                .map(pokeImg => 
                  {
                    if (infoPoke.data.sprites[pokeImg] !== null) {
                    return (
                      <div className="col-sm mrg1" key={pokeImg}>
                      <img src={`${infoPoke.data.sprites[pokeImg]}`} alt=""/>
                      </div>
                    )
                    } else {
                      return (null)
                    }
                  }
                ) 
              }
              </div>   
              </div>

            </>
            )
          }  
        } 
        return (null) //other keys don't matter
     })
    }
  </>
) 
}
        }   
export default PokeInfo