import "./Hero.scss";
import React from "react";
import { Context } from "../../../Context/context";
import { Language } from "../../../Context/Language";
export default function Hero() {
  const {lang} = React.useContext(Context)
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero__heading">{Language[lang].page.h11}</h1>
          <p className="hero__text">
          {Language[lang].page.p}
          </p>
        </div>
      </section>
    </>
  );
}
