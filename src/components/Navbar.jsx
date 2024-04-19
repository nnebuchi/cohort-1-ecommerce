import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo"><span>Biggies</span></div>
            <div className="right-nav">
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Shop</Link>
                    </li>
                    <li>
                        <Link to="/">Cart</Link>
                    </li>
                    <li>
                        <Link to="/">Orders</Link>
                    </li>
                </ul>

                <div>
                    <ul className="nav-links">
                        <li>
                            <Link to="/" style={{color:"black"}}>
                                <FontAwesomeIcon icon={faUser} />
                            </Link>
                        </li>

                        <li>
                            <Link to="/" style={{color:"black"}}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;