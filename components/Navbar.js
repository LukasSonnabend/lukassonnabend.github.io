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
    <nav className="dark:bg-slate-900 flex">
        <Link href="/">
          <a className="text-lg md:text-3xl pl-2">
            Lukas Sonnabend
          </a>
        </Link>
        <ul className="navbar-nav me-auto text-xl ml-2 mb-lg-0 flex">
          <li className="nav-item flex column justify-center">
          {/* <Link href="/cv">
            <button className="nav-link active" onClick={(e) => { toggleActive(e) }} aria-current="page" href="/">
              CV
            </button>
            </Link> */}
          </li>
          <li className="mx-5 flex column justify-center">
            <Link href="/#experience">
              <button className="nav-link" onClick={(e) => { toggleActive(e) }} >
                Experience
              </button>
            </Link>
          </li>
          <li className="nav-item flex column justify-center">
          <Link href="/#projects">
            <button className="nav-link">Projects</button>
            </Link>
          </li>
        </ul>
    </nav>


  )
}

export default Navbar
