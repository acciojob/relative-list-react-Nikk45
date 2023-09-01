import React from 'react'

const relatives = [
  "Parents",
  "Siblings",
  "Grandparents",
  "Aunts and Uncles",
  "Cousins",
  "Nieces and Nephews",
  "Spouse and In-Laws",
  "Children and Grandchildren",
  "Godparents",
  "Family Friends",
  "Close Relatives living abroad",
  "Great-Grandparents",
  "Great Aunts and Great Uncles",
  "Step-Relatives",
  "Adopted Relatives"
]

const App = () => {
  return (
    <div id="main">
               <ol id='relativeList'>
               {
                relatives.map((relative,index)=>
                  <li key={`relativeListItem${index+1}`}>{relative}</li>
                )
               }
               </ol>
    </div>
  )
}

export default App
