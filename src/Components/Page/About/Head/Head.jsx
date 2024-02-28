import "./Head.scss";
import our1 from "../Img/our1.png";
import our3 from "../Img/our2.png";
import our2 from "../Img/our3.png";
import { Language } from "../../../Context/Language";
import { Context } from "../../../Context/context";
import { Context as ThemeContext } from "../../../Context/theme";
import React from "react";
export default function Head() {
  const {lang} = React.useContext(Context)
  const {theme} = React.useContext(ThemeContext)
  return (
    <section className="head">
      <div className="container">
        <p className="headtext">{Language[lang].page4.h0}</p>
        <div className="head__flex">
          <div className="head__div">
            <img src={our1} alt="img" />
            <h4 className={`head__heading--${theme}`}>{Language[lang].page4.h1}</h4>
            <p className={`head__text--${theme}`}>{Language[lang].page4.h5}</p>
          </div>

          <div className="head__div">
            <img src={our3} alt="img" />
            <h4 className={`head__heading--${theme}`}>{Language[lang].page4.h3}</h4>
            <p className={`head__text--${theme}`}>
            {Language[lang].page4.h6}
            </p>
          </div>

          <div className="head__div">
            <img src={our2} alt="img" />
            <h4 className={`head__heading--${theme}`}>{Language[lang].page4.h4}</h4>
            <p className={`head__text--${theme}`}>
            {Language[lang].page4.h7}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
