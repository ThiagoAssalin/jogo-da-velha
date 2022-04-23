import React from 'react'
import './header.css'

export default function Header(props){
    return(
        <div className='cabeçalho'>
            <h1>Jogo Da Velha</h1>
            <button onClick={props.handleReset} className='btn'>Restart</button>
        </div>
    )
}