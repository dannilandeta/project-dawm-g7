
import React from "react";
import './estilo.css';
// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/madera.png").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">B' Natural</h1>
            <h30 id="tituloPrincipal">Te enseño a cuidar tu alimentación, mermeladas 100% artesanales.</h30>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
