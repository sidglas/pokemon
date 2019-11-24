import { useReducer, useEffect } from 'react'
import axios from 'axios'
axios.defaults.validateStatus = code => code < 500


const INITIAL_STATE = {
    loading: false,
    data: {},
    error: ''
  }
  
  const reducer = (state, action) => {
  // Manipular meu estado
    if (action.type === 'REQUEST'){
      return {
        ...state,
        loading: true
      }
    }
    if (action.type === 'SUCCESS'){
      return {
        ...state,
        loading: false,
        data:action.data
      }
    }  
    if (action.type === 'FAILURE'){
      return {
        ...state,
        loading: false,
        error:action.error,
        code: action.code
      }
    }    
    // Manipular meu estado
    return state
  }
console.log('DENTRO')
  const init = baseUrl => {
  // na refatoração url vira resource, que na verdade é o que vai além do "prefixo" da url
      const useGet = resource => {
      const [data, dispatch] = useReducer(reducer, INITIAL_STATE)
      console.log('DENTRO01')
      const carregar = async() => {
        try{
          dispatch({ type: 'REQUEST' })  
          console.log('DDDDDDDDD', baseUrl + resource  + '.json')
          console.log('DDDDDDDDD', baseUrl)
          console.log('DDDDDDDDD', resource)
          console.log ('recurso ', resource)
          const res = await axios.get(baseUrl + resource) 
          
          

          console.log('RES.DATA AXIOS NA GET MESMO ', res.data) 
  
          if (res.data.error && Object.keys(res.data.error).length > 0) {
            dispatch({ type: 'FAILURE', error: res.data.error })  
          }else{
            dispatch({ type: 'SUCCESS', data:res.data })  
          }   
        }catch(err){
          dispatch({ type: 'FAILURE', error: 'unknown error' })     
        }
      }
        useEffect(() => {
        carregar()
        }, [resource])
  
        return {
        ...data,
        refetch: carregar
      }   
    }
  
    return {
      useGet,
    }
  }
  export default init 
  
  
  
  