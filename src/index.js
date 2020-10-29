import React from 'react'
import ReactDOM from 'react-dom'
import Board from './components/Board'
import { observe } from './API/Game'

const root = document.getElementById('root')

observe((knightPosition) =>
  ReactDOM.render(<div className="App"
  style={{
    width: '600px',
    height: '600px'
  }}
>
  <Board knightPosition={knightPosition}/>
</div>, root)
)