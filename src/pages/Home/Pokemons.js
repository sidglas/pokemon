import React from 'react'
import { Link } from 'react-router-dom'
//import Rest from '../../utils/rest'
import { useState , useEffect } from 'react'
import axios from 'axios'
const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

const Pokemons = () => {

  const[data, setData] = useState({})    
  const[resul, setResul] = useState('')
  const[contaPoke, setContaPoke] = useState(0)  
  const[urlDestino,setUrlDestino]= useState('https://pokeapi.co/api/v2/pokemon') 
  

  const showNext = () => {
    setContaPoke(contaPoke + 20)
    console.log(contaPoke)
    let offset = 'offset=' + contaPoke + '&limit=20'
    console.log(baseUrl+'?'+offset)
    setUrlDestino(baseUrl+'?'+offset)
  }

  useEffect(() => {
    const loadPoke = async () => {
    const res = await axios.get(urlDestino)
    setResul(res)
    console.log('res . data ', res.data)
    console.log('RES RES RES', res)
    }
  
    loadPoke()
  }, [urlDestino])

  if (resul) {
  //if (Object.keys(data.data).length > 0) {
  //if (data.data) {
    console.log('Tamanho ' , resul.data.results.length)
    console.log('Primeiro ' , resul.data.results[0].name)
    return (
      <>
      <table className='table'>
      <thead>
        <tr> 
          <th> Id </th>
          <th> Pokemon </th>
          <th> Url </th>
        </tr>
      </thead>
        <tbody>
          {
            Object
            .keys(resul.data.results)
            .map(pokemonId => {
              return (
                <tr key={pokemonId}>
                  <td> {pokemonId}</td>
                  <td>{resul.data.results[pokemonId].name}</td>
                  <td> <Link to={`https://resul.data.results[pokemonId].url`}>{resul.data.results[pokemonId].url}</Link></td>
                </tr>                    
              )
            })
          }
        </tbody>
      </table>
      <button className='btn btn-success' onClick={showNext}>Proximos</button>
      <p> {contaPoke} </p>

      </>
    )
  }
  return null
}


export default Pokemons