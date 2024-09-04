import { Link } from 'react-router-dom'
import topbarlogo from '../images/topbarlogo.svg'

function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link to="/" className="navbar-brand" href="#"><img src={topbarlogo} alt='textbook-rentals-topbarlogo'></img></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item fw-bold">
                    <Link className="nav-link"  to="/c-ebooks">Cheap eBooks</Link>
                    </li>
                    <li className="nav-item fw-bold">
                    <Link className="nav-link"  to="/free-tshirts">FREE T-Shirt</Link>
                    </li>
                    <li className="nav-item fw-bold">
                    <Link className="nav-link"  to="/">Facebook</Link>
                    </li>
                    <li className="nav-item fw-bold">
                    <Link className="nav-link"  to="/browse-textbooks">Browse Textbooks</Link>
                    </li>
                    <li className="nav-item fw-bold">
                    <Link className="nav-link"  to="/blog">Blog</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
    )

}

export default Navbar;