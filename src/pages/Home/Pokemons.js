import React from 'react'
import { Link } from 'react-router-dom'

//import Rest from '../../utils/rest'
import { useState , useEffect } from 'react'
import axios from 'axios'
//import Pokeinfo from '../PokeInfo';
const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

const Pokemons = () => {

  //const[data, setData] = useState({})    
  const[resul, setResul] = useState('')
  const[contaPoke, setContaPoke] = useState(20)  
  const[urlDestino,setUrlDestino]= useState('https://pokeapi.co/api/v2/pokemon') 
  //const[urlPokemon,setUrlPokemon]= useState('') 

  useEffect(() => {

  const loadPoke = async () => {
    const res = await axios.get(urlDestino)
    setResul(res)
    }
    loadPoke()
   }, [urlDestino])

 const whatPoke = (contaPoke, pokemonId) => {
   return( contaPoke + parseInt(pokemonId) -19)
 }
  const showNext = () => {
    setContaPoke(contaPoke + 20)
    console.log(contaPoke)
    let offset = 'offset=' + contaPoke + '&limit=20'
    console.log(baseUrl+'?'+offset)
    setUrlDestino(baseUrl+'?'+offset)
  }

  if (resul) {
    return (
      <>
      <div className ='container'>
      <table className='table'>
      <thead>
        <tr> 
          <th style={{width:'10rem', display:'inlineBlock'}}> Id </th>
          <th style={{width:'15rem', display:'inlineBlock'}}> Pokemon </th>
          <th style={{width:'07rem', display:'inlineBlock', textAlign:'center'}}> Image </th>
          <th style={{width:'20rem', display:'inlineBlock'}}> Action </th>
        </tr>
      </thead>
        <tbody>
          {
            Object
            .keys(resul.data.results)
            .map(pokemonId => {
              return (
                <tr key={pokemonId}>
                  <td> {whatPoke(contaPoke, pokemonId)}</td>
                  <td>{resul.data.results[pokemonId].name}</td>
    
                  <td style={{width:'10rem', display:'inlineBlock'}}><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${whatPoke(contaPoke, pokemonId)}.png` } className="card-img-top" alt="..."/></td>
                  <td><Link className="btn btn-warning" 
                     to={'/pokeinfo/' + parseInt(whatPoke(contaPoke, pokemonId))}>Info
                    
                     </Link>
                  </td>

                </tr>                    
              )
            })
          }
        </tbody>
      </table>

      <button className='btn btn-success' onClick={showNext}>Proximos</button>
      </div>      
      <p> {contaPoke} </p>
      {
        Object
        .keys(resul.data.results)
        .map(pokemonId => {
          return (

            <div className='card' style={{width:'14rem', display:'inlineBlock'}} key={pokemonId}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${whatPoke(contaPoke, pokemonId)}.png`} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{resul.data.results[pokemonId].name}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p>   {`whatPoke(contaPoke, pokemonId)`}</p>
              <a href="#" className="btn btn-primary">More Information</a>

            </div>
          </div>
          )
        })
      }      
      </>
    )
  }
  return null
}
export default Pokemons


