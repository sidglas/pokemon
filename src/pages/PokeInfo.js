import React , { useState } from 'react'
import axios from 'axios'




const PokeInfo = (parm) => {

  const[resele, setResele] = useState({})

  const getParameterByName = ( name, url) => {
  if (!url) url = window.location.href;
  url = url.toLowerCase(); // correcao em caso de case sensitive
  name = name.replace(/[\[\]]/g, "\\$&").toLowerCase();// correcao em caso de case sensitive
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}


const loadPokeById = async (axs) => {
  console.log('ENTREI NA LOAD BY ID')
  
  const res = await axios.get(axs)
  setResele(res)
  console.log('RES RES RES', res)
  }

  
  console.log('Mostrar Pokemon....', parm.history.location.search)   
  var axs = getParameterByName('axs');  
  console.log('axs', axs)
  loadPokeById(axs)

  return (
    <>
    <h1>Poke Info</h1>
      
    </>
  ) 
}
export default PokeInfo