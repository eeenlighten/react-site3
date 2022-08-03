import React from 'react'

// const textInfo = {
//     text1 : "we proved",
//     text2 : "visual proved", 
//     text3 : "solution", 
//     text4 : "for you webs" 
// }; // 변수 속 객체



// function Info({text1, text2, text3, text4}) {
//     return (
//         <div className="main__inner">
//             <div>{text1}</div>
//             <div>{text2}</div>
//             <div>{text3}</div>
//             <div>{text4}</div>
//         </div>
//     )
// } // props 생략 가능

// function Info(props) {
//     return (
//         <div className="main__inner">
//             <div>{props.text1}</div>
//             <div>{props.text2}</div>
//             <div>{props.text3}</div>
//             <div>{props.text4}</div>
//         </div>
//     )
// }

function Info({text}){
    return <div>{text}</div>;
}

const textInfo = [
    {text : "we proved"},
    {text : "visual proved"},
    {text : "solution"},
    {text : "for you webs"}
];

function MainCont() {
  return (
    <section className="main__cont">
        <div className='main__inner'>
            {textInfo.map((txt) => (
                <Info text={txt.text} key={txt.text} />
            ))}
        </div>
    </section>
  );
}

export default MainCont