import React from "react";
import axios from "axios";
import Movie from "../components/Movie.js";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  // ---------------------------------------------------------------------

  // React 라이프사이클
  // - Mounting(컴포넌트 생성)이 끝나면 componentDidMount() 함수 실행

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({isLoading: false});
  //   }, 1000);
  // }

  componentDidMount() {
    this.getMovies();  
    //console.log("componentDidMount");
  }

  // ---------------------------------------------------------------------

  // 비동기 함수
  // - async : 동작이 완료될 때까지 기다림
  // - await : 기다릴 대상

  getMovies = async () => {
    // axios로 API 호출

    // 버전 1 (이게 더 쉬워 보이는데..?)
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    //console.log(movies.data.data.movies);

    // 버전 2 (ES6 문법)
    // const {
    //   data: {
    //     data: {
    //       movies
    //     }
    //   }
    // } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log(movies);

    this.setState({movies: movies.data.data.movies, isLoading: false});
  }

  // ---------------------------------------------------------------------

  // render()
  // - 리액트는 자동으로(?) 모든 class component의 render 메소드를 실행

  render()  {
    //return <div>{this.state.isLoading ? "Loading" : "We are ready"}</div>;

    // ES6 문법
    const {isLoading, movies} = this.state;

    return <section className="container">
      {
        isLoading ? 
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div> : (
        <div className="movies">
          {movies.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              medium_cover_image={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </div>
        )
      }
    </section>;
  } //render()
}

export default Home;