import React from "react";
import { Language } from "../../../Context/Language";
import { Context } from "../../../Context/context";
import { Context as ThemeContext } from "../../../Context/theme";
function Section4() {
    const {lang} = React.useContext(Context)
    const {theme} = React.useContext(ThemeContext)
    return (<>

    <section className="section4">
        <div className="container">
            <h2 className="section4__title45">{Language[lang].section4.a0}</h2>

            <ul className="section4__list">
                <li className="section4__item">
                    <h2 className="section4__title">01</h2>
                    <h3 className={`section__title2--${theme}`}>{Language[lang].section4.a1}</h3>
                    <p className={`section4__text--${theme}`}>{Language[lang].section4.a4}</p>

                    <button className="section4__btn">{Language[lang].header.a3}</button>
                </li>
                <li className="section4__item">
                    <h2 className="section4__title">02</h2>
                    <h3 className={`section__title2--${theme}`}>{Language[lang].section4.a2}</h3>
                    <p className={`section4__text--${theme}`}>C{Language[lang].section4.a5}</p>
                </li>
                <li className="section4__item">
                    <h2 className="section4__title">03</h2>
                    <h3 className={`section__title2--${theme}`}>{Language[lang].section4.a3}</h3>
                    <p className={`section4__text--${theme}`}>{Language[lang].section4.a6}</p>
                </li>
            </ul>
        </div>
    </section>

    </>)
}

export {Section4};