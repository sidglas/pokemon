import React , { useState, useEffect } from 'react'
import axios from 'axios'

const PokeInfo = (parm) => {

  const[resul, setResul]=useState('')
  useEffect(() => {
    var axs = getParameterByName('axs')
    console.log('a x ssss', axs)
    const loadPokeById = async () => {
      const res = await axios.get(axs)
      setResul(res)
      }
      loadPokeById()
  }, [])

  const getParameterByName = ( name, url) => {
    if (!url) url = window.location.href;
    url = url.toLowerCase(); // correcao em caso de case sensitive
    name = name.replace(/[[\]]/g, "\\$&").toLowerCase();// correcao em caso de case sensitive
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  return (
    <>
    <pre>{ JSON.stringify(resul) }</pre>
    <h1>Poke Info</h1>
      <pre> JsssssssZ)</pre>
    </>
  ) 
}
export default PokeInfo