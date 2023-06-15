import React, {useEffect, useState} from "react";

// Import the "useState" and "useEffect" hooks from React
// Soo jiido "useState" iyo "useEffect"

// Import the "MyProfile" component
// Soo jiido "MyProfile" component-ka
import MyProfile from './components/MyProfile'
// Import the "axios" library
// Soo jiido "axios" hoos
import axios from 'axios'

import "./App.css";

function App() {

  // Create 3 states, "profile", "followers", and "following"
  // Samee 3 state, "profile", "followers", iyo "following"
  const [profile , setProfile] = useState([])
  const [followers, setFollowers] = useState([])
  const [following, setFollowing] = useState([])

  // API For Profile = https://api.github.com/users/<your-github-username>
  // API for Followers = https://api.github.com/users/<your-github-username>/followers
  // API for Following = https://api.github.com/users/<your-github-username>/following

  // Use axios to fetch data from the API using the useEffect hook
  // Halkaan isticmaal axios adigoo kasoo jiidanaayo waxaa u baahantahay API, useEffect hook-na isticmaal
   // profile axios

   useEffect(() =>{
    axios.get('https://api.github.com/users/abdiasiis78')
    .then((res) => {
     console.log(res);
     setProfile(res.data)
    })
   })
 
 // folowers Axios  
   useEffect(() =>{
     axios.get('https://api.github.com/users/abdiasiis78/followers')
     .then((res) => {
       console.log(res);
      setFollowers(res.data)
     })
    })
  
   
 // Flowing Axios
    useEffect(() =>{
     axios.get('https://api.github.com/users/abdiasiis78/following')
     .then((res) => {
       console.log(res);
      setFollowing(res.data)
     })
    })
  
 
    
  return (
    <div className="bg-white md:mx-auto rounded shadow-xl w-full md:w-1/2 overflow-hidden">
      <div className="h-[140px] bg-gradient-to-r from-cyan-500 to-blue-500"></div>

      {/* Show "MyProfile" component here and give it 3 props, "profile", "followers", and "following" */}
      <MyProfile profile = {profile} followers = {followers} following ={following}/>
      {/* Halkaan soo gali "MyProfile", 3 props-na sii, "profile", "followers", iyo "following" */}

    </div>
  );
}

export default App;
