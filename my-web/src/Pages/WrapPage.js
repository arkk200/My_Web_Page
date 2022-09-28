import { useEffect, useRef } from "react";
import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import ThirdPage from "./ThirdPage/ThirdPage";
import FourthPage from "./FourthPage/FourthPage";
import './WrapPage.css';

function WrapPage() {
    const wrapPage = useRef();
    const wrapYSize = useRef(0);

    // 스크롤 막기
    const preventScroll = () => { window.scrollTo(0, 0) }
    window.addEventListener('scroll', preventScroll);

    let pageControlSize = 0;
    useEffect(() => {
        setTimeout(() => {
            window.removeEventListener('scroll', preventScroll);            
            window.addEventListener('scroll', () => {
                if (window.scrollY < window.innerHeight){
                    pageControlSize = window.scrollY;
                } else if (window.scrollY < window.innerHeight * 2){
                    pageControlSize = window.innerHeight;
                } else if (window.scrollY < window.innerHeight * 3){
                    pageControlSize = window.scrollY - window.innerHeight;
                } else if (window.scrollY < window.innerHeight * 4){
                    pageControlSize = window.innerHeight * 2;
                } else if (window.scrollY < window.innerHeight * 5){
                    pageControlSize = window.scrollY - window.innerHeight * 2;
                }
            });
        }, 2000);
    }, []);

    useEffect(() => {
        function animate() {
            requestAnimationFrame(animate);
            wrapYSize.current += (pageControlSize - wrapYSize.current) / 10;
            wrapPage.current.style.top = `-${wrapYSize.current}px`;
        }
        animate();
    }, [wrapYSize]);
    return (
        <div id="wrap-page" ref={wrapPage}>
            <FirstPage />
            <SecondPage />
            <ThirdPage />
            <FourthPage />
        </div>
    );
}

export default WrapPage;