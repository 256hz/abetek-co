import React from 'react'

export default function Instructions() {
    return(
        <div>
            <div className="textTitle">Instructions</div>
            
            <div className="textTitle">1. </div>
            <div className="text" style={{textAlign: "center"}}>Place the mic in the groove so that the grille is barely exposed.</div>
            <img src='/images/mount-step-01.jpg' className="imgInstructions" alt="Instructions Step 1" />
            
            <div className="textTitle">2. </div>
            <div className="text" style={{textAlign: "center"}}>Snap the mount together around the mic.</div>
            <img src='/images/mount-step-02.jpg' className="imgInstructions" alt="Instructions Step 2" />
            
            <div className="textTitle">3. </div>
            <div className="text" style={{textAlign: "center"}}>Use double-sided tape on each side.  For extra isolation, use a layer of Sticky Stuff.</div>
            <img src='/images/mount-step-03.jpg' className="imgInstructions" alt="Instructions Step 3" />
            
            <div className="textTitle">4. </div>
            <div className="text" style={{textAlign: "center"}}>Place the mount vertically in between the buttons of the shirt.</div>
            <img src='/images/mount-step-04.jpg' className="imgInstructions" alt="Instructions Step 4" />
            
            <div className="textTitle">5. </div>
            <div className="text" style={{textAlign: "center"}}>The completed mount from the front.</div>
            <img src='/images/mount-step-05.jpg' className="imgInstructions" alt="Instructions Step 5" />

            <br />
            <br />
            <br />
        </div>
    )
}