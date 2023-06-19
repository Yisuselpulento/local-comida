import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"
import { Categoria } from "./Categoria";

const Sidebar = () => {
  const { categories } = useQuiosco();

  return (
    <>
      <Image width={300} height={300} src="/assets/img/chickenn.png" alt="Imagen logotipo"
      />

      <nav className="mt-8">
        {categories.map(categoria => (
          <Categoria
            key={categoria.id}
            categoria={categoria}
          />
        ))}
      </nav>
    </>
  )
}

export default Sidebar