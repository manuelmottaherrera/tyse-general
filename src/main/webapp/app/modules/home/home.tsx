import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { Alert, Col, Row } from 'reactstrap';

import { useAppSelector } from 'app/config/store';
import BrandLogo from 'app/shared/components/brand-logo/brand-logo';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <Row>
      <Col md="3" className="pad">
        {/* <span className="hipster rounded" /> */}
        <BrandLogo />
      </Col>
      <Col md="9">
        <h1 className="display-4">¡Bienvenido!</h1>
        <p className="lead">Página de inicio temporal</p>
        {account?.login ? (
          <div>
            <Alert color="success" fade={false}>
              Está conectado como &quot;{account.login}&quot;.
            </Alert>
          </div>
        ) : (
          <div>
            <Alert color="warning" fade={false}>
              Si desea
              <span>&nbsp;</span>
              <Link to="/login" className="alert-link">
                iniciar sesión
              </Link>
            </Alert>

            <Alert color="warning" fade={false}>
              ¿Aún no tienes una cuenta?&nbsp;
              <Link to="/account/register" className="alert-link">
                Crea una cuenta
              </Link>
            </Alert>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default Home;
