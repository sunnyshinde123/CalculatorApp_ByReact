import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style from "./App.module.css"
import DisplayBar from './Components/DisplayBar'
import DisplayButton from './Components/DisplayButton'

function App() {
  let [state, setState]=useState("");

  let onBtnClick = (btn) =>{
    if(btn=="C"){
      setState("");
    }else if(btn=="="){
      const result=eval(state);
      setState(result);
    }else{
      let newDisplayValue=state+btn;
      setState(newDisplayValue);
    }
  }
  

  return (
    <>
      <h2 className={style.heading}>Calculator App</h2>
      <div id={style.calculator}>
        <DisplayBar state={state}></DisplayBar>
        <DisplayButton onBtnClick={onBtnClick}></DisplayButton>
      </div>
    </>
  )
}

export default App
