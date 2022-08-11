import { useEffect } from "react";
import FirstPage from "./FirstPage/FirstPage";
import './WrapPage.css';

function WrapPage(){
    useEffect(() => {
        function animate(){
            requestAnimationFrame(animate);
        }
        animate();
    }, []);
    return(
        <div id="wrap-page">
            <FirstPage />
        </div>
    );
}

export default WrapPage;