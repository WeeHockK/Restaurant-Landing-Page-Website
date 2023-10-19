import { BsFillPlayFill, BsFillPauseBtnFill } from "react-icons/bs";
import { meal } from "../../Constants";
import { useRef, useState, useEffect, useCallback  } from "react";
import './intro.css';

function Intro(){
    const [playvideo, setPlayVideo] = useState(false);
    const [showPauseButton, setShowPauseButton] = useState(false);
    const timeoutRef = useRef(null);
    const vidRef = useRef();

    const handleVideoInteraction = useCallback(() => {
        if (playvideo) {
            clearTimeout(timeoutRef.current);  
            setShowPauseButton(true);
            timeoutRef.current = setTimeout(() => setShowPauseButton(false), 1000);  
        }
    }, [playvideo]);

    const handlevideo = () => {
        setPlayVideo((prevPlayVideo) => {
            if (prevPlayVideo) {
                vidRef.current.pause();
            } else {
                vidRef.current.play();
            }
            return !prevPlayVideo; 
        });
    }

    useEffect(() => {
        const videoOverlayElement = document.querySelector('.app__video-overlay');
        videoOverlayElement.addEventListener('mousemove', handleVideoInteraction);
        
        // Cleanup the event listener
        return () => {
            videoOverlayElement.removeEventListener('mousemove', handleVideoInteraction);
        };
    }, [handleVideoInteraction]);

    return (
        <div className="app__video">
            <video 
                src={meal}
                ref={vidRef}
                type="video/mp4"
                loop
                controls={false}
                muted
            />
            <div className="app__video-overlay flex__center">
                <div 
                    className="app__video-overlay_cirle flex__center"
                    onClick={handlevideo}
                >
                    {playvideo ? 
                        (showPauseButton ? <BsFillPauseBtnFill color="#fff" fontSize={30}/> : null) :
                        (<BsFillPlayFill color="#fff" fontSize={30}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Intro;