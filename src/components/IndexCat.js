import React from "react";
import { Nav } from "react-bootstrap";
import RequestCat from "./RequestCat";
import "../styles/IndexCat.css";


const IndexCat = () => {
  return (
    <div className="container-menu">
      <Nav defaultActiveKey="/Inicio" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/Inicio">Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">Aprende algo De nosotros</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>

      <RequestCat/>
      <div className="imagen"> </div>
        <span>¿Sabias Que?</span>
        <p className="parrafo1">En términos de desarrollo, el primer año de vida de un gato es igual a los primeros 15 años de una vida humana. Después de su segundo año, un gato tiene 25 años equivalentes al de un humano. Y después de los dos años, cada año de vida de un gato equivale a unos 7 años humanos.</p>
        <p className="parrafo2">Los gatos pueden rotar sus orejas 180 grados.</p>
        <p className="parrafo3">La audición del gato promedio es al menos cinco veces más aguda que la de un adulto humano.</p>
        <p className="parrafo4">En la raza de gato más grande, el macho promedio pesa aproximadamente 9 kilos.</p>
        <p className="parrafo5">Los gatos domésticos pasan cerca del 70 por ciento del día durmiendo, y 15 por ciento del día acicalándose.</p>
        <p className="parrafo6">Los gatos tienen cinco dedos en cada pata delantera, pero sólo cuatro en la parte posterior. Sin embargo, no es raro que los gatos tengan dedos extra. ¡El gato con la mayor cantidad de dedos conocidos tenía 32, ocho en cada pata!</p>
        <p className="parrafo7">Los maullidos no son un lenguaje innato para gatos: ¡los desarrollaron para comunicarse con los humanos!</p>
    </div>
  );
};

export default IndexCat;
