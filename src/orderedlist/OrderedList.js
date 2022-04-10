import React, {useState} from "react";

const OrderedList = () => {
  const [input, setInput] = useState('')
  const [list, setList] = useState([])
  const [direction, setDirection] = useState(true)

  //change input field on change of input field
  const inpChange = (e) => {
    setInput(e.target.value.trim())
  }
  
  //add input to list and sort on enter keystroke, clear input after
  const keyStroke = (e) => {
    if (e.which === 13 && !(input === '')){
      if (direction){
        setList((prevState)=>{return [...prevState, e.target.value]})
        setList((prevState)=>prevState.sort())
      }
      else {
        setList((prevState)=>{return [...prevState, e.target.value]})
        setList((prevState)=>prevState.sort().reverse())
      }
      setInput('')
    }
  }
  
  //sort according to new direction and change direction value
  const changeDirection = (e) => {
    if (direction){
      setList((prevState)=>prevState.sort().reverse())
      setDirection(false)
    }
    else {
      setList((prevState)=>prevState.sort())
      setDirection(true)
    }
  }
  
  //clear list and input value
  const clearAll = () => {
    setList([])
    setInput('')
  }
  
  return (
    <>
      <input className="add-item" value={input} onChange={inpChange} onKeyDown={keyStroke} />
      <button className="sort-direction" onClick={changeDirection}>{direction ? 'down' : 'up'}</button>
      <button className="clear-list" onClick={clearAll}>️🆑</button>
      <ul className="items-list">
        {list.map(m => {return <li key={m}>{m}</li>})}
      </ul>
    </>
  );
}

export default OrderedList