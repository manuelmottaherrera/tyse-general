import React from 'react';
import './login-tyse.scss';
import { GoPerson } from 'react-icons/go';
import { CiLock } from 'react-icons/ci';
import { MdEmail } from 'react-icons/md';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import BrandLogo from 'app/shared/components/brand-logo/brand-logo';

export default function LoginTyse() {
  const [isToggled, setIsToggled] = useState(false);

  function onClickSignInToggle(): void {
    setIsToggled(false);
  }

  function onClickSignUpToggle(): void {
    setIsToggled(true);
  }

  return (
    <>
      <div className={'container ' + (isToggled ? 'toggle' : '')}>
        <div className="container-form">
          <form className="sign-in">
            <h2 className="title">Iniciar Sesión</h2>
            <BrandLogo />
            <span className="text-basic">Use su Usuario y Contraseña</span>
            <div className="container-input">
              <GoPerson />
              <input type="text" placeholder="Usuario" />
            </div>
            <div className="container-input">
              <CiLock />
              <input type="password" placeholder="Contraseña" />
            </div>
            <Link className="link-general" to="/account/reset/request" data-cy="forgetYourPasswordSelector">
              ¿Ha olvidado su contraseña?
            </Link>
            <div>
              <button type="submit" className="btn btn-primary">
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
        <div className="container-form">
          <form className="sign-up">
            <h2 className="title">Registrarse</h2>
            <BrandLogo />
            <span className="text-basic">Registrese para acceder a la plataforma</span>
            <div className="container-input">
              <GoPerson />
              <input type="text" placeholder="Nombre de Usuario" />
            </div>
            <div className="container-input">
              <MdEmail />
              <input type="email" placeholder="Correo Electrónico" />
            </div>
            <div className="container-input">
              <CiLock />
              <input type="password" placeholder="Contraseña" />
            </div>
            {/* <button type="submit" className="btn">
              Registrarse
            </button> */}
            <Link to="/account/register">
              <button type="button" className="btn btn-primary">
                Registrarse
              </button>
            </Link>
          </form>
        </div>
        <div className="container-welcome">
          <div className="welcome-sign-up welcome">
            <h3>¡Bienvenido!</h3>
            <p>Ingrese sus datos personales para usar todas las funciones del sitio</p>
            <button className="btn button-transparent" onClick={() => onClickSignUpToggle()}>
              Registrarse
            </button>
          </div>
          <div className="welcome-sign-in welcome">
            <h3>¡Hola!</h3>
            <p>Registrese con sus datos personales para usar todas las funciones del sitio</p>
            <button className="btn button-transparent" onClick={() => onClickSignInToggle()}>
              Iniciar Sesión
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
