import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faDownload, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useRouter } from "next/router"

const Landing = () => {

    const router = useRouter();
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, type: string) => {
        e.preventDefault()
        if (type === "follow") {
            document.location.href = 'https://twitter.com/Drayano60';
        } else if (type === "download") {
            document.location.href = "https://drive.google.com/drive/folders/1gM7nse4qGKJMkcvlQwf5wPVbXwPcC4XV";
        } else if (type === "learnmore") {
            router.push("/#about")
        }
    }

    return (
        <>
            <div className="text-content" id="main">
                <h1 className="title">Unofficial Docs</h1>
                <div className="subtitle">Pokemon Renegade Platinum Docs with better UI</div>
                <div className="btn-group">
                    <button type="button" className="follow-btn" onClick={(e) => handleClick(e, "follow")}>
                        <FontAwesomeIcon icon={faTwitter} className="icon" />
              Follow Drayano
              </button>
                    <button type="button" className="download-btn" onClick={(e) => handleClick(e, "download")}>
                        <FontAwesomeIcon icon={faDownload} className="icon" />
              Renegade Platinum
              </button>
                    <button type="button" className="learnmore-btn" onClick={(e) => handleClick(e, "learnmore")}>
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
