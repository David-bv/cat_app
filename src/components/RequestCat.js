import React,{ useEffect, useState }  from 'react'
import { url } from '../helpers/endpoint';

const RequestCat = () => {

    const [cat, setCat] = useState([]);

    const getCatData = async() => {
        const resp = await fetch(url)  
        const data  = await resp.json()
        console.log(data);
        setCat(data[0].url);
    }
    
    const handleRequest = () => { 
        getCatData()
    }

    useEffect(() => {
        handleRequest()
      }, []);

  return (
    <div>
       <button onClick={handleRequest}>test</button>
        <div>
            <img src={cat} width={'300px'} alt='img'/>
        </div> 
    </div>
  )
}

export default RequestCat