import Head from "next/head"
import Sidebar from "../components/Sidebar"
import Modal from "react-modal"
import useQuiosco from "../hooks/useQuiosco"
import ModalProducto from "../components/ModalProducto"
import { ToastContainer} from 'react-toastify'
import { Pasos } from "../components/Pasos"

import 'react-toastify/dist/ReactToastify.css'

const customStyles = {
  content: {
    top: '35%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#__next');

export const Layout = ({children , pagina }) => {

  const {modal} = useQuiosco()


  return (
    <>
      <Head>
        <title>{pagina}</title>
        <meta name="description" content="Quiosco Cafeteria" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      

      <div className="md:flex h-[2000px]
      md:h-auto">
        
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 flex flex-col items-center">
          <Sidebar/>
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen md:overflow-y-scroll">
          <div className="p-10">
            <Pasos/>
          {children}
          </div>
          
         
        </main>
      
        

      </div>
      {modal && (
      <Modal 
        isOpen={modal}
        style={customStyles}
      >
        
        <ModalProducto />
       
       

      </Modal>
    )}
     
  

    <ToastContainer/>
    </>
  )
}
