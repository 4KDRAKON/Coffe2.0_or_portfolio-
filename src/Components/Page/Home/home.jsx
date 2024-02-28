import React from "react";
import { Header } from "./header/header";
import {Section} from "../Home/Section/section"
import { Section2 } from "./section2/section2";
import { Section3 } from "./section3/section33";
import{Section4} from "../Home/section4/section4"
import { Footer } from "./footer/footer";
import { Context as ThemeContext } from "../../../Components/Context/theme";
function Home(){

    const {theme} = React.useContext(ThemeContext)
    return(

        <div className={`Home Home--${theme}`}>
        <Header />
        <Section />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />

        
        
        </div>
    )
}
export {Home};