import { useState } from "react";
import { Tweet } from "./Tweet";

const DEFAULT_TWEET = [
  {
    name:"Kylian", 
    content:"Yo tout lmonde", 
    like:6000
  },
  {
    name:"Didier", 
    content:"Oue", 
    like:300
  },
  {
    name:"Lucas", 
    content:"Genant", 
    like:2
  },
  {
    name:"Jean", 
    content:"FREEEERE", 
    like:1
  },
]

function App() {
  let [tweet, setTweet] = useState(DEFAULT_TWEET);

  console.log("RERENDER !!")
  
  return (
    <div>
      <div className="tweet-container">
        <Tweet name="Kylian" content="Yo tout lmonde" like={6000}/>
        <Tweet name="Billy" content="Wsh" like={20}/>
        <Tweet name="Roger" content="Genant" like={5000} />
        <Tweet name="Conci" content="get out" like={0} />
      </div>
    </div>
  )
}

export default App;