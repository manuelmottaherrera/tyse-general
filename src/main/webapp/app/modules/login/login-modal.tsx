import React, { useState, useCallback } from 'react';
import { type FieldError, useForm } from 'react-hook-form';
import { ValidatedField } from 'react-jhipster';
import { Alert, Button, Col, Form, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';

import { Link } from 'react-router-dom';

import ReCaptchaComponent from 'app/shared/components/recaptcha/recaptcha-component';
import BrandLogo from 'app/shared/components/brand-logo/brand-logo';

export interface ILoginModalProps {
  showModal: boolean;
  loginError: boolean;
  handleLogin: (username: string, password: string, rememberMe: boolean) => void;
  handleClose: () => void;
}

export default function LoginModal(props: ILoginModalProps) {
  const login = ({ username, password, rememberMe }) => {
    props.handleLogin(username, password, rememberMe);
  };

  const {
    handleSubmit,
    register,
    formState: { errors, touchedFields },
  } = useForm({ mode: 'onTouched' });

  const { loginError, handleClose } = props;

  const handleLoginSubmit = e => {
    handleSubmit(login)(e);
  };

  return (
    <Modal isOpen={props.showModal} toggle={handleClose} backdrop="static" id="login-page" autoFocus={false}>
      <Form onSubmit={handleLoginSubmit}>
        <ModalHeader id="login-title" data-cy="loginTitle" toggle={handleClose}>
          Iniciar Sesión
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md="12">
              <BrandLogo />
            </Col>
            <Col md="12">
              {loginError ? (
                <Alert color="danger" data-cy="loginError">
                  <strong>¡El inicio de sesión ha fallado!</strong> Por favor, revise las credenciales e intente de nuevo.
                </Alert>
              ) : null}
            </Col>
            <Col md="12">
              <ValidatedField
                name="username"
                label="Usuario"
                placeholder="Ingrese su Usuario"
                required
                autoFocus
                data-cy="username"
                validate={{ required: '¡El usuario no puede estar vacío!' }}
                register={register}
                error={errors.username as FieldError}
                isTouched={touchedFields.username}
              />
              <ValidatedField
                name="password"
                type="password"
                label="Contraseña"
                placeholder="Ingrese su Contraseña"
                required
                data-cy="password"
                validate={{ required: '¡Debe digitar su contraseña!' }}
                register={register}
                error={errors.password as FieldError}
                isTouched={touchedFields.password}
              />
              <ValidatedField
                name="rememberMe"
                type="checkbox"
                check
                label="Iniciar sesión automáticamente"
                value={false}
                register={register}
              />
              <ReCaptchaComponent />
            </Col>
          </Row>
          <div className="mt-1">&nbsp;</div>
          <Alert color="warning" fade={false}>
            <Link to="/account/reset/request" data-cy="forgetYourPasswordSelector">
              ¿Ha olvidado su contraseña?
            </Link>
          </Alert>
          <Alert color="warning" fade={false}>
            <span>¿Aún no tienes una cuenta?</span> <Link to="/account/register">Crea una Cuenta</Link>
          </Alert>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={handleClose} tabIndex={1}>
            Cancelar
          </Button>
          <Button color="primary" type="submit" data-cy="submit" tabIndex={2}>
            Iniciar Sesión
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
}
