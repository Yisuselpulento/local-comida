
import useQuiosco from '../hooks/useQuiosco'
import Image from 'next/image'
import { useState , useEffect} from "react"


const ModalProducto = () => {

    const { producto, handleChangeModal, handleAgregarPedido, pedido } = useQuiosco()
    const [cantidad,setCantidad] = useState(1)
    const [edicion, setEdicion] = useState(false)

    useEffect(()=>{
    
        if(pedido.some((pedidoState) => pedidoState.index === producto.index)) {
            const productoEdition = pedido.find((pedidoState) => pedidoState.index === producto.index)
            setEdicion(true)
            setCantidad(productoEdition.cantidad)
        }
    },[producto, pedido])

  

  return (
    <div className='flex md:gap-10 gap-2 flex-col md:flex-row  items-center '>
        <div className='md:w-1/3 w-[150px] '>
            <Image 
                width={300}
                height={300}
                alt={`imagen producto ${producto.nombre}`}
                src={`/assets/img/${producto.imagen}.jpg`}
            />

        </div>
        
        <div className='md:w-2/3 '>
            <div className='flex md:justify-end '>
                <button
                    onClick={handleChangeModal}
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

                </button>

            </div>
            <h1 className='text-3xl font-bold mt-5'>{producto.nombre}</h1>
            <p className='mt-5 font-black text-5xl text-blue-500'>{producto.precio}</p>

            <div className='flex gap-4 mt-5'>
                <button 
                type="button"
                onClick={()=> {
                    if(cantidad <= 1) return
                    setCantidad(cantidad - 1)

                }}
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

                </button>

                <p className='text-3xl'>{cantidad}</p>

                <button 
                 type="button"
                 onClick={()=> {
                    if(cantidad >= 10) return
                     setCantidad(cantidad + 1)
 
                 }}
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>


                </button>

            </div>

            <button 
            type="button"
            className='bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded'
            onClick={() => handleAgregarPedido({...producto , cantidad})}
            >{edicion ? "Guardar cambios" : "Agregar Pedido"}</button>
        </div>

    </div>
  )
}

export default ModalProducto