import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faDownload, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useRouter } from "next/router"

const Landing = () => {

    const router = useRouter();

    return (
        <>
            <div className="text-content" id="main">
                <h1 className="title">Unofficial Docs</h1>
                <div className="subtitle">Pokemon Renegade Platinum Docs with better UI</div>
                <div className="btn-group">
                    <button type="button" className="follow-btn">
                        <FontAwesomeIcon icon={faTwitter} className="icon" />
              Follow Drayano
              </button>
                    <button type="button" className="download-btn">
                        <FontAwesomeIcon icon={faDownload} className="icon" />
              Renegade Platinum
              </button>
                    <button type="button" className="learnmore-btn" onClick={(e) => {
                        e.preventDefault();
                        router.push("/#about")
                    }}>
                        Learn More
              <FontAwesomeIcon icon={faChevronRight} className="icon" />
                    </button>
                </div>
            </div>
            <div className="img-content">
                <img src="/PKMNRenPlatLogo.svg" alt="website logo" />
            </div>
        </>
    )
}

export default Landing
