import "./Our.scss";
import Ourimg from "../Img/our.jpeg";
import { Language } from "../../../Context/Language";
import { Context } from "../../../Context/context";
import { Context as ThemeContext } from "../../../Context/theme";
import React from "react";

export default function Our() {
  const {lang} = React.useContext(Context)
  const {theme} = React.useContext(ThemeContext)
  return (
    <section className="our">
      <div className="container">
        <img src={Ourimg} alt="ourimg" width={445} height={520} />

        <div className="our__info">
          <h2 className={`our__title--${theme}`}>{Language[lang].page2.h2}</h2>
          <p className={`our__text--${theme}`}>{Language[lang].page2.p}</p>
        </div>
      </div>
    </section>
  );
}
