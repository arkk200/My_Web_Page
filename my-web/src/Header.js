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

    const menuOptionWindow = useRef();
    const menuOptions = useRef();
    const menuOptionsBg = useRef();
    const menuOptionsLi = useRef([]);

    useEffect(() => {
        if (isMenu) { // 매뉴버튼을 눌렀는가?
            homeButton.current.classList.add('home-btn-hidden');
            menuButton.current.classList.remove('menu-btn-hidden');
            
            homeMenuButtonRef.current.classList.add('preventClick');
            
            setTimeout(() => {
                menuOptionWindow.current.classList.add('menu-options-window-hidden');

                homeMenuButtonRef.current.classList.remove('preventClick');
            }, 1000);
            menuOptionsBg.current.classList.remove('menu-options-bg-animation');
            for(let i = 0; i < 4; i++)
                setTimeout(() => {
                    menuOptionsLi.current[i].classList.remove('li-show-animation');
                }, 240 - i * 80);
        } else {
            homeMenuButtonRef.current.classList.add('preventClick');
            setTimeout(() => {
                homeMenuButtonRef.current.classList.remove('preventClick');
            }, 700);

            menuButton.current.classList.add('menu-btn-hidden');
            homeButton.current.classList.remove('home-btn-hidden');

            menuOptionWindow.current.classList.remove('menu-options-window-hidden');
            setTimeout(() => {
                menuOptionsBg.current.classList.add('menu-options-bg-animation');
            }, 0);
            for(let i = 0; i < 4; i++)
                setTimeout(() => {
                    menuOptionsLi.current[i].classList.add('li-show-animation');
                }, 300 + i * 100);
        }
    }, [isMenu]);
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
            <div id="menu-options" ref={menuOptionWindow}>
                <ul ref={menuOptions}>
                    <li ref={e => menuOptionsLi.current[0] = e}>Home</li>
                    <li ref={e => menuOptionsLi.current[1] = e}>My favorite</li>
                    <li ref={e => menuOptionsLi.current[2] = e}>My stack</li>
                    <li ref={e => menuOptionsLi.current[3] = e}>Works</li>
                </ul>
                <div id="menu-options-background" ref={menuOptionsBg}></div>
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
            <div id="home-menu-button" ref={homeMenuButtonRef} className="preventClick">
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