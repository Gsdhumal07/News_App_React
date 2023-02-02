// import { useState } from "react"
import React ,{useState} from 'react'

export default function TextForm(props){
    
const handleUpClick = ()=>{
    // console.log("handleUpclick function was clicked" +text)
    let newtext=text.toUpperCase();
    
    SetText(newtext)
}
const handleextraspace = ()=>{
    let newtext=text.split(/[ ]+/);
    SetText(newtext.join(" "))
}
const handleLowClick = ()=>{
    // console.log("handleUpclick function was clicked" +text)
    let newtext=text.toLowerCase();
    SetText(newtext)
}
const [mystyle ,setmystyle]=useState({
    color :'white',
    backgroundColor: 'black'

})
const [btntext ,setbtntext]=useState("Enable dark mode")
const handlecolor = ()=>{
   if( mystyle.color==='white'){

        setmystyle({
            color :'black',
            backgroundColor: 'white'
        })
        setbtntext("Enable light Mode")
    }
    else{
        setmystyle({
            color :'white',
            backgroundColor: 'black'
        })
        setbtntext("Enable dark Mode")
   }
}

const handleclear = ()=>{
    
    let newtext=" ";
    SetText(newtext)
}
const handleonchange = (event)=>{
    // console.log("handleonchange function was clicked")
    SetText(event.target.value)
}

    const[text ,SetText]=useState("Enter the text here");
    // text="new text"  wrong method to change the text 
    // SetText("New text")  correct way to change the state 
    return (
        <>
        
        <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="mybox" style={mystyle} onChange={handleonchange}  value={text} rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLowClick}>Convert to Lowercasecase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleextraspace}>Remove Extra spaces</button>
        <button className='btn btn-primary mx-1 my-1' onClick={handlecolor}>{btntext}</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleclear}>Clear</button>
        </div>
        <div className='container'>
            <h1>Your text summary </h1>
            <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> Words <b>{text.length} </b> charectores </p>
            <p><b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length }</b> Minutes </p>
            <h2>Pre-view</h2>
            <p>{text.length>0?text:"Enter something to preview "}</p>
        </div>
        </>
    )
}