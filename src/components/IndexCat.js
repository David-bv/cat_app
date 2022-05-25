import React from "react";
import { Nav } from "react-bootstrap";
import { Mostrar } from '../components/Mostrar';

const IndexCat = () => {
  return (
    <div>
      <Nav defaultActiveKey="/Inicio" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/Inicio">Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">Aprende algo De nosotros</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
      </Nav>

      <Mostrar />
    </div>
  );
};

export default IndexCat;
