import { useState } from 'react'
import {puppyList} from './data.js'



function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup)
  
  return (
    <div>
      <div className="header">
    <h1>Puppy Pals</h1>
    </div>
    <div className="container">
    <div className="puppy-list">
      <div>
        {
          puppies.map((puppy) => 
          {
            function handleClick (){
            setFeatPupId (puppy.id) 
            }
            return <p key={puppy.id} onClick={handleClick}>{puppy.name}</p>
          })
        }</div>
        
        {featPupId && (
          <div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Emai: {featuredPup.email}</li>
            </ul>
          </div>
        )
        }
      </div>
      </div>
      </div>
  )
}

export default App
