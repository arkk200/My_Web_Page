import { useRef } from 'react';

function PageGuide(){
    const guideGauge = useRef();
    window.addEventListener('scroll', () => {
        guideGauge.current.style.height = `${300 * window.scrollY / (window.innerHeight * 6)}px`
    })
    return(
        <div id="page-guide">
            <div id="guide-line">
                <div id="guide-gauge" ref={guideGauge}></div>
            </div>
            <div id="fist-page-point"></div>
            <div id="second-page-point"></div>
            <div id="third-page-point"></div>
            <div id="fouth-page-point"></div>
        </div>
    )
}

export default PageGuide;