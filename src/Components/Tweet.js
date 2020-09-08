import React from 'react';
import '../Styles/Tweet.css';
function Tweet({tweet}) {
  return (
  <div className="tweetcard">
       <h2 className="sty">{tweet}</h2>
  </div>
  );
}

export default Tweet;
