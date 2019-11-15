import React from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
//import Rest from '../../utils/rest'
import { useState , useEffect } from 'react'
import axios from 'axios'
import Pokeinfo from '../Pokeinfo';
const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

const Pokemons = () => {

  const[data, setData] = useState({})    
  const[resul, setResul] = useState('')
  const[contaPoke, setContaPoke] = useState(20)  
  //const[whichPoke, setWhichPoke] = useState(0)  
  const[urlDestino,setUrlDestino]= useState('https://pokeapi.co/api/v2/pokemon') 
  const[urlPokemon,setUrlPokemon]= useState('') 

  useEffect(() => {

  const loadPoke = async () => {
    const res = await axios.get(urlDestino)
    setResul(res)
    console.log('res . data ', res.data)
    console.log('RES RES RES', res)
    
    }

    loadPoke()
    
 // console.log('espero ter feito parte 01 da carga ', resul )
  for (let jjj = 1; jjj < 4 ; jjj++) {
    console.log('testando rapidamente' + jjj)
  }

   }, [urlDestino])


/* foi passada para dentro do useEffect

    const loadPokeDetails = async () => {
      resul.data.results.map((newLink) => {
         return newLink.url = 'aaaa' + newLink.url + 'bbbb'
      })
    }
    loadPokeDetails()
 */
/*
  const loadPokeDetails = async () => {
    const detalhe = await axios.get(urlPokemon)
    await sleep(3000)
    console.log (detalhe)
  }
*/
 

 const numbers = [1, 2, 3, 4, 5];
 const listItems = numbers.map ( (number) => { return   number * 3})
 //const pegaVolta = (resul.data.results).map ((voltou) => { return voltou})

 const whatPoke = (contaPoke, pokemonId) => {
   return( contaPoke + parseInt(pokemonId) -19)
 }
 const sleep = time => new Promise(resolve => setTimeout(resolve,time))

  const showNext = () => {
    setContaPoke(contaPoke + 20)
    console.log(contaPoke)
    let offset = 'offset=' + contaPoke + '&limit=20'
    console.log(baseUrl+'?'+offset)
    setUrlDestino(baseUrl+'?'+offset)
  }
  const redirTo = (pokemonId) => {
    console.log('Estando na redirTo')
    return  <Redirect to={'/pokeinfo/' + pokemonId } />
  }
  if (resul) {
/*
  
    Object
    .keys(resul.data.results)
    .map(pokemonId => {
      setUrlPokemon(resul.data.results[pokemonId].url)
      return (
      //setUrlPokemon(resul.data.results[pokemonId].url)
      loadPokeDetails(resul.data.results[pokemonId].url)
      
     )
    })
  */  

  //if (Object.keys(data.data).length > 0) {
  //if (data.data) {

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
                  <td><Link className="btn btn-warning" to={'/pokeinfo/' + whatPoke(contaPoke, pokemonId)}>Info</Link></td>
                </tr>                    
              )
            })
          }
        </tbody>
      </table>

      <button className='btn btn-success' onClick={showNext}>Proximos</button>
      </div>      
      <p> {contaPoke} </p>
      <p> {listItems}</p>
      <p> pegaVolta</p>
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


