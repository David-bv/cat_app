import React, { useEffect, useState } from 'react'
import { url } from '../helpers/link';

export const Mostrar = () => {
    const [michi, setMichi] = useState();
    

    const data = async() => {
        let res = await fetch(url);
        let data = await res.json();
        
        setMichi(data)
    }
    useEffect(() => {
        data();
    }, [])
 console.log(michi)
  return (
    <div>
        <div className="w-75 mx-auto">
              <h3 className='text-center'>Favoritos</h3>
            <div className='w-50 mx-auto'>
                  {
                      michi.map((charap, index) => (
                          <div key={index} class="form-check my-5 p-5 border border-1 animate__animated animate__fadeIn">
                              <div className='w-100'>
                                  <img src={michi.url} alt={id}/>
                              </div>
                          </div>
                      ))
                  }
            </div>
        </div>
    </div>
  )
}
