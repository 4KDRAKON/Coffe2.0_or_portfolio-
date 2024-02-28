import React from "react";
import Logo from "../../../Lib/img/coffelogo.svg";
import { NavLink } from "react-router-dom";
import { Language } from "../../../Context/Language";
import { Context } from "../../../Context/context";
import { Context as ThemeContext } from "../../../Context/theme";
function Header() {


  const { lang, setLang } = React.useContext(Context)
    const Ref = React.useRef(null)

    const {theme, setTheme} = React.useContext(ThemeContext)

    const Plyus = ()=>{
      Ref.current.classList.add("modal2")
    }

    const minus = () =>{
      Ref.current.classList.remove("modal2")
  }
    console.log(lang);
  return (
    <header className="header">
      <div className="container">
        <NavLink to={"/Home"}>
          <img src={Logo} alt="logo" width={236} height={26} />
        </NavLink>

        <ul className="Header__list">
          <li className="Header__item">
            <NavLink className="Header__link" to={"/Home"}>
              {Language[lang].header.a1}
            </NavLink>
          </li>
          <li className="Header__item">
            <NavLink className="Header__link" to={"/About"}>
            {Language[lang].header.a2}
            </NavLink>
          </li>
          <li className="Header__item">
            <a className="Header__link" href="#link">
            {Language[lang].header.a3}
            </a>
          </li>
          <li className="Header__item2">
            <select className="nima" value={lang} onChange={(evt) => setLang(evt.target.value)}>
              <option value="UZ">UZ</option>
              <option value="RU">RU</option>
              <option value="EN">EN</option>
            </select>
            <select className="nimaa" value={theme} onChange={(evt) => setTheme(evt.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
            <button className="header__btn" onClick={Plyus}>Sing in</button>
          </li>
        </ul>

        <div className="modal" ref={Ref} onClick={minus}>
          <div className="form__box">
            <div className="form__value">
              <form >
                <div className="inputbox">
                <h2 className="login">Login</h2>
                <input type="email" required />
                <label htmlFor="">Contrasena</label>
                </div>
                <div className="inputbox">
                  <input type="password" required />
                  <label htmlFor="">Contrasena</label>
                </div>

                <div className="forget">
                  {/* <label htmlFor=""> <input type="chekbox" /> Recordar <a href="#link">Olvide micontrasena</a></label> */}

                  <button className="modal__btn">Log in</button>
                  {/* <div className="register">
                    <p className="modal__text">No Accaunt <a href="#link">Register</a></p>
                  </div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export { Header };
