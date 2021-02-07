import React from 'react';
import Navigation from "../components/organisms/navigation";

const Layout = ({children}) => (
    <>
        {children}
        <Navigation />
    </>
)
export default Layout;
