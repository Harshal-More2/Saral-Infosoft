import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const scroll = () => {
            setSticky(window.scrollY > 50);
        };

        window.addEventListener("scroll", scroll);
        return () => window.removeEventListener("scroll", scroll);
    }, []);

    return (
        <header className={sticky ? "navbar sticky" : "navbar"}>

            <Link
                to="/"
                className="logo"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                <img src="/Logo.webp" alt="Saral Infosoft" />
            </Link>

            <ul className={menuOpen ? "nav-links active" : "nav-links"}>

                <li>
                    <NavLink
                        to="/"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        Home
                    </NavLink>
                </li>

                <li className="dropdown">

                    <span>Services ▾</span>

                    <ul className="dropdown-menu">

                        <li>
                            <NavLink to="/website-development">
                                Website Development
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/social-media-marketing">
                                Social Media Marketing
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/video-production">
                                Video Production
                            </NavLink>
                        </li>

                    </ul>

                </li>

                <li>
                    <a href="/#portfolio">Portfolio</a>
                </li>

                <li>
                    <a href="/#reviews">Reviews</a>
                </li>

                <li>
                    <NavLink to="/case-studies">
                        Case Studies
                    </NavLink>
                </li>

            </ul>

            <Link to="/contact" className="hire-btn">
                Hire Us →
            </Link>

            <div
                className="menu-btn"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

        </header>
    );
}

export default Navbar;