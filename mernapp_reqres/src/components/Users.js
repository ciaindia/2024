import axios from 'axios'
import React, { useEffect, useState } from 'react'
  /*CW4: Create Users component and show users listing in
  html table 
  API: https://reqres.in/api/users?page=1 
  TIP: use useState and useEffect hooks
  */
export default function Users() {
    const [data, setData] = useState([])

    useEffect(()=> {
        fetch("https://reqres.in/api/users?page=1")
        .then(res => res.json())
        .then(res => {
            setData(res['data'])
            // data = res[data]
        })
    }, [])

    // CW1: Create function deleteUser and onclick of Delete button call deleteUser Function
    const deleteUser = (id) => {
      // alert(id)

      axios.delete(`https://reqres.in/api/users/${id}`)
      .then(function (response) {
        alert(JSON.stringify(response)); window.location.reload();
      })
      .catch(function (error) { console.log(error); })
      .finally(function () { });
    }
    /*
    CW5: Create component JPUsers and load data from api
    https://jsonplaceholder.typicode.com/users
    and display in table
    HW: Create Users component and load data from node js api
    */

  return (
    <>
    {/* {JSON.stringify(data)} */}
    <table cellPadding={ 10 } className="table table-hover table-striped table-dark text-center">
          <thead></thead>
          <tbody>
        {
          data.map(user => {
            return <tr>
                        <td>{user['id']}</td>
                        <td>{user['first_name']}</td>
                        <td>{user['email']}</td>
                        <td>
                                    <a href={'user-edit?id='+user['id']} className="btn btn-secondary mx-2">Edit</a>
                                    <button className="btn btn-danger" onClick={() => {deleteUser(user['id'])}}>Delete</button>
                                </td>
                    </tr>
          })
        }
        </tbody>
            <tfoot></tfoot>
        </table>
    </>
  )
}
