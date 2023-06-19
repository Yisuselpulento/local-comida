import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"

export const Categoria = ({categoria}) => {

    const {categorieActual, handleClickCategoria} = useQuiosco()
    const {nombre, icono, id } = categoria

  return (
    <div className={`${categorieActual?.id === id ? 'bg-blue-400' : "" }`}>
        
        <button 
        type="button"
        className='text-2xl font-bold hover:cursor-pointer w-full border items-center p-4 hover:bg-blue-400 flex gap-3'
        onClick={()=> handleClickCategoria(id) }
        >
        <Image 
            width={100}
            height={100}
            src={`/assets/img/icono_${icono}.svg`}
            alt="imagen icono"
           
        />
        {nombre}

        </button>
       
    </div>
  )
}
