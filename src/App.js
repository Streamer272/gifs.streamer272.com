import { useRef, useState } from "react";
import RickRoll from "./rickroll.mp4";
import "./App.css";

export const App = () => {
    const [accepted, setAccepted] = useState(false);
    const videoRef = useRef();

    const accept = () => {
        setAccepted(true);
        // noinspection JSUnresolvedFunction
        videoRef.current.play();
    }

    return (
        <div className="rickroll">
            <video style={{display: accepted ? "block" : "none"}} src={ RickRoll } controls={ false } title="RickRoll" ref={ videoRef } />
            { !accepted &&
            <div className="accept-container">
                Accept cookies?<br />

                <div className="buttons">
                    <button onClick={ accept }>Yes</button>
                    <button onClick={ accept }>No</button>
                </div>
            </div> }
        </div>
    )
}
