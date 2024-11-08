
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';


function App(){
  const [number] = useState(-10);  
  

  const getApp = () => {
    if (number > 0) {
      return 'green';
    } else if (number < 0) {
      return 'red';
    }
  };

  return (
 
      
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: getApp(),
        }}
      ></div>

      
      
  
  );
};


var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>)