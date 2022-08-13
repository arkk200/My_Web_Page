import './ThirdPage.css';
import brace_image from '../../Images/brace.png';

function ThirdPage(){
    return(
        <div id="third-page">
            <div id="third-contents">
                <h2 id="third-title">My stacks</h2>
                <img className="third-brace" src={brace_image} />
                <img className="third-brace" src={brace_image} />
                <img className="third-brace" src={brace_image} />
                <img className="third-brace" src={brace_image} />
            </div>
        </div>
    );
}

export default ThirdPage;