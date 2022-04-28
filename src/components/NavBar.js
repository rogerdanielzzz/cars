
import logo from '../images/vw.png'
import CartWidget from './CartWidget'


const Nav = () => {
  return (
  <nav>
 
<ul className="menu__bar"> 
  <img src={logo} alt="vw" width="65vh" height = "65vh" />
  <li className='menu__bar-link'>Volkswagen</li>
  <li className='menu__bar-link'>Modelos</li>
  <li className='menu__bar-link'>Usados</li>
  <li className='menu__bar-link'>Financiacion</li>
  <CartWidget/>
  </ul>
</nav>
  )
}

export default Nav