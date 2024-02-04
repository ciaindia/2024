import axios from 'axios'
import React, { useState } from 'react'

/**
 * 
 * @returns 
 * {
    "name": "morpheus",
    "job": "leader"
}
 */

export default function Useradd() {
    const [name, setName] = useState('')
    const [job, setJob] = useState('')

    const  postUser = () => {
        alert(name + " " + job)
        //add axios post code here and alert response ref: https://axios-http.com/docs/post_example
        axios.post('https://reqres.in/api/users', {
            name: name,
            job: job
          })
          .then(function (response) {   alert(JSON.stringify(response)); })
          .catch(function (error) {     console.log(error); });
    }

  return (
    <>
        <h1>User Add</h1>
        <input type="text" placeholder='enter name' onChange={(e) => setName(e.target.value)} autoFocus/>
        <input type="text" placeholder='enter job' onChange={(e) => setJob(e.target.value)}/>
        <button onClick={() => postUser() }>Add</button>
        <hr/>
        Name: {name} <br/>
        Job: {job}
    </>
  )
}
