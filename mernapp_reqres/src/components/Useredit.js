import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

export default function Useredit() {
    const [name, setName] = useState('')
    const [job, setJob] = useState('')

    const [searchParams] = useSearchParams();
    const id = searchParams.get('id')

    //https://reqres.in/api/users/2

    useEffect(() => {
        axios.get(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            // alert(JSON.stringify(response))
            setName(response.data.data['first_name'])
            setJob(response.data.data['last_name'])
        });
    }, [])



    const  putUser = () => {
        // alert(name + " " + job)
        //add axios post code here and alert response ref: https://axios-http.com/docs/post_example
        axios.put(`https://reqres.in/api/users/${id}`, {
            name: name,
            job: job
          })
          .then(function (response) {   alert(JSON.stringify(response)); })
          .catch(function (error) {     console.log(error); });
    }

  return (
    <>
        <h1>User Edit</h1>
        <input type="text" value={name} placeholder='enter name' onChange={(e) => setName(e.target.value)} autoFocus/>
        <input type="text" value={job} placeholder='enter job' onChange={(e) => setJob(e.target.value)}/>
        <button onClick={() => putUser() }>Update</button>
        <hr/>
        Name: {name} <br/>
        Job: {job}
    </>
  )
}
