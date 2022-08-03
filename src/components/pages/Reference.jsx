import React from "react";
import Header from "../layout/Header"; 
import Footer from "../layout/Footer"; 
import Contents from "../layout/Contents";
import ReferCont from "../includes/ReferCont";
import Loading from "../layout/Loading";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import axios from "axios";

// function Reference() {
//   return (
//     <>
//       <Header />
//       <Contents>
//         <ReferCont />
//       </Contents>
//       <Footer />
//     </>
//   )
// }

// 변수 : 데이터 저장 : 숫자, 문자, 불린, 객체, 배열 함수, null, undefiend -> 데이터 타입(자료형)
// 변수 : 지역변수 + 전역변수 + 매개변수 --> 내부함수 --> 클로저(지역함수+전역함수)

class Reference extends React.Component {
  state = {
    isLoading: true,
    // isLoading: false, 트리거 변수(함수를 작동/비작동 시킬때)
    refers: [],
  };

  getRefers = async () => {
    const {
        data:{
          data:{ htmlRefer },
          },
        } = await axios.get("https://webstoryboy.github.io/react2022/src/assets/json/refer.json")
    // console.log(html)
    this.setState({ refers: htmlRefer, isLoading: false });
  };

  componentDidMount() {
    setTimeout(() => {
      this.getRefers();
    }, 1000);
  } // 생명주기 함수


render() {
  const { isLoading, refers } = this.state;
    return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
         <Header />
          <Contents>
            <Title title={["Reference", "book"]} />
            <section className="refer__cont">
              <div className="container">
                <div className="refer__inner">
                  <h2>html</h2>
                  <div className="refer__list">
                    {
                      refers.map((refer) => (
                      <ReferCont 
                      key={refer.id}
                      id={refer.id} 
                      title={refer.title}
                      desc={refer.desc}
                      use={refer.use}/>
                      ))
                    }
                  </div>
                </div>
              </div>
            </section>
            <Contact />
          </Contents>
         <Footer />
        </>
      )}
    </>
    );
  }
}

export default Reference;