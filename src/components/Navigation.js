import React from "react";
import "./Navigation.css";
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <nav>
            {/* <a>태그의 href를 사용하면 페이지를 새로고침하므로 라우팅이 제대로 동작하지 않음*/}
            {/* <a href="/">Home</a> */}
            {/* <a href="/about">About</a> */}

            {/* react-router-dom 의 Link 를 사용. href대신 to를 쓴다. */}
            {/* 반드시 Router(<HashRouter>) 안에 있어야 함. */}
            {/* <Link to="/">Home</Link> */}
            {/* <Link to="/about">About</Link> */}

            <div className="title">
                <Link to="/">Movie App</Link>
            </div>
            <div className="nav">
                {/* <div className="nav__link">
                    <Link to="/">Home</Link>
                </div> */}
                <div className="nav__link">
                    <Link to="/about">About</Link>
                </div>
            </div>
        </nav>  
    );
}

export default Navigation;