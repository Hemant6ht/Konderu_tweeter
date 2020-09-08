import React,{useState} from 'react';
import './App.css';
import TweetArea from './Components/TweetArea';
import Tweetshow from './Components/Tweetshow';

function App() {
  const [tweet,setTweets]=useState([]);
 function addtweet(newvalue)
  {
   setTweets(prevState => [...prevState,newvalue]);
    console.log(tweet);
    setTimeout(()=>{
      setTweets([]);
    },120000);
  }
  return (
    <div className="App">
       <center><h1>Tweet your Views ( Automatically deleted after 2 minutes )</h1></center>
       <Tweetshow tweets={tweet} />
       <TweetArea  onChange={addtweet}/>
    </div>
  );
}

export default App;
