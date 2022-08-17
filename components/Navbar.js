import Link from "next/link";


const Navbar = () => {
  const toggleActive = (event) => {
  //TODO: wenn nicht auf "/" dann auf root page linken

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
    <nav className="dark:bg-slate-900 flex shadow-sm">
        <Link href="/">
          <a className="text-3xl">
            Lukas Sonnabend
          </a>
        </Link>
        <ul className="navbar-nav me-auto text-xl ml-2 mb-lg-0 flex">
          <li className="nav-item flex column justify-center">
            <button className="nav-link active" onClick={(e) => { toggleActive(e) }} aria-current="page" href="/">
              CV
            </button>
          </li>
          <li className="mx-5 flex column justify-center">
            <button className="nav-link" onClick={(e) => { toggleActive(e) }} href="#experience">
              Experience
            </button>
          </li>
          <li className="nav-item flex column justify-center">
            <button className="nav-link">Projects</button>
          </li>
        </ul>
    </nav>


  )
}

export default Navbar
