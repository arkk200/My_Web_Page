import { useEffect, useRef } from "react";
import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import './WrapPage.css';

function WrapPage(){
    const wrapPage = useRef();
    const wrapYSize = useRef(0);
    
    const preventScroll = e => {window.scrollTo(0, 0)}
    window.addEventListener('scroll', preventScroll);
    setTimeout(() => {
        window.removeEventListener('scroll', preventScroll);
    }, 2000);

    useEffect(() => {
        function animate(){
            requestAnimationFrame(animate);
            wrapYSize.current += (window.scrollY - wrapYSize.current) / 20;
            wrapPage.current.style.top = `-${wrapYSize.current}px`;
        }
        animate();
    }, [wrapYSize]);
    return(
        <div id="wrap-page" ref={wrapPage}>
            <FirstPage />
            <SecondPage />
        </div>
    );
}

export default WrapPage;