import React, { useState } from 'react'
import './Videodemo.css'
import hero from '../../assets/hero.png'

const Videodemo = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="videodemo">
            <h2>Watch Video Demo</h2>
            <p>
                Pos Saas - Android Inventory Full App + Super Admin panel With Firebase
                Live Demo
            </p>

            <div className="video-card" onClick={() => setOpen(true)}>
                <img src={hero} alt="Video thumbnail" />
                <div className="play-btn">▶</div>
            </div>
        
            {open && (
                <div className="modal-overlay" onClick={() => setOpen(false)}>
                    <div
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="close-btn" onClick={() => setOpen(false)}>
                            ✕
                        </button>

                        <iframe
                            src="https://www.youtube.com/embed/BAHNFPcxyFk"
                            title="POS Demo Video"
                    
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Videodemo
