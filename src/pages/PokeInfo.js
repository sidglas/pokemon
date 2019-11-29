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
                <div>
                  <h5>{ infoPoke.data.id }</h5>
                  <h5>{ infoPoke.data.forms[0].name }</h5>
                </div>

                <div class="row mrg0 mrg1">
                  <div class="col-sm-9">
                    <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${numToStr3(infoPoke.data.id)}.png`} width='100%' alt="Asd" />
                  </div>
                  <div class="col-sm-7 mrg0" >
                    <h4>Experience :{infoPoke.data.base_experience}</h4>
                    <h4>Height     : {infoPoke.data.height}</h4>
                    <h4>Weight     : {infoPoke.data.weight}</h4>
                  </div>                
                </div>  
            

                <ul className="badge-list mrg0 " >
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
                <div className='row'>
                <div className=' col-11 col-sm-9 col-md-7'>
                <ul className="spot-list mrg0">
                  { Object.keys(infoPoke.data.sprites)
                    .map(pokeImg => 
                      {
                        if (infoPoke.data.sprites[pokeImg] !== null) {
                        return (
                          <li key={pokeImg} >
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
                </div>
                <div className='col-11 col-sm-9 col-md-5'>
                  Chega uma hora em que precisamos, apesar de estar aprendendo, formatar o html,
                  renderizar a saída de nosso react de forma organizada e pelo menos limpa.
                  Não tendo muita noção de um css extremamente criativo, vale a pena aprender o bootstrap, layout
                  organizado, limpo e de forma prática. O primeiro passo para posteriormente aprofundar no css.
                </div>
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