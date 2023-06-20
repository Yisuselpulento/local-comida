import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"
import { Categoria } from "./Categoria";

const Sidebar = () => {
  const { categories } = useQuiosco();

  return (
    <>
      <Image width={200} height={200} src="/assets/img/logo.webp" alt="Imagen logotipo"
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