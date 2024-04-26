import { useState } from "react"
import style from "./DisplayButton.module.css"

export default function DisplayButton({onBtnClick}){
    
    let btnArray=["C", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", ">", "<", "*","/", "+", "=", "%"]

    return(
        <>
        <div className={style.buttonBox}>
          {btnArray.map((btn, idx)=> <button style={{fontSize:"1rem", fontWeight:"bolder"}} onClick={()=>onBtnClick(btn)} key={idx}>{btn}</button>)}
        </div>
        </>
    )
}