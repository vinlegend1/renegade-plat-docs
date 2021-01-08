import React from 'react'
import Link from "next/link"

const Footer = () => {
    return (
        <div className="footer">
            <ul className="footer-links">
                <li>Open Source</li>
                <li><Link href="https://github.com"><a>Github</a></Link></li>
            </ul>
            <ul className="footer-links">
                <li>Developer</li>
                <li><Link href="/"><a>Twitter</a></Link></li>
            </ul>
            <div className="copyright-thing">&copy; 2021 Vincent Hong</div>
        </div>
    )
}

export default Footer
