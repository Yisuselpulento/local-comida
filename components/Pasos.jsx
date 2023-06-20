import { useRouter } from "next/router"
import useQuiosco from "../hooks/useQuiosco"

const pasos = [
    {paso: 1, nombre: 'Menu', url:'/'},
    {paso: 2, nombre: 'Resumen', url:'/resumen'},
    {paso: 3, nombre: 'Datos y Total', url:'/total'}
]
    
    export const Pasos = () => {

        const { handleChangePath , pathMenu } = useQuiosco()
        const router = useRouter()


      return (
        <div className='flex justify-between mb-5 flex-wrap'>
            {pasos.map(paso => (
                <div className={`${pathMenu == paso.paso ? "text-blue-400" : ""}`}>
                 <button 
                  onClick={()=>{
                    router.push(paso.url)
                    handleChangePath(paso.paso)
                   }}
                    className='text-3xl font-bold hover:text-blue-400 border rounded-full px-4 py-3 my-3'
                   key={paso.paso}>
                    {paso.nombre}
                </button>
                </div>
            ))}

        </div>
      )
    }
    