import React from "react";
import {HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home.js";
import About from "./routes/About.js";
import Detail from "./routes/Detail.js";
import Navigation from "./components/Navigation.js";
import "./App.css";

function App() {
  return (
    <HashRouter>
      {/* 1. 네비게이션 */}
      <Navigation/>

      {/* 2. 라우팅 */}
      {/* Path -> 렌더링할 컴포넌트 */}
      {/* /about 이면 /도 렌더링하고, /about도 렌더링한다. */}
      {/* <Route path="/"><h1>Home</h1></Route> */}
      {/* <Route path="/about"><h1>About</h1></Route> */}

      {/* exact={true}이면 패스가 정확히 일치할때만(포함X) 렌더링한다. */}
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/movie/:id" component={Detail}/>
    </HashRouter>
  );
}

export default App;