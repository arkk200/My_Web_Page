import { useEffect, useRef, useState } from "react";
import github_logo from './Images/github_logo.png';

function Header() {
    const menuButton = useRef();
    const homeButton = useRef();
    const homeMenuButtonRef = useRef();
    const [isMenu, setIsMenu] = useState(true);
    const sites = useRef([]);
    const siteLogos = useRef([]);
    const siteIds = useRef([]);

    useEffect(() => {
        if (isMenu) {
            homeButton.current.classList.add('home-btn-hidden');
            menuButton.current.classList.remove('menu-btn-hidden');
        } else {
            menuButton.current.classList.add('menu-btn-hidden');
            homeButton.current.classList.remove('home-btn-hidden');
        }
    }, [isMenu]);

    function animate(){
        requestAnimationFrame(animate);
    }
    animate();
    useEffect(() => {
        setTimeout(() => {
            homeMenuButtonRef.current.style.display = 'block';
        }, 200);
        homeMenuButtonRef.current.addEventListener('click', () => {
            setIsMenu(current => !current);
        });
        for(let i = 0; i < sites.current.length; i++){
            setTimeout(() => {
                siteLogos.current[i].classList.add('sites-show');
                siteIds.current[i].classList.add('sites-show');
            }, i * 100);
        }
    }, []);

    return (
        <div id="header">
            <div id="menu-options" className="menu-options-hidden">
                <ul>
                    <li>Home</li>
                    <li>My favorite</li>
                    <li>My stack</li>
                    <li>Works</li>
                </ul>
            </div>
            <div id="sites">
                <ul>
                    <li>
                        <a href="https://github.com/arkk200" rel="noopener" ref={e => sites.current[0] = e}>
                            <img src={github_logo} alt="github_logo" ref={e => siteLogos.current[0] = e}/>
                            <span ref={e => siteIds.current[0] = e}>arkk200</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div id="home-menu-button" ref={homeMenuButtonRef}>
                <div
                    ref={menuButton} className="menu-button">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div ref={homeButton} className="home-button">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default Header;