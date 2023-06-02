import Link from "next/link"
import Loja from "./Loja"

const Lojas = () => {
    return (
      <>    
        <h1>Los shoppings y comercios mas importantes y seguros</h1>
        <p>En Ciudad del Este hay mas de 1000 comercios, pero los mas importantes y seguros son los que se encuentran en los shoppings.</p>  
        <ul>
          {/* Sacar listado de compras paraguai o crear uno yo */}
          <li><Loja></Loja></li>
          <li><Loja></Loja></li>
          <li><Loja></Loja></li>
        </ul>
      </>

    )
  }
  
  export default Lojas