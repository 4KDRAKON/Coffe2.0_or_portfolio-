import "./Quality.scss";
import Qualityimg from "../Img/quality.jpeg";
import { Language } from "../../../Context/Language";
import { Context } from "../../../Context/context";
import React from "react";
export default function Quality() {
  const {lang} = React.useContext(Context)
  return (
    <section className="quality">
      <div className="container">
        <div className="quality__info">
          <h3 className="quality__heading">{Language[lang].page3.h4}</h3>
          <p className="quality__text">
          {Language[lang].page3.p3}
          </p>
        </div>
        <img
          className="quality__img"
          src={Qualityimg}
          alt="img"
          width={445}
          height={474}
        />
      </div>
    </section>
  );
}
