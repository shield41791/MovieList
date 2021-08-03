// 디펜던시 임포트
import PropTypes from "prop-types";

// 외부(별도의 파일) 컴포넌트 예시
//import Potato from './Potato';

// 내부(App.js 안) 컴포넌트 예시
// function Potato() { // 대문자로 시작하는 것에 주목
//   return <h3>I love potato</h3>;
// }

// 컴포넌트끼리(App & Food) 데이터 주고 받기
function Food({name, picture, rating}, /*props <-- 통째로 가져올 수 있다*/) {
  //2. 
  //console.log(props);
  //console.log({props.name});

  // 3.
  return  <div>
            <h2>I like {name}</h2>
            <h4>{rating}/5.0</h4>
            <img src={picture} alt={name}/>
          </div>;
}

// 4. 전달받은 props가 내가 원하는 props인가(데이터 타입, undefined 여부 등) 확인해줌 
Food.propTypes = { // 반드시 propTypes로 해야 함
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  //rating: PropTypes.string.isRequired
  rating: PropTypes.number.isRequired
};

// Fake 외부 데이터 (API나 DB에서 이렇게 가져온다고 친다)
const foodILike = [
  {
    id: 1,
    name: "Sushi",
    image: "http://cdn.mogile.archive.st-hatena.com/v1/image/g-gourmedia/297787134138067330.jpg",
    rating: 4.5
  },
  {
    id: 2, 
    name: "Jajangmyeon",
    image: "https://recipe1.ezmember.co.kr/cache/recipe/2020/06/04/d96e1e81ecc8d86c922d486ec6eec4da1_m.jpg",
    rating: 4.3
  },
  {
    id: 3,
    name: "Hamburger",
    image: "http://img.danawa.com/prod_img/500000/882/724/img/5724882_1.jpg?shrink=360:360&_v=20171212162328",
    rating: 4.1
  }
];

// function renderFood(food) {
//   return <Food name={food.name} picture={food.image}></Food>;
// }

function App() {
  return (
    // 1. 컴포넌트 (Component)
    // Fail : JSX elements must be wrapped in an enclosing tag.
    //<div>
    //  <h1>Hello React!</h1>
    //</div>
    //<Potato/>
    //
    // 이렇게 하나의 태그로 감싸야 된다.
    // <div>
    //   <h1>Hello React!</h1>
    //   <Potato/>
    // </div>

    // 2. 컴포넌트끼리(App & Food) 데이터 주고 받기
    // 브라우저 Console에 어떻게 찍히는지 확인해보자
    // <div>
    //   <Food name="Ramen"/>
    // 
    //   {/* 이렇게 여러 속성을 넣을 수도 있다. */}
    //   <Food 
    //     name="Kimchi" 
    //     something="{true}"
    //     papapapa={["hello", 1, 2, 3, 4, true]}
    //   />
    // </div>

    // 3. 컴포넌트끼리(App & Food) 데이터 주고 받기 (외부 데이터 가져오기)
    // Array.map(item) : 배열의 각 요소들(item)에 접근하는 함수
    <div>
      {foodILike.map(food => 
        // foodILike의 각 요소들로 Food 컴포넌트 생성
        // key(유니크한 값)를 설정해줘야 한다.
        <Food key={food.id} name={food.name} picture={food.image} rating={food.rating}></Food>
      )}
      
      {/*foodILike.map(renderFood)*/}
    </div>
  );
}

export default App;
