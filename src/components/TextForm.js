import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    
    const handleUpClick = (e)=>{
        e.preventDefault();
        let newText = text.toLocaleUpperCase();
        setText(newText)
    }

    const handleLowClick = (e)=>{
        e.preventDefault();
        let newText = text.toLocaleLowerCase();
        setText(newText)
    }

    const handleClearText = (e)=>{
        e.preventDefault();
        let newText = "";
        setText(newText)
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    return (
    <>
    <div>
        <form>
            <h1>{props.heading}</h1>
            <div className="form-group">
                <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="5" onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-3" onClick={handleClearText}>Clear Text</button>
        </form>
    </div>
    <div className="container my-3">
        <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    </>
  )
}
