import React from "react";
import Logo from "../../../Lib/img/section2cofe.svg";
import { Context } from "../../../Context/context";
import { Language } from "../../../Context/Language";
import { Context as ThemeContext } from "../../../Context/theme";
function Section2() {

    const {lang} = React.useContext(Context)
    const {theme} = React.useContext(ThemeContext)
    return (
        <>
            <section className="scection2">
                <div className="container">
                    <ul className="Section__list">
                        <li className="section2__iten">
                            <img src={Logo} alt="rasm"  width={255} height={193} />
                            <h2 className="section2__title">{Language[lang].section2.a1}</h2>
                            <p className={`section2__text--${theme}`}>{Language[lang].section2.a5}</p>
                        </li>
                        <li className="section2__iten">
                            <img src={Logo} alt="rasm"  width={255} height={193} />
                            <h2 className="section2__title">{Language[lang].section2.a3}</h2>
                            <p className={`section2__text--${theme}`}>{Language[lang].section2.a6}</p>
                        </li>
                        <li className="section2__iten">
                            <img src={Logo} alt="rasm"  width={255} height={193} />
                            <h2 className="section2__title">{Language[lang].section2.a3}</h2>
                            <p className={`section2__text--${theme}`}>{Language[lang].section2.a7}</p>
                        </li>
                        <li className="section2__iten">
                            <img src={Logo} alt="rasm" />
                            <h2 className="section2__title">{Language[lang].section2.a4}</h2>
                            <p className={`section2__text--${theme}`}>{Language[lang].section2.a8}</p>
                        </li>
                    </ul>
                </div>
            </section>

        </>
    )
}
export { Section2 };