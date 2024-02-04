import React, { useEffect } from 'react'
import { setRedux } from './Store'

export default function C(props) {
  const msg = "sonam gupta bewafa hai..."

  setRedux('msg', msg)

  return (
    <div style={{border: 'solid 1px blue', margin: '10px'}}>
        <h1>C component</h1>
    </div>
  )
}
