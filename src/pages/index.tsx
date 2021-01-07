import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="main-home">
        <div className="text-content">
          <h1 className="title">Unofficial Docs</h1>
          <div className="subtitle">Pokemon Renegade Platinum Docs with better UI</div>
          <div className="btn-group">
            <button className="follow-btn"><i className="icon fab fa-twitter"></i> Follow Drayano</button>
            <button className="download-btn"><i className="icon fas fa-download"></i> Renegade Platinum</button>
            <button className="learnmore-btn">Learn More <i className="icon fas fa-chevron-right"></i></button>
          </div>
        </div>
        <div className="img-content">
          <img src="/PKMNRenPlatLogo.svg" alt="website logo" />
        </div>
      </main>
    </>
  )
}
