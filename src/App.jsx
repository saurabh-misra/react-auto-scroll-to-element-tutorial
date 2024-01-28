import { useRef } from "react";
import ScrollIntoView from './ScrollIntoView';
import ScrollIntoViewNavbar from './ScrollIntoViewNavbar';
import ScrollTo from './ScrollTo';

export default function App() {
    const navbarRef = useRef( null );

    // routing
    let page = <ScrollIntoView />;
    let fixedNavbar = false;
    if( location.pathname == "/scrollintoviewnavbar" ) {
        page = <ScrollIntoViewNavbar />;
        fixedNavbar = true;
    } else if ( location.pathname == "/scrollto" ) {
        page = <ScrollTo navbarRef={navbarRef} />;
        fixedNavbar = true;
    }

    return (
        <>
            <nav ref={navbarRef} className={`${ fixedNavbar && "sticky-top"} navbar navbar-expand-lg bg-body-tertiary`}>
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                ScrollIntoView
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/scrollintoviewnavbar" className="nav-link">
                                ScrollIntoView+FixedNavbar
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/scrollto" className="nav-link">
                                ScrollTo
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            { page }
        </>
    );
}