import React from 'react'

export default function InstructionStep(props) {
  return(
    <>
      <div className="textSubtitle" style={{fontSize: "2em", lineHeight: "2em"}}>{props.index}. </div>
      <div className="text" style={{textAlign: "center"}}>{props.text}</div>
      <img src={'/images/mount-step-0' + props.index + '.jpg'} 
           className="imgInstructions" 
           alt={"Instructions Step " + props.index} 
        />
    </>
  )
}