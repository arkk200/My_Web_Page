import { useRef } from 'react';

function PageGuide(){
    const guideGauge = useRef();
    window.addEventListener('scroll', () => {
        let gaugeLength = 0;
        if(window.scrollY < window.innerHeight * 2){
            gaugeLength = window.scrollY / (window.innerHeight * 3) <= 1 / 3 ?
                window.scrollY / (window.innerHeight * 3)
                : 1 / 3;
        } else if (window.scrollY < window.innerHeight * 4){
            gaugeLength = (window.scrollY - window.innerHeight) / (window.innerHeight * 3) <= 2 / 3 ?
            (window.scrollY - window.innerHeight) / (window.innerHeight * 3)
                : 2 / 3;
        } else {
            gaugeLength = (window.scrollY - window.innerHeight * 2) / (window.innerHeight * 3) <= 1 ?
            (window.scrollY - window.innerHeight * 2) / (window.innerHeight * 3)
                : 1;
        }
        guideGauge.current.style.height = `${300 * gaugeLength}px`;
    })
    return(
        <div id="page-guide">
            <div id="guide-line">
                <div id="guide-gauge" ref={guideGauge}></div>
                <div className="page-point"></div>
                <div className="page-point"></div>
                <div className="page-point"></div>
                <div className="page-point"></div>
            </div>
        </div>
    )
}

export default PageGuide;