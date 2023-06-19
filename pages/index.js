import { categorias } from "../helpers/categorias"
import { Layout } from "../layout/Layout"
import useQuiosco from "../hooks/useQuiosco"
import { Producto } from "../components/Producto"
import { productos } from "../helpers/productos.js"

export default function Home() {

  const { categorieActual } = useQuiosco()
  
  return (
    <Layout 
      pagina={`Menu - ${categorieActual?.nombre}`}
    >
      <h1 className="text-4xl font-black">{categorieActual?.nombre}</h1>
      <p className="text-2xl my-10">
        Elige tu pedido a continuacion
      </p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        
       {productos.map( (producto, index) => (
          <Producto 
          key={index}
          producto={producto}
          />
      )
      )}

      </div>

    </Layout>
  )
  
   
  
}