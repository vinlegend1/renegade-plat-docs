import React from 'react'
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer-links">
                <li>Open Source</li>
                <li><Link href="https://github.com/vinlegend1/renegade-plat-docs"><a>Github</a></Link></li>
            </ul>
            <ul className="footer-links">
                <li>Developer</li>
                <li><Link href="https://twitter.com/vince_tech1"><a>Twitter</a></Link></li>
            </ul>
            <div className="copyright-thing">&copy; 2021 Vincent Hong</div>
        </footer>
    )
}

export default Footer
