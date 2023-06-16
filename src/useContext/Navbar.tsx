import { NavLink } from "react-router-dom"


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to={'/'} className={(args) => `nav-link ${args.isActive && 'active'}`}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/about'} className={(args) => `nav-link ${args.isActive && 'active'}`}>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/login'} className={(args) => `nav-link ${args.isActive && 'active'}`}>Login</NavLink>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar
