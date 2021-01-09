import React, { useState } from 'react'
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {

    const [isActive, setIsActive] = useState(false);
    return (
        <header className="navbar">
            <div className="burger" onClick={() => {
                setIsActive(!isActive)
            }}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`navbar-header-mobile  ${isActive ? "responsive" : ""}`}>Renegade Platinum</div>
            <div className={`navbar-content ${isActive ? "responsive" : ""}`}>
                <ul className="nav-links">
                    <li className="nav-link"><Link href="/pokedex"><a>Pokedex</a></Link></li>
                    <li className="nav-link"><Link href="/"><a>Trainer Battles</a></Link></li>
                    <li className="nav-link"><Link href="/"><a>Item Locations</a></Link></li>
                </ul>
                <div className="searchbar">
                    <form className="search-form">
                        <input className="search-input" type="text" placeholder="Search for something..." />
                        <button className="search-btn" type="submit">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Navbar
