import React from "react";
import Logo from "../../../Lib/img/section3cofedona.svg"
import Logo2 from "../../../Lib/img/section3sovga.svg"
import Logo3 from "../../../Lib/img/section3car.svg"
import { Language } from "../../../Context/Language";
import { Context } from "../../../Context/context";
function Section3() {

    const {lang} = React.useContext(Context)

    return (
        <>
            <section className="section3">
                <div className="container">
                    <h2 className="section3__title">{Language[lang].section3.a1}</h2>
                    <p className="section3__text">{Language[lang].section3.a2}</p>

                    <ul className="section3__list">
                        <li className="section3__item">
                            <img src={Logo} alt="logo" width={72} height={52} />
                            <h2 className="secrtion__item__text">{Language[lang].section3.a3}</h2>
                            <p className="section__item__text2">{Language[lang].section3.a6}</p>
                        </li>
                        <li className="section3__item">
                            <img src={Logo2} alt="logo" width={72} height={52} />
                            <h2 className="secrtion__item__text">{Language[lang].section3.a4}</h2>
                            <p className="section__item__text2">{Language[lang].section3.a7}</p>
                        </li>
                        <li className="section3__item">
                            <img src={Logo3} alt="logo" width={72} height={52} />
                            <h2 className="secrtion__item__text">{Language[lang].section3.a5}</h2>
                            <p className="section__item__text2">{Language[lang].section3.a8}</p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
export { Section3 };