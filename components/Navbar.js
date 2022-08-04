const Navbar = () => {
  const toggleActive = (event) => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      link.classList.remove('active');
    }
    );
    event.target.classList.add('active');
    // scroll window to top of element
    // event.target.scrollIntoView({behavior: 'smooth'});
  }

  return (
  <nav className="navbar navbar-expand-sm bg-light shadow-sm">
  <div className="container">
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">
        Lukas Sonnabend
      </a>
      <ul className="navbar-nav me-auto mb-lg-0">
        <li className="nav-item">
          <button className="nav-link active" onClick={(e) => {toggleActive(e)}} aria-current="page" href="/">
            CV
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={(e) => {toggleActive(e)}} href="#experience">
            Experience
          </button>
        </li>
        <li className="nav-item">
          <a className="nav-link">Projects</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


  )
}

export default Navbar