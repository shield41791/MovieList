import React from "react";

// function Detail({location}) {
//     console.log(location);
//     return <span>Hello</span>;
// }

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        // 영화를 클릭하지 않고, 강제로 URL을 입력해서 간 경우 home으로 리다이렉트 
        if (location.state === undefined) {
            history.push("/");
        }
        // console.log(location.state);
        // twitter 카드용 메타태그 수정
        document.querySelector('meta[name="twitter:images"]')?.setAttribute('content', location.state.medium_cover_image)
    }

    // render()가 componentDidMount() 보다 먼저 실행되므로 여기도 예외처리 해야함.
    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <>
                    <div>
                        <span>{location.state.title}</span>
                    </div>
                    <img src={location.state.medium_cover_image} alt={location.state.title} />
                </>
            );
        } else {
            return null;
        }
    }
}

export default Detail;