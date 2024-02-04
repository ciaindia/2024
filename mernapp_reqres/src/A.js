import React from 'react'
import B from './B'
import D from './D'

export default function A() {

  return (
    <div style={{border: 'solid 1px red'}}>
        <h1>A component</h1>
        <B/>
        <D />
    </div>
  )
}
