import React, { useState } from 'react';

export default function WordLetterCount() {
  let [msg, setMsg] = useState("");
  let [letterCount, setLetterCount] = useState(0);
  let [wordCount, setWordCount] = useState(0);

  function countText(a) {
    let msg_txt = a.target.value;
    setMsg(msg_txt);
    setLetterCount(msg_txt.length);

   
    let words = msg_txt.trim().split(/\s+/);
    setWordCount(words.filter(word => word !== "").length);
  }

  return (
    <div className="container py-4" >
    <h1 className="text-center text-dark mb-4" style={{ fontWeight: "bold", fontSize: "2.5rem"}}>
       Enter Messages
      </h1>
      <textarea 
        className="form-control my-3" 
        placeholder="Enter Your Message"
        value={msg}
        onChange={countText}
      ></textarea>

      <p>
        Message is <b>{msg}</b> 
        <strong> Letter Count:</strong> <b>{letterCount}</b> <br />
       <strong>Word Count are:</strong> <b>{wordCount}</b>
      </p>
    </div>
  );
}
