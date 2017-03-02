import React from 'react'
import MainNav from '../main-nav'
import './layout.css'

let Layout = (props) => (
    <div className="Layout">
        <header className="Layout-Header">
        </header>
        <div className="Layout-Body">
            <aside className="Layout-Menu">
                <MainNav />
            </aside>
            <div className="Layout-Main">
                {props.children}
            </div>
        </div>
    </div>
);

Layout.propTypes = {
    children: React.PropTypes.node
};

export default Layout