import React from "react";
import Erorimg from "../../Lib/img/errorr.jpg"
import { Header } from "../Home/header/header";
import { Footer } from "../Home/footer/footer";
import { Context } from "../../Context/theme";
function Error(){
    const {theme} = React.useContext(Context)
    return(
        <div className={`Home Home--${theme}`}>
        <Header />
        <div className="container">
        <img className="error__img"  src={Erorimg} alt="Error 404" width={1000} height={800} />
        </div>
        <Footer />
        </div>
    )
}
export {Error}