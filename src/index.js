import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import Potato from './Potato'; // X. 컴포넌트를 추가하려면 App.js 안에 넣어야 함.

ReactDOM.render(
  // 이렇게는 할 수 없다. 리액트는 하나의 컴포넌트(App.js)만 렌더링하기 때문
  //<React.StrictMode><App /><Potato /></React.StrictMode>, document.getElementById('root')
  
  <React.StrictMode><App /></React.StrictMode>, document.getElementById('root')
);
