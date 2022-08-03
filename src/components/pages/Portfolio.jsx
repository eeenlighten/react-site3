import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import PortCont from "../includes/PortCont";
import Title from "../layout/Title";
import Contact from "../pages/Contact";
// import axios from "axios";


// 컴포넌트 (함수형 / 클래스)

// 함수(실행문) class(실행문) 함수의 집합체

// 함수-> 자바스크립트(많이쓰는 추세, 초보자 쉬움) 
// calss -> 지바 씨언어, 장점이 더 많음 
// 그래서 둘이 합친게 react hook

// function Portfolio() {
//   return (
//     <>
//       <Header />
//       <Contents>
//         <PortCont />
//       </Contents>
//       <Footer />
//     </>
//   )
// }

// function Portfolio {

// }

// 클래스형
// class Portfolio extends React.Component {
//   state = {
//     ports: [],
//   };

//   getPorts = async () => {
//     const {data: {
//         data: { ports },
//       }, 
//     } = await axios.get(
//       "https://webstoryboy.github.io/react5001/src/assets/json/portfolio.json");
//       // console.log(data.data.data.ports);
//       this.setState({ ports }) 
//   }; // 콜백함수 비동기

//   componentDidMount(){
//     this.getPorts();
//   }

//   render() {
//     const { ports } = this.state;
//     return (
//       <>
//         <Header />
//         <Contents>
//           <PortCont ports={ports} />
//         </Contents>
//         <Footer />
//       </>
//     );
//   }
// }

// 함수형
function Portfolio() {
  const [ports, setPorts] = useState([]); // [변수, 메서드]

  useEffect(() => {
    const requestOption = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://webstoryboy.github.io/react5001/src/assets/json/portfolio.json",
      requestOption
    )
      .then((response) => response.json())
      .then((result) => setPorts(result.data.ports))
      // .then((result) => console.log(result.data.ports));      
      .then((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["portfolio", "site"]} />
        <PortCont ports={ports} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Portfolio;

