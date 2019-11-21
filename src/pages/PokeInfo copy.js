import React , { useState, useEffect } from 'react'
import axios from 'axios'

const PokeInfo = () => {

  //const[abili, setAbili]=useState('')
  const[resul, setResul]=useState({})
  /*
  const[abilities, setAbilities] = ([])
  const[experience, setExperience] = ('')
  const[height, setHeight] = (0)
  const[weight, setWeight] = (0)
  const[sprites,setSprites] = []
  */

  useEffect(() => {
    var axs = getParameterByName('axs')
    //console.log('a x ssss', axs)
    const loadPokeById = async () => {
        const res = await axios.get(axs)
        setResul(res)
        /*
        setAbilities(resul.data.abilities)
        setExperience(resul.data.base_experience)
        setHeight(resul.data.height)
        setWeight(resul.data.weight)
        setSprites(resul.data.sprites)
        */
    }
    loadPokeById()
  }, [])


console.log(typeof(resul))
console.log(resul.map)
const array_res = []
for(var i in resul)
    array_res.push([i, resul[i]]);

console.log('o novo array array_res com elementos', array_res.length)   
if (array_res.length > 0) {
  console.log('  0 X  ', array_res[0])
  console.log('  1 X  ', array_res[1])
  console.log('  2 X  ', array_res[2])
  console.log('  3 X  ', array_res[3])
  console.log('  4 X  ', array_res[4])
  console.log('  5 X  ', array_res[5])
}

const pegaAbilidade = async() => {

  const aaaa = await resul.data
  console.log('pega abili GGGGGGGGGGGGGGGGGG', aaaa)
  return 5555
  //await aaaa.abilities[0].ability['name']
  //console.log(bbbb)
  //return  bbbb
  //console.log('pega abili GGGGGGGGGGGGGGGGGG', resul.data.abilities[0].ability['name'])
  //return resul.data.abilities[0].ability['name']

}

//  resul.forEach(chave => {
//    console.log('Chave no forEach', chave)
    
//  });

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
  if ((resul) && (resul !== {})) {
  console.log('rrrrr', resul)
  console.log('rrrrr', resul)
  console.log('rrrrr', resul)
  console.log('rrrrr', resul)
  console.log('rrrrr', resul)
  console.log('rrrrr', resul)
  } 

console.log(resul.data)
//console.log(resul.data.abilities
 console.log(pegaAbilidade ())
 

return (
    <>
    <pre>{ JSON.stringify(resul) }</pre>
    <h1>Poke Info</h1>
    {
      Object
      .keys(resul)
      .map(chave => { 
        if (chave === 'data'){
          console.log('é data', resul.data)
          console.log('é habil', resul.data.abilities)
          console.log('é habil 0', resul.data.abilities[0].ability['name'])
          console.log('é habil 0', resul.data.abilities[1])
          console.log('base_experience ', resul.data.base_experience)
          return (
            <div key={chave}>
              <h4>{resul.data.abilities[0].ability['name']}</h4>
              <h4>{resul.data.abilities[1].ability['name']}</h4>
              <h4>{resul.data.base_experience}</h4>
              <h4>{resul.data.height}</h4>
              <h4>{resul.data.weight}</h4>
              <h4>{resul.data.sprites['back_default']}</h4>
              <h4>{resul.data.sprites['back_shiny']}</h4>
              <h4>{resul.data.sprites['front_default']}</h4>
              <h4>{resul.data.sprites['front_shiny']}</h4>
            </div>
          )

        }else{
          console.log('a chave é ', chave)

        }
           
        return (
       <p key={chave}> {chave}</p> )
       
    })
    }
    <h2> outro</h2>

    <p>  pegaAbilidade      </p>
    </>
  ) 
}
export default PokeInfo