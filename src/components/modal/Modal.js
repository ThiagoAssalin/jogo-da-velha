import React from 'react'
import './modal.css'
export default function Modal(props){
    return(
        <div className={props.gameOver ? "modal": "modal  hide"}>
            <h1>o player "{props.player}" venceu </h1>
        </div>
    )
}