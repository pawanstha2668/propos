import  { useState, useRef } from 'react'
import './Videodemo.css'
import video from '../../assets/video.mp4'
import hero from '../../assets/hero.png'


const Videodemo = () => {
  const [playstate, setPlaystate] = useState(false);
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlaystate(false);
    }
  };

  return (
    <div className="videodemo">
      <h2>Watch Video Demo</h2>
      <p>
        Pos Saas - Android Inventory Full App + Super Admin panel With Firebase
        Live Demo
      </p>

      <div className="video-card">
        <img src={hero} alt="Video thumbnail" />
        <div
          className="play-btn"
          onClick={() => setPlaystate(true)}
        >
          ▶
        </div>
      </div>

      <div
        className={`video-player ${playstate ? '' : 'hide'}`}
        ref={player}
        onClick={closePlayer}
      >
        <video src={video} autoPlay controls></video>
      </div>
    </div>
  );
};

export default Videodemo;





