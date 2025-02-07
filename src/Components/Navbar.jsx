/* eslint-disable react/prop-types */
import '../index.css'

const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><h3> <span className="badge text-bg-success">NewsExpress</span></h3></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active one" style={{cursor:"pointer" }} onClick={() => setCategory("business")}>Business</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active one" style={{cursor:"pointer" }} onClick={() => setCategory("entertainment")}>Entertainment</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active one" style={{cursor:"pointer" }} onClick={() => setCategory("health")}>Health</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active one" style={{cursor:"pointer" }} onClick={() => setCategory("sports")}>Sports</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active one" style={{cursor:"pointer" }} onClick={() => setCategory("science")}>Science</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active one" style={{cursor:"pointer" }} onClick={() => setCategory("technology")}>Technology</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
