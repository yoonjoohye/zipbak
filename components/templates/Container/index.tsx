import React, {ReactChildren} from "react";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import Navigation from "../../organisms/Navigation";

interface IProps {
    header:boolean;
    navigation:boolean;
    footer:boolean;
    type: 'base' | 'detail' | 'write';
}

const Container:React.FC<IProps> = ({header = true, navigation = true, footer = true, type = 'base', children}) => {
    return (
        <>
            { header && <Header type={type}/>}
            {children}
            { navigation && <Navigation />}
            { footer && <Footer />}
        </>
    )
}
export default Container;
