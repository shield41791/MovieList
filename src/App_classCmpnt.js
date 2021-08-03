// import dependancies
import React from "react";

// Class Component
class App extends React.Component {
  // 생성자 (컴포넌트 생성 전 실행)
  constructor(props) {
    super(props);
    console.log("hello");
  }
  
  // 컴포넌트 생성 후 실행
  componentDidMount() {
    console.log("component rendered");
  }

  // 컴포넌트 갱신 후 실행
  componentDidUpdate() {
    console.log("component updated");
  }

  // 컴포넌트 소멸시 실행 (페이지 이동 등)
  componentWillUnmount() {
    console.log("bye bye");
  }

  // state = 오브젝트
  state = {
    // data (변동되는 값)
    count : 0
  }

  add = () => {
    // 아래와 같이 직접 state를 변경하면 안 됨
    // this.state.count = 1; 

    // setState()로 state 갱신 (setState()를 호출할 때마다 자동으로 render()을 호출함)
    // this.setState({count : this.state.count + 1});
    this.setState(current => ({count : current.count + 1}));
  };
  
  minus = () => {
    this.setState(current => ({count : current.count - 1}));
  };


  // 리액트는 자동으로 모든 class component의 render 메소드를 실행함
  render()  {
    console.log("render");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
