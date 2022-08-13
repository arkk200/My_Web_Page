import './FourthPage.css';
import brace_image from '../../Images/brace.png';

function FourthPage() {
    return (
        <div id="fourth-page">
            <div id="fourth-contents">
                <h2 id="fourth-title">My works</h2>
                <div className="works">
                    <div id="three" className="work-titles">Three.js</div>
                </div>
                <img src={brace_image} id="fourth-brace" />
            </div>
        </div>
    );
}

export default FourthPage;