import React from 'react'
import { getRedux } from './Store'

export default function E() {
  return (
    <div style={{border: 'solid 1px blue', margin: '10px'}}>
        <h1>E component</h1>
        {getRedux('msg')}
    </div>
  )
}
