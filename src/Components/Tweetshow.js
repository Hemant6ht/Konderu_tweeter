import React from 'react';
import Tweet from './Tweet';
import '../Styles/Tweetshow.css';
function Tweetshow({tweets}) {
  return (
  <div className="tweetcollection">
      {
        tweets.map((tweet,index) =>{
           return (
               <Tweet tweet={tweet} key={index}/>
           );
        })
        }
  </div>
  );
}

export default Tweetshow;
