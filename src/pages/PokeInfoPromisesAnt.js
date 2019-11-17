import React , { useState } from 'react'
import axios from 'axios'




const PokeInfo = (parm) => {

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


  const loadPokeById = async (axs) => {
    console.log('ENTREI NA LOAD BY ID')
    await axios.get(axs)
    //console.log 
  }

  
  console.log('Mostrar Pokemon....', parm.history.location.search)   
  var axs = getParameterByName('axs');  
  console.log('axs', axs)
  const res = loadPokeById(axs)


  var arrayPromisesMisturadas = [Promise.resolve(res)];
  var p = Promise.all(arrayPromisesMisturadas);
  console.log(p);

  Promise.all([res]).then(function(values) {
    console.log(values);
  });  
  console.log('Aqui tenho a Busca do Axios' , res)

  
  return (
    <>
    <h1>Poke Info</h1>
      <pre> JsssssssY)</pre>
    </>
  ) 
}
export default PokeInfo