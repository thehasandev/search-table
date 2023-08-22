import React, { useEffect, useRef, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Data from "./data.json"

function App() {

  let [inputText,setInputText] = useState("")

  let inputRef = useRef(null)
  useEffect(()=>{
    inputRef.current.focus()
  })
 
 let dataFilter = Data.filter((item)=>(
    item.first_name.toLowerCase() == "" ? item : item.first_name.toLowerCase().includes(inputText)
  ))


  return (
    <>
     <div className="cantainer">
      <div className="row">
        <div className="col-lg-5">
          <input type="text" ref={inputRef}  onChange={(e)=>{setInputText(e.target.value)}}/>
        </div>
      </div>
      <div className="row ">
         <table>
            <thead>
              <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Roll</th>
              <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {
             dataFilter.map(item=>(
              <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              </tr>

                ))
              }
            </tbody>
         </table>
      </div>
     </div>
    </>
  )
}

export default App