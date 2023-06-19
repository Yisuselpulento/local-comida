import React from 'react'
import Image from 'next/image'
import useQuiosco from '../hooks/useQuiosco'

export const Producto = ({producto}) => {

    const {categorieActual, handleSetProducto, handleChangeModal } = useQuiosco()
    const {nombre,imagen,precio, categoriaId} = producto


  return (
    <>
      {categorieActual?.id == categoriaId && 
         <div className='border p-3}'>
          <Image 
        src={`/assets/img/${imagen}.jpg`}
        alt={`Imagen platillo ${nombre}`}
        width={400}
        height={500}
        />
        <div className='p-2 '>
            <h3 className='text-2xl font-bold '>{nombre}</h3>
            <p className='mt-3 font-black text-4xl text-blue-500'>{precio}</p>
            <button
            type='button'
            className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold'
            onClick={()=> {  
              handleSetProducto(producto);
              handleChangeModal()
              
            }}
            >
              Agregar
            </button>
        </div> 
        </div>
       }
    </>

  )
}
