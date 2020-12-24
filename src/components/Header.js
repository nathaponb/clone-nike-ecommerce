import React from 'react'
import Navbar from './Navbar'

const Header = ({ lastPos, isScrollUp }) => {

    // conditional classNames //
    const firstScroll = lastPos > 0 ? 'header__inner header__inner--nav header__inner--hidden': 'header__inner header__inner--nav';
    const scrollUp = isScrollUp ? 'header__inner--fixed' : '';
    const topStack = lastPos < 60 ? 'header__inner--topstack' : '';

    return (
        <div className="header">
            <div className="header__inner header__inner--brand">
                <div>
                    <p>Brand Header</p>
                    <p>Brand Header</p>
                </div>
            </div>
            <header className={` ${firstScroll} ${scrollUp} ${ topStack }`}>
                <div>
                    <div className="header__nav-logo">
                        <a href="/">
                            <svg className="header__nav-logo" height="60px" width="60px" fill="#111" viewBox="0 0 69 32"><path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path></svg>
                        </a>
                    </div>

                    {/* nav-bar */}
                    <Navbar />
                    

                    <div className="toggle-wrapper">
                        <div className="block-link block-link--lg">
                            <a href="#">
                                <svg width="24px" height="24px" fill="#111" viewBox="0 0 24 24"><path d="M21.11 4a6.6 6.6 0 0 0-4.79-1.92A6.27 6.27 0 0 0 12 3.84 6.57 6.57 0 0 0 2.89 4c-2.8 2.68-2.45 7.3.88 10.76l6.84 6.63A2 2 0 0 0 12 22a2 2 0 0 0 1.37-.54l.2-.19.61-.57c.6-.57 1.42-1.37 2.49-2.41l2.44-2.39 1.09-1.07c3.38-3.55 3.8-8.1.91-10.83zm-2.35 9.4l-.25.24-.8.79-2.44 2.39c-1 1-1.84 1.79-2.44 2.36L12 20l-6.83-6.68c-2.56-2.66-2.86-6-.88-7.92a4.52 4.52 0 0 1 6.4 0l.09.08a2.12 2.12 0 0 1 .32.3l.9.94.9-.94.28-.27.11-.09a4.52 4.52 0 0 1 6.43 0c1.97 1.9 1.67 5.25-.96 7.98z"></path></svg>
                            </a>
                        </div>
                        <div className="block-link block-link--xs-margin">
                            <a href="#">
                                <svg width="24px" height="24px" fill="#111" viewBox="0 0 24 24"><path d="M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z"></path><path d="M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z"></path></svg>
                            </a>
                        </div>
                        <button className="block-btn">
                            <svg width="24px" height="24px" fill="#111" viewBox="0 0 24 24"><path d="M21 13H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1zm0-8H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1zm0 16H3c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1z"></path></svg>
                        </button>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Header