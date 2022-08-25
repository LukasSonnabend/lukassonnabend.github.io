import Link from "next/link";


const Navbar = () => {


  return (
    <nav className="dark:bg-slate-900 flex pb-3 md:mb-0">
        <Link href="/">
          <a className="text-2xl font-bold md:text-3xl pl-2">
            LS
          </a>
        </Link>
        <ul className="navbar-nav me-auto text-xl ml-2 mb-lg-0 flex grow justify-evenly md:ml-12 md:justify-start">
          <li className="nav-item flex column justify-center hover:underline">
          <Link href="/cv.pdf" target="_blank" rel="noopener">
            <button className="nav-link">
              CV
            </button>
            </Link>
          </li>
          <li className="mx-5 flex column justify-center hover:underline">
            <Link href="/#experience">
              <button className="nav-link">
                Experience
              </button>
            </Link>
          </li>
          <li className="nav-item flex column justify-center hover:underline">
          <Link href="/#projects">
            <button className="nav-link">Projects</button>
            </Link>
          </li>
        </ul>
    </nav>


  )
}

export default Navbar
