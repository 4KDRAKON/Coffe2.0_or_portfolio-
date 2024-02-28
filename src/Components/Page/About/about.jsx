import React from "react";
import {Header } from "../Home/header/header"
import Hero from "./Hero/Hero";
import Our from "./Our/Our";
import Quality from "./Quality/Quality";
import Head from "./Head/Head";
import {Footer} from "../Home/footer/footer"
import { Context } from "../../Context/theme";
function About() {
    const {theme} = React.useContext(Context)

    return(
        <div className={`Home Home--${theme}`}>
        <Header />
        <Hero />
        <Our />
        <Quality />
        <Head />
        <Footer />
        </div>
    )
}
export {About}