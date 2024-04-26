import style from "./DisplayBar.module.css"

export default function DisplayBar({state}){
    return (
        <>
        <div className={style.inputbox}>
          <input type="text" className={style.input} value={state} style={{fontWeight:"bolder", fontSize:"1rem"}}/>
        </div>
        </>
    )
}