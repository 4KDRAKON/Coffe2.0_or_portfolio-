import React from "react";
import Log from "../../../Lib/img/footerlogo.svg"
import Facebook from "../../../Lib/img/facebook.svg"
import twit from "../../../Lib/img/twitter.svg"
import instagram from "../../../Lib/img/instagram.svg"

import { Context } from "../../../Context/context";
import { Language } from "../../../Context/Language";
function Footer(){
    const {lang} = React.useContext(Context)
    return(
        <>
        <footer className="footer">
            <div className="container">
                <img src={Log} alt="logo" width={236} height={26} />

                <ul className="footer__list">
                    <li className="footer__item">
                        <a className="footer__link" href="#link">{Language[lang].header.a1}</a>
                    </li>
                    <li className="footer__item">
                        <a className="footer__link" href="#link">{Language[lang].header.a2}</a>
                    </li>
                    <li className="footer__item">
                        <a className="footer__link" href="#link">{Language[lang].header.a3}</a>
                    </li>
                </ul>

                <ul className="footer__list">
                    <li className="footer__item">
                        <a href="#link">
                            <img src={Facebook} alt="logo" width={24} height={24} />
                        </a>
                    </li>
                    <li className="footer__item">
                        <a href="#link">
                            <img src={twit} alt="logo" width={24} height={24} />
                        </a>
                    </li>
                    <li className="footer__item">
                        <a href="#link">
                            <img src={instagram} alt="logo" width={24} height={24} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
        
        </>
    )
}
export {Footer};