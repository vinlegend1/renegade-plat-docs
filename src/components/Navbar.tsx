import React from 'react'
import Link from "next/link"

const Navbar = () => {
    return (
        <header className="navbar">
            <ul className="nav-links">
                <li className="nav-link"><Link href="/"><a>Pokedex</a></Link></li>
                <li className="nav-link"><Link href="/"><a>Trainer Battles</a></Link></li>
                <li className="nav-link"><Link href="/"><a>Item Locations</a></Link></li>
            </ul>
            <div className="searchbar">
                <form className="search-form">
                    <input className="search-input" type="text" placeholder="Search for something..." />
                    <button className="search-btn" type="submit"><i className="fas fa-search"></i></button>
                </form>
            </div>
        </header>
    )
}

export default Navbar
