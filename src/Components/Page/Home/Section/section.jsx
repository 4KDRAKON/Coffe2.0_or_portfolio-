import React from "react";
import { Context } from "../../../Context/context";
import { Language } from "../../../Context/Language";
function Section() {
    
    const {lang} = React.useContext(Context)
    return (
        <section className="section">
            <div className="container">
                <div className="section__about">
                    <h1 className="section__title">{Language[lang].section.aa1}</h1>
                    <p className="section__text">{Language[lang].section.aa2}</p>
                    <button className="section__btn">{Language[lang].header.a3}</button>
                </div>
            </div>
        </section>
    );
}

export { Section };
