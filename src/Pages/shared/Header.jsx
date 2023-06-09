import { Link } from "react-router-dom";


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark-subtle ">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'>QuaDB</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'> Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/'>FAQ</Link>
              </li>
             
              
            </ul>
           
          </div>
        </div>
      </nav>
    );
};

export default Header;