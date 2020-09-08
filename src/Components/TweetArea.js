import React,{useState} from 'react';
import '../Styles/TweetArea.css';
function TweetArea(props) {
  const [ntweet,setNtweet]=useState("");
  return (
      <div className="tweetingArea">
          <textarea palceholder="Write your tweet" value={ntweet} className="tweetinput" onChange={e=>{setNtweet(e.target.value);}}></textarea>
          <button name="twt" className="twt" onClick={()=>{props.onChange(ntweet);setNtweet(""); console.log("clicked")}}>Tweet</button>
      </div>
  );
}

export default TweetArea;
