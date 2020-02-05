import React, { useState, useEffect } from 'react'

import './App.css';


const App = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count is ${count} time`;
  });

  return (
    <div className="App">

      <div className="bg">
        <div className="bg2">
          <div className="hero">
            <header >
              <h1 className="title">Hello Napat</h1>
              <h1 className="title">{count}</h1>
              <br></br>
              <button type="button" class="btn btn-danger" onClick={() => setCount(count + 1)}>Add</button>
              <p className="description"> </p>
              <img src="bot.jpg" alt="New" width="300" height="350"></img>
              <div className="App">
                <a href="https://facebook.com/newnapat17" type="button" class="btn btn-primary">Facebook</a>
                <a href="https://github.com/Napat07" type="button" class="btn btn-warning">Github</a>
                <a href="https://medium.com/@naphat1811" type="button" class="btn btn-info">Medium</a>
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
