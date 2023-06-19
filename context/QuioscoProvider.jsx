import {useState, useEffect, createContext} from "react"
import { categorias } from "../helpers/categorias"
import { toast} from 'react-toastify'
import { useRouter } from "next/router"

 
const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {
const [categories, setCategories] = useState([])
const [categorieActual, setCategorieActual] = useState({})
const [producto, setProducto] = useState({})
const [modal,setModal] = useState(false)
const [pedido,setPedido] = useState([])
const [pathMenu,setPathMenu] = useState(1)
const [nombre, setNombre ] = useState("")
const [total, setTotal ] = useState(0)
 
const router = useRouter()


useEffect(()=>{
    setCategories(categorias)
},[])

useEffect(()=>{
    setCategorieActual(categories[0])
},[categories])

useEffect(()=>{
    const nuevoTotal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0)

   setTotal(nuevoTotal)
},[pedido])

const handleClickCategoria = id => {
 const categoria = categories.filter( cat => cat.id === id)
 setCategorieActual(categoria[0])
    router.push('/')
    setPathMenu(1)

}

const handleSetProducto = producto => {
    setProducto(producto)

}

const handleChangeModal = () => {
    setModal(!modal)

}

const handleAgregarPedido  = ({categoriaId, ...producto}) => {
    if(pedido.some(productoState => productoState.index === producto.index)){
    
        const pedidoActualizado = pedido.map(productoState => productoState.index === producto.index ? producto : productoState)
        setPedido(pedidoActualizado)

        toast.success('Guardado Correctamente')
    } else { 
         setPedido([...pedido, producto])
         toast.success('Agregado al pedido')
      
    }
   
    setModal(false)
   
}

const handleChangePath = id => {
    setPathMenu(id)

}

const handleEditCantidad = id => {
   const productoActualizar = pedido.filter(producto => producto.index === id )
    setProducto(productoActualizar[0])
    setModal(true)
}

const handleDeleteProduct = id => {
    const pedidoActualizado = pedido.filter(producto => producto.index !== id )
    setPedido(pedidoActualizado)
}

const colocarOrden = (e) => {
    e.preventDefault()

}


    return (
        <QuioscoContext.Provider
        value={{
            categories,
            categorieActual,
            handleClickCategoria,
            producto,
            handleSetProducto,
            modal,
            handleChangeModal,
            handleAgregarPedido,
            pedido,
            handleChangePath,
            pathMenu,
            handleEditCantidad,
            handleDeleteProduct,
            nombre,
            setNombre,
            colocarOrden,
            total 
        }}
        >

        {children}
        </QuioscoContext.Provider>
    )

}

export {
    QuioscoProvider
}

export default QuioscoContext