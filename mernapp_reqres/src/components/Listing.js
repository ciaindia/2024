import React from 'react'

export default function Listing() {

  const fruits = ["apple", "banana", "chiku"]
  //CW3: Create array of json of 3 users with keys name, email 
  //and display in table tr tag using map
  const users = [
                  {name: "abc", email: "abc@gmail.com"}, {name: "xyz", email: "xyz@gmail.com"}
              ]
  return (
    <>
      <table>
        {
          users.map(user => {
            return <tr>
              <td>{user['name']}</td>
              <td>{user['email']}</td>
            </tr>
          })
        }
      </table>
      {/* {fruits}

      <ul>
        <li>{fruits[0]}</li>
        <li>{fruits[1]}</li>
        <li>{fruits[2]}</li>
      </ul>

      <ul>
        {
          fruits.map(fruit => {
            return <li>{fruit}</li>
          })
        }
      </ul> */}

    </>
  )
}
