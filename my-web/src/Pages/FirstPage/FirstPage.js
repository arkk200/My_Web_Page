import { useEffect, useRef } from 'react';
import './FirstPage.css';

function FirstPage() {
    const highLightRefs = useRef([]);
    const smallNameRefs = useRef([]);
    const titleAbout = useRef();
    const titleMe = useRef();
    useEffect(() => {
        for(let i = 0; i < 3; i++){
            highLightRefs.current[i].classList.add('highlight-animation');
            smallNameRefs.current[i].classList.add('small-name-animation');
            titleAbout.current.classList.add('title-about-animation');
            titleMe.current.classList.add('title-me-animation');
        }
    }, []);
    return (
        <div id="first-page">
            <div id="contents">
                <h1 id="title">
                    <span id="title-about" ref={titleAbout}>About</span>
                    <span id="title-me" ref={titleMe}>:Me</span>
                </h1>
                <h3 id="my-name">
                    <span className="highlight" ref={e => highLightRefs.current[0] = e}>L</span>
                    <span className="small-name" ref={e => smallNameRefs.current[0] = e}>ee</span>
                    <span className="highlight" ref={e => highLightRefs.current[1] = e}>M</span >
                    <span className="small-name" ref={e => smallNameRefs.current[1] = e}>yeong</span>
                    <span className="highlight" ref={e => highLightRefs.current[2] = e}>J</span>
                    <span className="small-name" ref={e => smallNameRefs.current[2] = e}>ae</span>
                </h3>
                {/* <div id="title-paragraph">
                    프론트에서 3D와 애니메이션을 배우고 있고, 웹페이지에 나만의 3D와 애니메이션을 만들어 나가고 있는 학생, 이명재 입니다.
                    이 외에도 백엔드를 공부하여 풀스택 개발자가 되는게 꿈이며 무엇보다 awwwards에 3D를 이용한 웹페이지로 Site Of The Day에 선정 되어보고 싶습니다.
                </div> */}
            </div>
        </div>
    );
}

export default FirstPage;