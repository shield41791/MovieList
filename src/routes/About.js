import React from "react";

function About(props) {
    // Router안의 모든 Route들은 props를 가짐
    console.log(props);

    return <span>About this page: I build it because I love movies.</span>;
}

export default About;