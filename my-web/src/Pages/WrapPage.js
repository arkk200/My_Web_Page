import { useEffect, useRef } from "react";
import FirstPage from "./FirstPage/FirstPage";
import './WrapPage.css';

function WrapPage(){
    const wrapPage = useRef();
    
    const preventScroll = e => {window.scrollTo(0, 0)}
    window.addEventListener('scroll', preventScroll);
    setTimeout(() => {
        window.removeEventListener('scroll', preventScroll);
    }, 2000);

    let wrapYSize = 0;
    useEffect(() => {
        function animate(){
            requestAnimationFrame(animate);
            wrapYSize += (window.scrollY - wrapYSize) / 20;
            wrapPage.current.style.top = `-${wrapYSize}px`;
        }
        animate();
    }, []);
    return(
        <div id="wrap-page" ref={wrapPage}>
            <FirstPage />
        </div>
    );
}

export default WrapPage;