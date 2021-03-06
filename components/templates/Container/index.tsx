import React, {ReactChildren} from "react";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import Navigation from "../../organisms/Navigation";

interface IProps {
    header?:boolean;
    navigation?:boolean;
    footer?:boolean;
    type?: 'base' | 'detail' | 'write';
    user?:{
        id:string;
        socialId:number;
    } | null;
    click?:() => void;
    children: any;
}

const Container= ({header = true, navigation = true, footer = true, type = 'base', user=null, click, children}:IProps) => {
    return (
        <>
            { header && <Header type={type} click={click}/>}
            {children}
            { navigation && <Navigation user={user} />}
            { footer && <Footer />}
        </>
    )
}
export default Container;
