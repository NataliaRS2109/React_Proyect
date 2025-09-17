import { Link } from "react-router-dom";
import CartWidget from './CartWidget';

function NavBar() {
    return (
      <nav className='navbar'>
        <div className='navbar-left'>
          <Link to="/">
            <img className='logo' src="../images/logo.png" alt="Logo" />
          </Link>
          <ul className='menu'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category/maquillaje">Maquillaje</Link></li>
            <li><Link to="/category/skincare">Skincare</Link></li>
            <li><Link to="/category/cabello">Cabello</Link></li>
          </ul>    
        </div>      
        <CartWidget />        
      </nav>
    );
}

export default NavBar;