import React from 'react';
import './brand-logo.scss';
import { MdEmail } from 'react-icons/md';
import { TbWorldWww } from 'react-icons/tb';

export default function BrandLogo() {
  return (
    <div className="brand-logo">
      <span className="tyse-logo rounded" />
      <span className="icons-array">
        <a href="mailto:ejortegon@tecnologiayservicioselectorales.com" className="icon">
          <MdEmail />
        </a>
        <a href="https://www.tecnologiayservicioselectorales.com" className="icon">
          <TbWorldWww />
        </a>
      </span>
    </div>
  );
}
