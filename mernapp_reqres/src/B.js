import React from 'react'
import C from './C'

export default function B(props) {
  return (
    <div style={{border: 'solid 1px green', margin: '10px'}}>
        <h1>B component</h1>
        <C/>
    </div>
  )
}
