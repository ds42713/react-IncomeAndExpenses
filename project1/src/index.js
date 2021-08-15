import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';



function FuncComponent() {
  return <div> <h1>function Component</h1>  </div>
}

class ClassComponent extends React.Component{
  render(){
    return <div> <h1>Class Component</h1>  </div>
  }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for   example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
